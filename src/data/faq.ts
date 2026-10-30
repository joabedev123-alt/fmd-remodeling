import { siteConfig } from './site'

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'types',
    question: 'What types of remodeling projects do you handle?',
    answer:
      'We provide residential and commercial remodeling, including kitchens, bathrooms, painting, flooring, drywall, finish work, decks, and carpentry.',
  },
  {
    id: 'areas',
    question: 'Which areas do you serve?',
    answer:
      'We serve Massachusetts, with a focus on Boston, Everett, Revere, Somerville, Woburn, Billerica, Bedford, Chelmsford, and nearby communities.',
  },
  {
    id: 'residential-commercial',
    question: 'Do you work on both residential and commercial properties?',
    answer:
      'Yes. We provide remodeling services for homes and commercial properties.',
  },
  {
    id: 'estimate',
    question: 'How can I request an estimate?',
    answer: siteConfig.form.enabled
      ? `Text or call us at ${siteConfig.phoneDisplay}, or use the contact form to share your project details.`
      : `Text us at ${siteConfig.phoneDisplay} to share your project details and request an estimate. You can also call the same number.`,
  },
  {
    id: 'share',
    question: 'What information should I share about my project?',
    answer:
      'Tell us the type of service you need, your city, and a short description of the work. Photos can also help us understand your project when shared through an available contact channel.',
  },
  {
    id: 'examples',
    question: 'Can I see examples of your work?',
    answer:
      'Yes. Visit the Our Work section to explore photos from our projects.',
  },
]
