import Placeholder from '../components/Placeholder'
import { skills, tools } from '../data/site'

export default function About() {
  return (
    <>
      <section className="shell pt-16 md:pt-24">
        <h1 className="text-[clamp(2.75rem,9vw,8rem)] leading-none tracking-tight">
          About me
        </h1>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_2.5fr] md:items-start">
          <Placeholder
            ratio="aspect-square"
            className="w-40 md:w-full md:max-w-48"
          />
          <div>
            <p className="eyebrow">(Introduction)</p>
            <p className="mt-3 text-[clamp(1.25rem,2.4vw,2.25rem)] leading-snug tracking-tight">
              Hello again, I&apos;m Johann, a Marketing &amp; Brand Designer
              based in Vancouver, working across brand identity, digital
              marketing, and web design, with a background in UX/UI and
              front-end development.
            </p>
          </div>
        </div>
      </section>

      <section className="shell mt-24 grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="eyebrow">(First Experiences)</p>
          <div className="mt-3 space-y-6 leading-relaxed">
            <p>
              I didn&apos;t start in design. I started in Marketing
              Management, focused on communications. That&apos;s where I
              picked up the fundamentals that still shape how I work:
              storytelling, brand positioning, understanding who you&apos;re
              actually talking to. But I kept gravitating toward the visual
              side of the job, the part where an idea becomes something
              people can actually see and use.
            </p>
            <p>
              That pull led me to New Media Design &amp; Web Development at
              BCIT, where I paired that marketing foundation with UX
              strategy, UI design, and front-end code. From there I landed a
              design and web development internship at Convergence/Pixel
              Ramen, working on branding, visual content, web builds, QA, and
              front-end. It was my first real taste of shipping work for
              actual clients instead of a classroom brief.
            </p>
          </div>
        </div>
        <Placeholder ratio="aspect-[4/3]" />
      </section>

      <section className="shell mt-24 grid gap-10 md:grid-cols-2 md:items-start">
        <Placeholder ratio="aspect-[4/3]" />
        <div>
          <p className="eyebrow">(Today)</p>
          <p className="mt-3 leading-relaxed">
            Right now I&apos;m focused on brand identity and digital
            marketing work that doesn&apos;t separate strategy from craft,
            and web/product design that survives contact with real
            production. I&apos;m increasingly drawn to print and
            typography-led work as a growth area, and I&apos;m looking for
            projects where design, marketing, and front-end aren&apos;t three
            separate handoffs.
          </p>
        </div>
      </section>

      <section className="shell mt-28 grid gap-12 md:grid-cols-2">
        <TagGroup title="Skills" items={skills} />
        <TagGroup title="Tools" items={tools} />
      </section>

      <section className="shell mt-28 grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="eyebrow">(Beyond the Screen)</p>
          <div className="mt-3 space-y-6 leading-relaxed">
            <p>
              Outside of work, I love staying active and finding a balance away
              from the digital world. These days I like going to the gym,
              playing golf, fishing, or trying new hobbies.
            </p>
            <p>I&apos;ve also enjoyed photography and fashion.</p>
            <p>
              Music also plays a big role in my life. I listen to music
              during almost every activity, while working, travelling,
              playing sports, or just going through an ordinary day. It helps
              me focus, reset my mind, or create the right mood for whatever
              I am doing.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Placeholder ratio="aspect-[3/4]" />
          <Placeholder ratio="aspect-[3/4]" />
        </div>
      </section>
    </>
  )
}

function TagGroup({ title, items }) {
  return (
    <div>
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
    </div>
  )
}
