export const siteConfig = {
  companyName: 'FMD Remodeling Inc.',
  tagline: 'Residential & Commercial Remodeling',
  phoneDisplay: '(857) 326-8383',
  phoneTel: 'tel:+18573268383',
  /**
   * Optional WhatsApp number in international format digits only.
   * Example: '15551234567'
   * Leave empty until a confirmed WhatsApp number is provided.
   */
  whatsappNumber: '' as string,
  whatsappMessageTemplate:
    "Hi FMD Remodeling! I'd like to discuss a remodeling project in [City].",
  /**
   * Optional social profiles. Leave empty until confirmed.
   */
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },
  /**
   * Form delivery. Keep disabled until a real endpoint or email service exists.
   * When ready: set enabled true and provide endpoint (Formspree, custom API, etc.).
   */
  form: {
    enabled: false,
    endpoint: '',
    method: 'POST' as const,
  },
  /**
   * Canonical domain. Leave empty until the real domain is confirmed.
   */
  domain: '',
  regionLabel: 'Massachusetts',
  serviceAreaSummary: 'Greater Boston & nearby Massachusetts communities',
  cities: [
    'Boston',
    'Everett',
    'Revere',
    'Somerville',
    'Woburn',
    'Billerica',
    'Bedford',
    'Chelmsford',
  ] as const,
  credit: {
    label: 'Made with 💚 by CAMALY',
    href: 'https://camaly.com.br/',
  },
  seo: {
    title: 'FMD Remodeling Inc. | Home & Commercial Remodeling in Massachusetts',
    description:
      'Kitchen and bathroom remodeling, painting, flooring, drywall, decks, and carpentry in Greater Boston. Contact FMD Remodeling Inc. to discuss your project.',
  },
} as const

export type ServiceOption =
  | 'Kitchen Remodeling'
  | 'Bathroom Remodeling'
  | 'Residential Remodeling'
  | 'Commercial Remodeling'
  | 'Interior / Exterior Painting'
  | 'Flooring Installation'
  | 'Drywall / Finish Work'
  | 'Decks'
  | 'Carpentry'
  | 'Other / Not Sure'

export const serviceOptions: ServiceOption[] = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Residential Remodeling',
  'Commercial Remodeling',
  'Interior / Exterior Painting',
  'Flooring Installation',
  'Drywall / Finish Work',
  'Decks',
  'Carpentry',
  'Other / Not Sure',
]

export function getWhatsAppUrl(city = 'Massachusetts'): string | null {
  const number = siteConfig.whatsappNumber.trim()
  if (!number) return null
  const text = siteConfig.whatsappMessageTemplate.replace('[City]', city)
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}

export function hasSocialLinks(): boolean {
  const { facebook, instagram, linkedin } = siteConfig.social
  return Boolean(facebook || instagram || linkedin)
}
