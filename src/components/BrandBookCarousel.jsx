import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Closed (unclicked) view: one large featured page up top, with edge
// arrows to step through the book, and a smaller filmstrip of every page
// underneath for jumping straight to one. Clicking the big image (or
// pressing Escape/arrows once inside) opens the full-screen modal below.
export default function BrandBookCarousel({ items }) {
  const [mainIndex, setMainIndex] = useState(0)
  const [openIndex, setOpenIndex] = useState(null)
  const [dragging, setDragging] = useState(false)
  const total = items.length
  const current = items[mainIndex]

  // Click-and-drag horizontal scrolling for the filmstrip (mouse only —
  // touch already scrolls natively via overflow-x). `moved` past a small
  // threshold suppresses the thumbnail's click so a drag doesn't also
  // select whatever page it ends on.
  const trackRef = useRef(null)
  const drag = useRef({ isDown: false, startX: 0, scrollLeft: 0, moved: false })

  function handlePointerDown(e) {
    if (e.pointerType !== 'mouse') return
    const track = trackRef.current
    drag.current = {
      isDown: true,
      startX: e.clientX,
      scrollLeft: track.scrollLeft,
      moved: false,
    }
    track.setPointerCapture(e.pointerId)
    setDragging(true)
  }

  function handlePointerMove(e) {
    if (!drag.current.isDown) return
    const dx = e.clientX - drag.current.startX
    if (Math.abs(dx) > 5) drag.current.moved = true
    trackRef.current.scrollLeft = drag.current.scrollLeft - dx
  }

  function handlePointerUp(e) {
    if (!drag.current.isDown) return
    drag.current.isDown = false
    setDragging(false)
    trackRef.current?.releasePointerCapture(e.pointerId)
  }

  return (
    <>
      <div className="space-y-4">
        <div className="border-line group relative overflow-hidden rounded-sm border">
          <button
            type="button"
            onClick={() => setOpenIndex(mainIndex)}
            className="block w-full cursor-zoom-in"
          >
            <img
              src={current.src}
              alt={current.alt}
              className="aspect-video w-full object-contain"
            />
          </button>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pt-10 pb-3 text-sm text-white">
            {mainIndex + 1} / {total} — {current.caption}
          </span>

          {mainIndex > 0 && (
            <button
              type="button"
              onClick={() => setMainIndex((i) => i - 1)}
              aria-label="Previous page"
              className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/70 p-2.5 text-ink backdrop-blur-md transition-colors hover:bg-white/90"
            >
              ‹
            </button>
          )}
          {mainIndex < total - 1 && (
            <button
              type="button"
              onClick={() => setMainIndex((i) => i + 1)}
              aria-label="Next page"
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/70 p-2.5 text-ink backdrop-blur-md transition-colors hover:bg-white/90"
            >
              ›
            </button>
          )}
        </div>

        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className={`scrollbar-none -mx-6 flex gap-3 overflow-x-auto px-6 pb-2 select-none sm:-mx-0 sm:px-0 ${
            dragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {items.map((page, i) => (
            <button
              key={page.src}
              type="button"
              draggable={false}
              onClick={() => {
                if (drag.current.moved) return
                setMainIndex(i)
              }}
              className={`relative h-16 shrink-0 overflow-hidden rounded-sm border sm:h-20 ${
                i === mainIndex
                  ? 'border-accent'
                  : 'border-line opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={page.src}
                alt={page.alt}
                loading="lazy"
                draggable={false}
                className="h-full w-auto object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <BrandBookModal
            items={items}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onIndexChange={(i) => {
              setOpenIndex(i)
              setMainIndex(i)
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}

// Full-screen viewer. Swipe or drag horizontally to move between pages,
// arrow buttons and left/right arrow keys do the same, Escape or the
// close button dismiss it. Clicking a page zooms in centered on wherever
// was clicked (so you can zoom into one specific element rather than just
// the middle of the page) and clicking again zooms back out.
function BrandBookModal({ items, index, onClose, onIndexChange }) {
  const [zoomed, setZoomed] = useState(false)
  const [zoomOrigin, setZoomOrigin] = useState('50% 50%')
  const total = items.length
  const current = items[index]

  useEffect(() => {
    setZoomed(false)
    setZoomOrigin('50% 50%')
  }, [index])

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, zoomed])

  function goNext() {
    if (zoomed) return
    onIndexChange((index + 1) % total)
  }

  function goPrev() {
    if (zoomed) return
    onIndexChange((index - 1 + total) % total)
  }

  function handleImageClick(e) {
    e.stopPropagation()
    if (zoomed) {
      setZoomed(false)
      return
    }
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomOrigin(`${x}% ${y}%`)
    setZoomed(true)
  }

  return (
    <motion.div
      className="text-ink fixed inset-0 z-50 flex flex-col bg-white/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Brand book page viewer"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="border-line flex items-center justify-between border-b px-6 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-muted text-sm">
          {index + 1} / {total} — {current.caption}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="text-sm underline underline-offset-4"
        >
          Close
        </button>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-center px-4 pb-4"
            drag={zoomed ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(e, info) => {
              if (zoomed) return
              if (info.offset.x < -60) goNext()
              else if (info.offset.x > 60) goPrev()
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose()
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <img
              src={current.src}
              alt={current.alt}
              onClick={handleImageClick}
              draggable={false}
              style={{ transformOrigin: zoomOrigin }}
              className={`border-line max-h-full max-w-full touch-none rounded-sm border object-contain shadow-xl transition-transform duration-300 select-none ${
                zoomed ? 'scale-[2.2] cursor-zoom-out' : 'cursor-zoom-in'
              }`}
            />
          </motion.div>
        </AnimatePresence>

        {!zoomed && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              aria-label="Previous page"
              className="text-ink absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/70 p-3 backdrop-blur-md transition-colors hover:bg-white/90 sm:left-6"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              aria-label="Next page"
              className="text-ink absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/70 p-3 backdrop-blur-md transition-colors hover:bg-white/90 sm:right-6"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div
        className="flex justify-center gap-1.5 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        {items.map((page, i) => (
          <button
            key={page.src}
            type="button"
            aria-label={`Go to page ${i + 1}`}
            onClick={() => !zoomed && onIndexChange(i)}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? 'bg-accent' : 'bg-ink/20'
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}
