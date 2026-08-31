export const categories = ['All', 'UX/UI Design', 'Branding', 'Marketing']

export const projects = [
  {
    slug: 'lifeguard-digital-health',
    title: 'Lifeguard Digital Health',
    sector: 'Public Health & Safety',
    year: '2026',
    featured: true,
    categories: ['Branding'],
    scope: 'Branding',
    software: 'Illustrator, Photoshop, Figma',
    summary:
      'Visual and verbal identity of Lifeguard Digital Health a purpose-driven company in the public health and safety sector.',
    heroVideo: '/videos/lifeguard-hero.mp4',
    sections: [
      {
        id: 'overview',
        heading: 'Overview',
        blocks: [
          {
            type: 'text',
            heading: 'Introduction',
            body: [
              'Lifeguard Digital Health began in 2017 with a single, urgent focus: using technology to intervene in preventable loss during the opioid crisis. In the years since, our work has grown well beyond that starting point, from crisis response into broader public health and safety, connected care, and the many communities who now rely on us. This refresh exists because our identity needed to grow with it.',
              'This is not a reinvention. The foundation that has always defined us, a commitment to saving lives, an empathy shaped by real loss, and a belief that technology built with humanity can change outcomes, remains unchanged. What this refresh does is give that foundation a clearer, more cohesive form.',
            ],
          },
          { type: 'images', count: 4 },
        ],
      },
      {
        id: 'challenge',
        heading: 'Challenge',
        blocks: [
          {
            type: 'text',
            heading: 'The Problem',
            body: [
              'Placeholder copy. Describe the core problem the client was facing before this project began.',
            ],
          },
          {
            type: 'text',
            heading: 'Constraints',
            body: [
              'Placeholder copy. Describe the constraints, timeline, budget, technical, or brand, that shaped the work and made it hard.',
            ],
          },
          { type: 'images', count: 4 },
        ],
      },
      {
        id: 'approach',
        heading: 'Approach',
        blocks: [
          {
            type: 'text',
            heading: 'Process',
            body: [
              'Placeholder copy. Walk through the research, strategy, or discovery work that shaped the direction.',
            ],
          },
          {
            type: 'text',
            heading: 'Key Decisions',
            body: [
              'Placeholder copy. Call out the pivotal decisions along the way and why they were made.',
            ],
          },
          { type: 'images', count: 2 },
        ],
      },
      {
        id: 'design',
        heading: 'Design',
        blocks: [
          {
            type: 'text',
            heading: 'Visual Identity',
            body: [
              'Placeholder copy. Describe the identity system, color, type, imagery, and the reasoning behind it.',
            ],
          },
          { type: 'images', count: 4 },
          {
            type: 'text',
            heading: 'Applications',
            body: [
              'Placeholder copy. Show where and how the system was applied across touchpoints.',
            ],
          },
        ],
      },
      {
        id: 'reflection',
        heading: 'Reflection',
        blocks: [
          {
            type: 'text',
            body: [
              'Placeholder copy. What you learned and what you would revisit.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'lifeguard-portal',
    title: 'LifeguardPortal',
    sector: 'Public Health & Safety',
    year: '2026',
    featured: true,
    categories: ['Marketing', 'Branding'],
    scope: 'Creative Direction, Marketing, Event Coordination, Digital Design',
    software: 'Figma, Illustrator, Photoshop, After Effects, Canva',
    summary:
      'Campaign & brand launch for LifeguardPortal — a client portal for public health products. I led the brand, web, and campaign launch.',
    liveUrl: 'https://lifeguarddhportal.com',
    heroImage: '/images/projects/lifeguard-portal/hero.png',
    sections: [
      {
        id: 'overview',
        heading: 'Overview',
        blocks: [
          {
            type: 'text',
            heading: 'Introduction',
            body: [
              "LifeguardPortal is where health authorities, clients, and partners sign in to see safety data from Lifeguard's products — including triggered alerts, response times, and confirmed interventions. I led the brand, web, email, social, and webinar design for its first public launch.",
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/lifeguard-portal/overview-teasers.png',
                alt: 'LifeguardPortal coming soon teaser and Data at Your Fingertips promo slides',
              },
              {
                src: '/images/projects/lifeguard-portal/overview-why-we-built-it.png',
                alt: 'Why We Built It slide outlining accessibility, confidence, and efficiency pillars',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Challenge',
            body: ['The portal unifies four products under one login:'],
            listStyle: 'bullet',
            list: [
              {
                label: 'LifeguardLite: ',
                text: 'A room based overdose and environmental detection in shelters and supervised consumption sites.',
              },
              {
                label: 'LifeguardConnect: ',
                text: 'A public safety app built to keep users connected to direct emergency support and resources.',
              },
              {
                label: 'BuildStrong: ',
                text: 'A spin-off from LifeguardConnect, catered to CIRP construction members.',
              },
              {
                label: 'Administrators: ',
                text: 'An internal cross-product view for Lifeguard staff and BC Emergency Health Services.',
              },
            ],
            afterList: [
              'Marketing it meant explaining life-safety software to provincial health authorities, community outreach organizations, and construction groups all at once without a CRM and no prior campaign playbook.',
            ],
          },
          {
            type: 'text',
            heading: 'Solution',
            body: [
              'I led with outcomes rather than features. Every asset had to answer one question. What does this let you see, and why would our clients find this valuable?',
              'That produced a rebuilt landing page, a four-template email system, a five-post social series, and a two-day webinar split by audience.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/lifeguard-portal/solution-analytics-cards.png',
                alt: 'Analytics dashboard cards showing top features, top visited screens, sessions by platform, and top used substances',
              },
              {
                src: '/images/projects/lifeguard-portal/solution-carousel.png',
                alt: 'Marketing carousel slides for Make Your Data Work for You and One Login, Full Visibility',
              },
            ],
          },
        ],
      },
      {
        id: 'strategy',
        heading: 'Strategy',
        blocks: [
          {
            type: 'text',
            heading: 'Audience & Positioning',
            body: ['Audiences differ sharply by product:'],
            listStyle: 'bullet',
            list: [
              {
                label: 'LifeguardConnect',
                text: ' serves four named customer groups — BC Emergency Health Services, Métis Nation BC, NorthWest Ontario, and Lambton County — each scoped to their own regional data',
              },
              {
                label: 'LifeguardLite',
                text: ' serves shelters and supervised consumption sites, where a manager sees org-level data and floor staff see only their building',
              },
              {
                label: 'BuildStrong',
                text: ' serves CIRP construction members',
              },
            ],
            afterList: [
              'The webinar split government and non-government tracks along the same line.',
            ],
          },
          {
            type: 'text',
            heading: 'Release Plan',
            body: [
              'I mapped the release plan against a real calendar in Figma across 5 umbrellas.',
            ],
            listStyle: 'bullet',
            list: ['Webinar', 'Emails', 'Website', 'Social', 'Printed Materials'],
            afterList: [
              'Every asset had a planned date before production started.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/lifeguard-portal/release-plan-table.png',
                alt: 'Release plan table mapping each deliverable to its date, phase, and channel',
              },
              {
                src: '/images/projects/lifeguard-portal/release-plan-calendar.png',
                alt: 'April and May 2026 campaign calendars showing scheduled deliverables',
              },
            ],
          },
        ],
      },
      {
        id: 'deliverables',
        heading: 'Deliverables',
        blocks: [
          {
            type: 'text',
            body: [
              'Across a six-week runway I produced roughly twenty assets spanning five channels. Every one traced back to the same four positioning pillars.',
            ],
          },
          {
            type: 'text',
            heading: 'Website',
            body: [
              'Replaced a static, unscrollable landing page with a benefit-led scroll at lifeguarddhportal.com:',
            ],
            cta: { label: 'View Live Website', url: 'https://lifeguarddhportal.com' },
            listStyle: 'bullet',
            list: [
              'Hero and explicit value proposition',
              'Interactive dashboard preview — for most prospects, the first time they could see what the data actually looks like before signing in',
              'Custom video section',
              'Trusted-partners showcase for credibility',
              'Features breakdown mapped to the four pillars',
              'A note from the CEO',
              'Q&A',
            ],
            afterList: [
              'I ran a joint QA pass with the developers across the site and email templates before launch.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/lifeguard-portal/website-before.png',
                alt: 'LifeguardPortal website before the redesign',
                caption: '(Before)',
              },
              {
                src: '/images/projects/lifeguard-portal/website-after.png',
                alt: 'LifeguardPortal website after the redesign',
                caption: '(After)',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Email Systems',
            body: [
              "Four templates, each designed desktop-first with a mobile variant. Because portal access is invite-only with no self-registration, the transactional emails are the brand's first impression — so they were held to the same standard as the marketing newsletter.",
            ],
            listStyle: 'plain',
            list: [
              '1. Newsletter — campaign nurture',
              '2. User Invitation',
              '3. Password Reset',
              '4. Forgot Username',
            ],
          },
          {
            type: 'images',
            full: true,
            items: [
              {
                src: '/images/projects/lifeguard-portal/email-systems.png',
                alt: 'Four email templates: teaser, invitation, password reset, and forgot username',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Social Campaigns',
            body: [
              'A four-post sequence built for Instagram and LinkedIn, released on a weekly cadence and sequenced against the webinar rather than posted ad hoc.',
            ],
          },
          {
            type: 'images',
            full: true,
            items: [
              {
                src: '/images/projects/lifeguard-portal/social-campaigns.png',
                alt: 'Social campaign post sequence for Instagram and LinkedIn',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Webinar Campaign',
            body: [
              'Invitation graphics built for each of the two sessions, tracking invites sent, accepts, and acceptance rate per day. The live event itself was covered with its own presentation deck and event photography.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/lifeguard-portal/webinar-event.png',
                alt: 'Photos from the live LifeguardPortal webinar event alongside the presentation slide deck',
              },
              {
                src: '/images/projects/lifeguard-portal/webinar-invitation.png',
                alt: 'Webinar invitation graphic with Day 1 and Day 2 invite, accept, and acceptance rate stats',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Print & Onboarding',
            body: [
              "A welcome package sent two days after the final session, so new users weren't dropped into a data product cold. Contents included the LifeguardPortal Quick Start Guide, posters, further training materials, and links to our YouTube tutorials.",
            ],
          },
        ],
      },
      {
        id: 'results',
        heading: 'Results',
        blocks: [
          {
            type: 'stats',
            items: [
              { value: '129', label: 'Webinar invites across two sessions' },
              { value: '30', label: 'RSVP Accepts' },
              { value: '~23%', label: 'Blended Acceptance Rate' },
              { value: '20+', label: 'Assets shipped across five channels' },
            ],
          },
          {
            type: 'text',
            body: [
              'Session one drew 14 accepts from 64 invites; session two drew 16 from 65 — a blended ~23% acceptance rate on a first-ever event with no CRM, no historical benchmark, and no existing marketing list to draw from.',
              "Beyond the numbers, the campaign gave Lifeguard Digital Health its first coordinated public presence: a landing page that actually explains the product, a transactional email system that carries the brand, and a reusable release-plan structure the team can run again.",
            ],
          },
        ],
      },
      {
        id: 'reflection',
        heading: 'Reflection',
        blocks: [
          {
            type: 'text',
            body: [
              "Running Lifeguard Digital Health's first-ever webinar and first coordinated multi-channel campaign meant building the release plan and the process at the same time — there was no internal playbook to inherit.",
              "The gaps that mattered were operational, not creative. No CRM meant every RSVP and bounce was tracked by hand, and open invite-forwarding meant the attendee list never matched the RSVP list. Both are tooling problems with clear fixes, and I'd get a lightweight CRM in place before the first invite goes out next time.",
              "What I'd keep is the decision to lead with outcomes over features. For a product whose dashboards report on overdose alerts and confirmed interventions, the most useful thing marketing can do is explain plainly what the data shows — and who it protects.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'conscious-connections',
    title: 'Conscious Connections',
    sector: 'Relationships & Dating',
    year: '2025',
    featured: false,
    categories: ['UX/UI Design'],
    scope: 'UX Strategy, UI Design',
    software: 'Figma, Adobe CC',
    team: 'Angus Fong, Sam Park, Fenil Padhiar',
    summary:
      'Conscious Connections is a platform designed for intentional, values-driven relationships, built in 3 days for the FLUI Hackathon 2025.',
    heroImage: '/images/projects/conscious-connections/hero.png',
    sections: [
      {
        id: 'overview',
        heading: 'Overview',
        blocks: [
          {
            type: 'text',
            heading: 'Introduction',
            body: [
              'Conscious Connections was a project my team and I worked on during the FLUI Hackathon 2025, a UI/UX Design competition that pushed our limits and skills in collaboration, problem-solving, and designing under a tight deadline.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/conscious-connections/design-direction.png',
                alt: 'Conscious Connections design direction moodboard',
              },
              {
                src: '/images/projects/conscious-connections/deliverables.png',
                alt: 'Conscious Connections project deliverables overview',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Challenge',
            body: [
              'Conscious Connections is a platform designed for intentional, values-driven relationships. While it may seem like just another dating platform, Conscious Connections aims to prioritize compatibility, depth, and emotional intelligence. Our goal is to make the brand visually magnetic, seamlessly functional, and deeply resonant with their audience.',
            ],
          },
          {
            type: 'text',
            heading: 'Solution',
            body: [
              'To help bring the vision to life, we designed an experience through our web-based application that has a clear focus on creating meaningful connections through UI that feels both inviting and intentional.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/conscious-connections/problem-statement-hmw.png',
                alt: 'Conscious Connections problem statement and How Might We framing',
              },
              {
                src: '/images/projects/conscious-connections/swot.png',
                alt: 'Conscious Connections SWOT analysis',
              },
            ],
          },
        ],
      },
      {
        id: 'research',
        heading: 'Research',
        blocks: [
          {
            type: 'text',
            heading: 'Problem Statement & HMW',
            body: [
              'With a challenge to design a seamless, aspirational platform that educates users, drives onboarding and encourages meaningful connections, we decided to split our How Might We statements into 3 different categories.',
            ],
            list: [
              '1. Onboarding & UX',
              '2. Position & Brand Identity',
              '3. Long-Term Engagement & Connection Building',
            ],
          },
          {
            type: 'text',
            body: [
              'This helped us stay focused on our feature brainstorming and ensure that the design decisions we made had a clear purpose.',
            ],
          },
          {
            type: 'text',
            heading: 'Persona',
            body: [
              'To get a better feel for who our users are, we created 2 personas that represent different needs, motivations, and goals. This approach helped us get a better feel for the different perspectives of our users, helping us identify their pain-points and designing an experience that was intentional and resonates with our users.',
            ],
          },
          {
            type: 'text',
            heading: 'Design Matrix',
            body: [
              'We created a 3-way Venn diagram that maps out our Client Goals, User Goals, and Design Goals, to understand the balance between the business objectives, user needs, and design principles. By visualizing the intersections between, we were able to make strategic, user-centered decisions to bring the vision behind Conscious Connections to life.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/conscious-connections/persona.png',
                alt: 'Conscious Connections user personas',
              },
              {
                src: '/images/projects/conscious-connections/matrix.png',
                alt: 'Conscious Connections design matrix Venn diagram',
              },
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/conscious-connections/sitemap.png',
                alt: 'Conscious Connections sitemap',
              },
              {
                src: '/images/projects/conscious-connections/userflow.png',
                alt: 'Conscious Connections user flow diagram',
              },
            ],
          },
        ],
      },
      {
        id: 'ideating',
        heading: 'Ideating',
        blocks: [
          {
            type: 'text',
            heading: 'Information Architecture',
            body: [
              "To ensure a clear structure to the website, we created a sitemap that organizes the platform's pages, making it easier for our users to navigate and find exactly what they needed. On top of defining the layout and structure, the sitemap also helped us identify and eliminate any gaps in the user journey, creating a better flow. While the sitemap was mainly my task, Angus worked on the main user flow, defining the clear routes to enhance the usability. Throughout the project I also continuously updated our sitemap to align with the changing requirements.",
            ],
          },
          {
            type: 'text',
            heading: 'Hand Sketches',
            body: [
              'With such a short time-frame for our project, my team and I used the Crazy 8s Exercise as a brainstorming technique. Creating 8 different sketches in 8 minutes, allowed us to get our ideas down quickly and explore different possibilities when creating our solution. After the exercise, we regrouped, discussed each of our ideas, and took notes to combine the strongest elements we found and refine our approach.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/conscious-connections/sketch.png',
                alt: 'Conscious Connections hand sketch explorations',
              },
              {
                src: '/images/projects/conscious-connections/lowfi-wireframe.png',
                alt: 'Conscious Connections low-fidelity wireframes',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Low-fi Wireframing',
            body: [
              'With a client meeting the next day, we created low-fidelity wireframes to visually communicate the direction we were headed in and ensure that we were on the right track. The wireframes not only included the key pages like the home, about, and how it works pages, but also the specific pages that were initially requested by the client, such as onboarding, profile, and explore.',
            ],
          },
          {
            type: 'text',
            heading: 'Client Meeting',
            body: [
              "Our client meeting played a key role in shaping our designs. The client suggested expanding the project's scope to include mobile views and made a few adjustments to the existing branding document which we later integrated into our design process. They had also asked us to use components similar to the ShadCN Design System which influenced our component usage in the final high-fidelity design. Incorporating this feedback was definitely a challenge, but my team and I were able to push through, adapt, and implement the changes quickly and effectively.",
            ],
          },
        ],
      },
      {
        id: 'design',
        heading: 'Design',
        blocks: [
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/conscious-connections/styleguide-typography.png',
                alt: 'Conscious Connections typography style guide',
              },
              {
                src: '/images/projects/conscious-connections/styleguide-colors.png',
                alt: 'Conscious Connections color palette style guide',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Design System & Style Guide',
            body: [
              'The ShadCN Design system acted as a source of inspiration behind our designs. We were able to incorporate certain elements of the component library to help streamline the development process if the project were to move forward. By aligning our designs with the system, we aimed to create an experience that would effectively convey the core pillars of Conscious Connections.',
              "For the color palette, we worked with our client's chosen colors of: Rose Red, Golden Yellow, Earthy Green, Off Black and Off White. Each color was then expanded into different shades and tints to allow for depth in UI components, improved accessibility, and scalability across various branding materials.",
              'Our typography consisted of a Serif and Sans pairing - Cormorant Garamond and Work Sans. This classic font pairing allowed us to create contrast, hierarchy, and balance across the text sections.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/conscious-connections/hifi-desktop.png',
                alt: 'Conscious Connections high-fidelity desktop screens',
              },
              {
                src: '/images/projects/conscious-connections/hifi-mobile.png',
                alt: 'Conscious Connections high-fidelity mobile screens',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Wireframing & Prototyping',
            body: [
              'To enhance our hi-fi journey, we adopted a customer-centric design approach as well as what was mentioned in our client meeting. We created new pages for an AI chatbot page, Messages, and an AI compatibility quiz page. Additionally, we made a few changes to our explore page moving away from a card-like structure. We felt that a card style layout for the users would feel impersonal and repetitive rather than creating meaningful connections. Instead, we used a layout where each user would be the sole focus of the screen, with buttons to navigate to the next profile.',
              'While creating the flow of the web-based app, we did encounter a few gaps that required us to revisit and refine some of our ideas. Even though we had a few minor setbacks, we saw it as a good opportunity to strengthen our overall design, bringing us closer to a user-centered product.',
            ],
          },
        ],
      },
      {
        id: 'reflection',
        heading: 'Reflection',
        blocks: [
          {
            type: 'text',
            body: [
              'The FLUI Hackathon and Conscious Connections project was an exciting challenge. While having no idea of what to expect before the event, we thought on our feet and navigated changes under pressure.',
              "Despite the difficulties, such as changes to the project's scope and branding document, my team and I overcame these challenges by staying adaptable and having an open-minded approach. While the results weren't exactly what my team and I had in mind, the event was an amazing learning opportunity.",
              "Reflecting on the project, I believe there's always room for improvement. If we had more time, I would have enjoyed exploring and enhancing the flow of a signed-in user and finding better ways to visually convey the brand's vision and values. Overall, the project reinforced the value of effective communication, adaptability, and working under a tight deadline in creating a product that meets user needs and expectations in UX Design.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'roam',
    title: 'ROAM',
    sector: 'Outdoor & Recreation',
    year: '2024',
    featured: false,
    categories: ['UX/UI Design'],
    scope: 'UX Strategy, UI Design',
    software: 'Figma, Adobe CC',
    summary:
      'Reliable trail information, connectivity issues, difficulty seeking trails, proper equipment, and accurate conditions — common hiking dilemmas that needed solutions. ROAM was designed in a 22-hour timeframe.',
    heroImage: '/images/projects/roam/mockup.png',
    sections: [
      {
        id: 'overview',
        heading: 'Overview',
        blocks: [
          {
            type: 'text',
            heading: 'Challenge',
            body: [
              "Many hikers struggle with inconsistent trail information, connectivity issues, and difficulty in selecting suitable trails. While existing hiking apps provide extensive trail data, users were often faced with conflicting information for trail details, outdated conditions, and an overwhelming amount of information that isn't easily digestible. The challenge was to create a visually clear experience that allows for users to confidently navigate through the pages and choose trails based on accurate information.",
            ],
          },
          {
            type: 'text',
            heading: 'Solution',
            body: [
              'To better understand the challenges faced by users on current hiking apps, I applied an empathetic approach to my design process. Through a short competitive analysis, user research methods/exercises and usability testing, I was able to identify key friction points and designed a solution that focuses on creating a seamless trail search experience, simplified card system for quick access to key trail details, and an offline friendly experience to address the access of information in remote areas.',
            ],
          },
          {
            type: 'text',
            body: [],
            cta: {
              label: 'View Figma File',
              url: 'https://www.figma.com/design/ful1aAK2W8anNSx4CZljDa/ROAM?node-id=106-8069&t=Up7sO5cHM230Qab4-1',
              style: 'link',
            },
          },
          {
            type: 'images',
            full: true,
            items: [
              {
                src: '/images/projects/roam/multiscreen.jpg',
                alt: 'ROAM Hiking Project All Screen Mockups',
              },
            ],
          },
        ],
      },
      {
        id: 'research',
        heading: 'Research',
        blocks: [
          {
            type: 'text',
            heading: 'Competitive Analysis',
            body: [
              'While analyzing a few of the leading competitors to ROAM, I was able to keep an eye out for pain points, and user frustrations. An important insight from a Reddit community discussion highlighted the discrepancy of data between apps, which brings out a major trust issue that needed to be addressed.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/roam/user-persona.png',
                alt: 'ROAM Hiking Project - User Persona',
              },
              {
                src: '/images/projects/roam/empathy-map.png',
                alt: 'ROAM Hiking Project - Empathy Map',
              },
            ],
          },
          {
            type: 'text',
            heading: 'Persona & Empathy Mapping',
            body: [
              'To gain a better understanding of users, I created a persona and empathy map that captures their main goals, pain points, and behaviours. This helped me to identify some key emotional triggers and challenges, allowing me to design a solution that resonates with their needs.',
            ],
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/roam/journey-mapping.png',
                alt: 'ROAM Hiking Project - Journey Mapping',
              },
              {
                src: '/images/projects/roam/userflow.png',
                alt: 'ROAM Hiking Project - User Flow',
              },
            ],
          },
        ],
      },
      {
        id: 'ideation',
        heading: 'Ideation',
        blocks: [
          {
            type: 'text',
            heading: 'User Flow',
            body: [
              'A primary user flow was created that maps out the main route of the typical user - from sign-up to discovery, navigation and tracking progress. This exercise ensured that the main interaction points for the app were covered and taken into account to remove any obstacles that the users may face. It also creates clear routes and decision points to help me create a more user-friendly app.',
            ],
          },
          {
            type: 'text',
            heading: 'Low-Fidelity Wireframing',
            body: [
              'Beginning with low-fidelity wireframes, I was able to map out the overall layout and structure for ROAM. The initial screens developed had a strong emphasis towards key interactions within the app, follows the user flowchart, and ensures that the primary functions for trail searching, navigation, and filtering were displayed. This stage allowed for a quick usability test to uncover issues early in the process before moving into hi-fidelity designs.',
            ],
          },
          {
            type: 'images',
            full: true,
            items: [
              {
                src: '/images/projects/roam/lowfi.png',
                alt: 'ROAM Hiking Project - Low Fidelity Wireframing',
              },
            ],
          },
        ],
      },
      {
        id: 'design',
        heading: 'Design',
        blocks: [
          {
            type: 'text',
            heading: 'Inspiration & Iteration',
            body: [
              'Before creating high fidelity designs, I explored various mobile apps and designs that showcased clear and meaningful data, intuitive icons, and thoughtful usages of colour. Feedback from the low-fidelity stages revealed that there was a clear need for a more robust filtering system, leading to the production of a pop-up menu with detailed options and selections such as difficulty, length, elevation gain, and duration in the hi-fi stages.',
            ],
          },
          {
            type: 'images',
            full: true,
            items: [
              {
                src: '/images/projects/roam/hifi-1.png',
                alt: 'ROAM Hiking Project - High Fidelity Wireframing',
              },
            ],
          },
          {
            type: 'imageText',
            heading: 'Hi-Fidelity Wireframing',
            body: [
              'Transitioning into the hi-fidelity stages, I realized that visual appeal plays a large role when hikers make decisions which leads to a potentially cluttered visual design and an overload of images. Therefore, I opted for a dark theme with several background overlays underneath crucial interactive elements to avoid confusions, reducing the cognitive load and assure that users navigate throughout the app seamlessly.',
            ],
            image: {
              src: '/images/projects/roam/hifi-4.png',
              alt: 'ROAM Hiking Project - Mockups - Signup, Home, Filters',
              full: true,
            },
          },
          {
            type: 'images',
            items: [
              {
                src: '/images/projects/roam/hifi-5.png',
                alt: 'ROAM Hiking Project - Mockups - Search, Detail',
              },
              {
                src: '/images/projects/roam/hifi-6.png',
                alt: 'ROAM Hiking Project - Mockups - More Filters, Navigating, Summary',
              },
            ],
          },
        ],
      },
      {
        id: 'reflection',
        heading: 'Reflection',
        blocks: [
          {
            type: 'text',
            body: [
              'Throughout the development of the ROAM app, I gained valuable insight into the design process and the importance of research and feedback. Using various UX research methodologies allowed me to adopt a user-centric approach and make informed decisions that guided the design process.',
              "Looking forward, there's tons of room for improvement that I would've liked to incorporate into the project. By setting a proper branding/design system for colors and typography in Figma early in the process would've allowed me to work more efficient and create better consistency all around the pages.",
              "As this project was done under a short timeframe, all the components were custom made, which is quite unrealistic. For my future projects, I would hope to create a more consistent digital experience that uses an existing UI kit like Google's Material Design or Carbon IBM's design system to get a better feel for working with existing components. This would allow me to learn how to use an organized set of components and existing principles that I could apply to my projects, instead of having to create from scratch.",
              'Overall, ROAM has been a rewarding learning experience that not only enhances the trail discovery for outdoor enthusiasts, but also helps to motivate individuals to get outdoors and enjoy the physical and mental health benefits that hiking has to offer.',
            ],
          },
          {
            type: 'prototype',
            embedUrl:
              'https://embed.figma.com/proto/ful1aAK2W8anNSx4CZljDa/ROAM?page-id=1%3A2757&node-id=81-3529&viewport=226%2C83%2C0.15&scaling=scale-down&content-scaling=fixed&embed-host=share',
            cta: {
              label: 'View Interactive Prototype',
              url: 'https://www.figma.com/proto/ful1aAK2W8anNSx4CZljDa/ROAM?page-id=1%3A2757&node-id=81-3529&viewport=226%2C83%2C0.15&scaling=scale-down&content-scaling=fixed',
            },
          },
        ],
      },
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
