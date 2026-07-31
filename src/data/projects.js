export const categories = ['All', 'UX/UI Design', 'Branding', 'Marketing']

export const projects = [
  {
    slug: 'lifeguard-digital-health',
    title: 'Lifeguard Digital Health',
    sector: 'Public Health & Safety',
    year: '2026',
    featured: true,
    categories: ['Branding'],
    scope: 'Branding, Graphic Design',
    software: 'Illustrator, Photoshop, Figma',
    summary:
      'Visual and verbal identity of Lifeguard Digital Health a purpose-driven company in the public health and safety sector.',
    sections: [
      {
        id: 'overview',
        heading: 'Overview',
        body: [
          'Lifeguard Digital Health began in 2017 with a single, urgent focus: using technology to intervene in preventable loss during the opioid crisis. In the years since, our work has grown well beyond that starting point, from crisis response into broader public health and safety, connected care, and the many communities who now rely on us. This refresh exists because our identity needed to grow with it.',
          'This is not a reinvention. The foundation that has always defined us, a commitment to saving lives, an empathy shaped by real loss, and a belief that technology built with humanity can change outcomes, remains unchanged. What this refresh does is give that foundation a clearer, more cohesive form.',
        ],
        images: 4,
      },
      {
        id: 'challenge',
        heading: 'Challenge',
        body: [
          'Placeholder copy. Describe the core problem, the constraints, and what made this hard.',
        ],
        images: 4,
      },
      {
        id: 'approach',
        heading: 'Approach',
        body: ['Placeholder copy. Describe your process and key decisions.'],
        images: 2,
      },
      {
        id: 'design',
        heading: 'Design',
        body: ['Placeholder copy. Show the outcome and the system behind it.'],
        images: 4,
      },
      {
        id: 'reflection',
        heading: 'Reflection',
        body: [
          'Placeholder copy. What you learned and what you would revisit.',
        ],
        images: 0,
      },
    ],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    sector: 'Placeholder Sector',
    year: '2026',
    featured: true,
    categories: ['UX/UI Design'],
    scope: 'Product Design',
    software: 'Figma, Photoshop',
    summary: 'Placeholder summary for the second project.',
    sections: [],
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    sector: 'Placeholder Sector',
    year: '2025',
    featured: false,
    categories: ['Marketing'],
    scope: 'Campaign Design',
    software: 'Figma, Illustrator, Premiere Pro',
    summary: 'Placeholder summary for the third project.',
    sections: [],
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    sector: 'Placeholder Sector',
    year: '2025',
    featured: false,
    categories: ['Branding', 'Marketing'],
    scope: 'Branding',
    software: 'Illustrator, Photoshop, Figma',
    summary: 'Placeholder summary for the fourth project.',
    sections: [],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
