export type ServiceBlock = {
  id: string
  title: string
  description: string
  icon: string
  formValue: string
  /** Optional real project photo from the media manifesto */
  imageId?: string
}

export const serviceBlocks: ServiceBlock[] = [
  {
    id: 'kitchen',
    title: 'Kitchen Remodeling',
    description:
      'Update your kitchen with improvements that bring together everyday function and carefully finished details.',
    icon: 'bi-house-door',
    formValue: 'Kitchen Remodeling',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Remodeling',
    description:
      'Transform your bathroom with thoughtful updates to surfaces, finishes, and the overall space.',
    icon: 'bi-droplet',
    formValue: 'Bathroom Remodeling',
  },
  {
    id: 'residential-commercial',
    title: 'Residential & Commercial Remodeling',
    description:
      'Remodeling solutions for homes and commercial spaces, shaped around the needs of each project.',
    icon: 'bi-buildings',
    formValue: 'Residential Remodeling',
  },
  {
    id: 'painting',
    title: 'Interior & Exterior Painting',
    description:
      'Refresh your property inside and out with careful preparation and attention to the finish.',
    icon: 'bi-paint-bucket',
    formValue: 'Interior / Exterior Painting',
  },
  {
    id: 'flooring',
    title: 'Flooring Installation',
    description:
      'Give your space a new foundation with flooring installation that complements its style and use.',
    icon: 'bi-grid',
    formValue: 'Flooring Installation',
  },
  {
    id: 'drywall',
    title: 'Drywall & Finish Work',
    description:
      'Bring walls, ceilings, and finishing details together for a clean, cohesive result.',
    icon: 'bi-bricks',
    formValue: 'Drywall / Finish Work',
  },
  {
    id: 'decks',
    title: 'Decks',
    description:
      'Improve your outdoor living space with deck projects tailored to your property.',
    icon: 'bi-tree',
    formValue: 'Decks',
  },
  {
    id: 'carpentry',
    title: 'Carpentry',
    description:
      'Complete your remodeling project with carpentry that adds function, character, and finishing detail.',
    icon: 'bi-hammer',
    formValue: 'Carpentry',
  },
]
