import Parallax from '../components/Parallax'
import { RevealGroup, RevealItem } from '../components/Reveal'
import { skills, tools } from '../data/site'

export default function About() {
  return (
    <>
      <RevealGroup as="section" trigger="mount" className="shell pt-16 md:pt-24">
        <RevealItem
          as="h1"
          className="text-[clamp(2.5rem,7.5vw,6.5rem)] leading-none tracking-tight"
        >
          About me
        </RevealItem>

        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-[1fr_2.5fr] md:items-start">
          <RevealItem>
            <Parallax
              range={16}
              scale={1.24}
              className="aspect-square w-40 rounded-sm md:w-full md:max-w-48"
            >
              <img
                src="/images/about/portrait.jpg"
                alt="Johann Chua"
                className="h-full w-full object-cover"
              />
            </Parallax>
          </RevealItem>
          <RevealItem>
            <p className="eyebrow">(Introduction)</p>
            <p className="mt-3 text-[clamp(1.25rem,2.4vw,2.25rem)] leading-snug tracking-tight">
              Hello again, I&apos;m Johann, a Marketing &amp; Digital Designer
              based in Vancouver. Currently, I&apos;m working across brand
              identity, digital marketing, and web design and have
              experience in UX/UI and Front-End Development.
            </p>
          </RevealItem>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:mt-24 sm:grid-cols-2">
          <RevealItem>
            <Parallax range={32} scale={1.3} className="aspect-[4/3] w-full rounded-sm">
              <img
                src="/images/about/bridge.jpg"
                alt="Lions Gate Bridge at dusk"
                className="h-full w-full object-cover"
              />
            </Parallax>
          </RevealItem>
          <RevealItem>
            <Parallax range={32} scale={1.3} className="aspect-[4/3] w-full rounded-sm">
              <img
                src="/images/about/taking-picture.jpg"
                alt="Johann taking a photo with a camera"
                className="h-full w-full object-cover"
              />
            </Parallax>
          </RevealItem>
        </div>
      </RevealGroup>

      <section className="shell mt-28 md:mt-40">
        <RevealGroup>
          <SectionRow label="First Experiences">
            <p>
              Design was never the plan for me, but more of an idea and a
              passion. Growing up, I had tons of interest in different
              creative fields like photography and fashion, which I thought
              would be great to turn into a career. But I got pulled away
              and led into the thought that the creative industry could
              only get me so far.
            </p>
            <p>
              So I started in Marketing Management, focusing on
              communications. That&apos;s mainly where I picked up the
              fundamentals that still shape how I like to work —
              storytelling, brand positioning, and understanding who
              you&apos;re really talking to. But again, I felt more
              compelled toward the visual side of the job, the part where
              an idea becomes something people can see.
            </p>
            <p>
              That pull led me to New Media Design &amp; Web Development at
              BCIT, where I paired that marketing foundation with UX
              strategy, UI design, and front-end code. From there I landed a
              design and web development internship at Convergence/Pixel
              Ramen, working on branding, visual content, web builds, QA,
              and front-end. It was my first real taste of working across
              cross-functional teams and clients instead of a classroom
              brief.
            </p>
          </SectionRow>
        </RevealGroup>
      </section>

      <section className="shell mt-28 md:mt-40">
        <RevealGroup>
          <SectionRow label="Today">
            <p>
              Right now I&apos;m focused on brand and marketing work —
              identity systems, campaigns, the story behind how a company
              shows up — and I take it further than a typical marketing
              role by designing and building the product experience myself.
              I&apos;m increasingly drawn to print and typography-led work
              as a growth area, and I&apos;m looking for roles where
              marketing and design aren&apos;t split across two different
              hires.
            </p>
          </SectionRow>
        </RevealGroup>
      </section>

      <RevealGroup
        as="section"
        className="shell mt-28 grid gap-12 md:mt-40 md:grid-cols-2"
      >
        <TagGroup title="Skills" items={skills} />
        <TagGroup title="Tools" items={tools} />
      </RevealGroup>

      <section className="shell mt-28 md:mt-40">
        <RevealGroup>
          <SectionRow label="Beyond the Screen">
            <p>
              Outside of work, I love staying active and finding a balance
              away from the digital world. These days I like going to the
              gym, playing golf, fishing, or trying new hobbies.
            </p>
            <p>I&apos;ve also enjoyed photography and fashion.</p>
            <p>
              Music also plays a big role in my life. I listen to music
              during almost every activity, while working, travelling,
              playing sports, or just going through an ordinary day. It
              helps me focus, reset my mind, or create the right mood for
              whatever I am doing.
            </p>
          </SectionRow>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <RevealItem>
              <Parallax range={24} scale={1.28} className="aspect-[3/4] w-full rounded-sm">
                <img
                  src="/images/about/skyline.jpg"
                  alt="Hong Kong skyline at dusk"
                  className="h-full w-full object-cover"
                />
              </Parallax>
            </RevealItem>
            <RevealItem>
              <Parallax range={24} scale={1.28} className="aspect-[3/4] w-full rounded-sm">
                <video
                  src="/videos/beyond-the-screen.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              </Parallax>
            </RevealItem>
            <RevealItem>
              <Parallax range={24} scale={1.28} className="aspect-[3/4] w-full rounded-sm">
                <img
                  src="/images/about/lighthouse.jpg"
                  alt="Prospect Point lighthouse and seawall"
                  className="h-full w-full object-cover"
                />
              </Parallax>
            </RevealItem>
            <RevealItem>
              <Parallax range={24} scale={1.28} className="aspect-[3/4] w-full rounded-sm">
                <img
                  src="/images/about/fishing.jpg"
                  alt="Johann tying a fishing line by the water"
                  className="h-full w-full object-cover"
                />
              </Parallax>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>
    </>
  )
}

// A 4-column row: the label sits in column 1, the body copy fills columns
// 2-4, both on the same row.
function SectionRow({ label, children }) {
  return (
    <div className="grid gap-y-4 sm:grid-cols-4 sm:gap-x-6">
      <RevealItem
        as="h2"
        className="text-muted text-2xl tracking-tight sm:col-span-1 md:text-3xl"
      >
        {label}
      </RevealItem>
      <RevealItem className="space-y-6 leading-relaxed sm:col-span-3">
        {children}
      </RevealItem>
    </div>
  )
}

function TagGroup({ title, items }) {
  return (
    <RevealItem>
      <h2 className="text-[clamp(1.75rem,3.5vw,3.25rem)] tracking-tight">
        {title}
        <sup className="text-accent ml-1 align-top top-0 text-base">({items.length})</sup>
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="pill">
            {item}
          </li>
        ))}
      </ul>
    </RevealItem>
  )
}
