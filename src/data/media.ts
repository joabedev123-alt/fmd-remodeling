/**
 * Media manifesto for FMD Remodeling Inc.
 * Sources: public/01–23.jpeg + curated files from "peck de imagens 01/02"
 * copied into /public/images/work with clean filenames.
 *
 * Rules applied:
 * - In-progress photos are labeled as such
 * - Plumbing/rough-in photos are shown as remodeling process — not as a standalone plumbing service
 * - No invented locations, client names, or before/after pairs
 */

export type MediaStage = 'completed' | 'in-progress'
export type MediaCategory =
  | 'brand'
  | 'kitchen'
  | 'bathroom'
  | 'flooring'
  | 'tiling'
  | 'painting'
  | 'drywall'
  | 'carpentry'
  | 'decks'
  | 'general-remodeling'
  | 'commercial'
  | 'residential'

export type MediaItem = {
  id: string
  src: string
  alt: string
  caption: string
  category: MediaCategory
  stage: MediaStage
  width: number
  height: number
  objectPosition?: string
  usage?: Array<'hero' | 'about' | 'services' | 'gallery'>
  serviceIds?: string[]
}

export const brandMedia = {
  logo: {
    id: 'logo-primary',
    src: '/logo.png',
    alt: 'FMD Remodeling Inc. logo',
    width: 1254,
    height: 1254,
  },
  favicon: {
    src: '/favicon.png',
  },
}

export const projectMedia: MediaItem[] = [
  {
    id: 'deck-outdoor-living',
    src: '/images/work/deck-outdoor-living.jpg',
    alt: 'Multi-level residential deck and covered outdoor living area with warm wood decking',
    caption: 'Exterior deck and outdoor living space',
    category: 'decks',
    stage: 'completed',
    width: 1200,
    height: 1600,
    objectPosition: 'center 35%',
    usage: ['gallery', 'services'],
    serviceIds: ['decks'],
  },
  {
    id: 'pack01-deck-alt',
    src: '/images/work/pack01-work-03.jpg',
    alt: 'Residential deck with covered patio area, outdoor lighting, and upper balcony',
    caption: 'Deck and covered patio work',
    category: 'decks',
    stage: 'completed',
    width: 1200,
    height: 1600,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['decks'],
  },
  {
    id: 'pavers-driveway',
    src: '/images/work/pavers-driveway.jpg',
    alt: 'Interlocking stone paver driveway with mixed earth-tone finishes',
    caption: 'Exterior paving installation',
    category: 'general-remodeling',
    stage: 'completed',
    width: 1600,
    height: 1200,
    objectPosition: 'center',
    usage: ['hero', 'gallery'],
  },
  {
    id: 'patio-stone-steps',
    src: '/images/work/patio-stone-steps.jpg',
    alt: 'Stone patio walkway with steps, retaining walls, and outdoor seating area',
    caption: 'Patio and outdoor stonework',
    category: 'general-remodeling',
    stage: 'completed',
    width: 1600,
    height: 1200,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'pergola-carpentry',
    src: '/images/work/pergola-carpentry.jpg',
    alt: 'Newly built wooden pergola over a stone paver patio',
    caption: 'Outdoor carpentry — pergola',
    category: 'carpentry',
    stage: 'completed',
    width: 960,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['carpentry'],
  },
  {
    id: 'interior-slat-wall',
    src: '/images/work/interior-slat-wall.jpg',
    alt: 'Interior accent wall with vertical wood slat paneling and white trim',
    caption: 'Interior finish carpentry',
    category: 'carpentry',
    stage: 'in-progress',
    width: 740,
    height: 1600,
    objectPosition: 'center',
    usage: ['gallery', 'services', 'about'],
    serviceIds: ['carpentry'],
  },
  {
    id: 'bathroom-shower-install',
    src: '/images/work/bathroom-shower-install.jpg',
    alt: 'Bathroom remodeling with marble-look shower enclosure and glass sliding doors',
    caption: 'Bathroom shower remodeling',
    category: 'bathroom',
    stage: 'in-progress',
    width: 1528,
    height: 1528,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['bathroom'],
  },
  {
    id: 'shower-niches-detail',
    src: '/images/work/shower-niches-detail.jpg',
    alt: 'Custom recessed shower niches tiled in white marble-look porcelain',
    caption: 'Custom shower niches',
    category: 'bathroom',
    stage: 'in-progress',
    width: 960,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['bathroom'],
  },
  {
    id: 'shower-niche-closeup',
    src: '/images/work/shower-niche-closeup.jpg',
    alt: 'Close-up of mitered marble-look tile work in a shower niche and bench',
    caption: 'Shower tile detail',
    category: 'tiling',
    stage: 'in-progress',
    width: 960,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'subway-tile-corner',
    src: '/images/work/subway-tile-corner.jpg',
    alt: 'Subway tile corner installation with precise alignment in a bathroom',
    caption: 'Bathroom tile installation',
    category: 'tiling',
    stage: 'in-progress',
    width: 720,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['bathroom'],
  },
  {
    id: 'tile-floor-01',
    src: '/images/work/01.jpeg',
    alt: 'Large-format marble-look floor tiles being installed with leveling spacers',
    caption: 'Floor tiling in progress',
    category: 'flooring',
    stage: 'in-progress',
    width: 576,
    height: 1024,
    objectPosition: 'center',
    usage: ['gallery', 'hero', 'services'],
    serviceIds: ['flooring'],
  },
  {
    id: 'tile-floor-07',
    src: '/images/work/07.jpeg',
    alt: 'Dark marble-look bathroom floor tiles with leveling system during installation',
    caption: 'Bathroom flooring in progress',
    category: 'bathroom',
    stage: 'in-progress',
    width: 720,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['bathroom', 'flooring'],
  },
  {
    id: 'tile-floor-09',
    src: '/images/work/09.jpeg',
    alt: 'Charcoal marble-look floor tiles set with yellow leveling wedges',
    caption: 'Precision floor tiling',
    category: 'flooring',
    stage: 'in-progress',
    width: 1280,
    height: 720,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'shower-tile-15',
    src: '/images/work/15.jpeg',
    alt: 'Shower remodeling with marble wall tiles and hexagonal floor mosaic during install',
    caption: 'Shower tiling in progress',
    category: 'bathroom',
    stage: 'in-progress',
    width: 1024,
    height: 576,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['bathroom'],
  },
  {
    id: 'wall-tile-16',
    src: '/images/work/16.jpeg',
    alt: 'Marble-look wall tiles installed with a professional leveling system',
    caption: 'Wall tiling in progress',
    category: 'tiling',
    stage: 'in-progress',
    width: 720,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['kitchen'],
  },
  {
    id: 'tile-floor-18',
    src: '/images/work/18.jpeg',
    alt: 'Large white marble-look floor tiles spanning a room under renovation',
    caption: 'Large-format flooring install',
    category: 'flooring',
    stage: 'in-progress',
    width: 576,
    height: 1024,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['flooring'],
  },
  {
    id: 'tile-floor-19',
    src: '/images/work/19.jpeg',
    alt: 'Marble-look porcelain flooring continuing through a doorway with leveling clips',
    caption: 'Flooring installation detail',
    category: 'flooring',
    stage: 'in-progress',
    width: 576,
    height: 1024,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'tile-floor-20',
    src: '/images/work/20.jpeg',
    alt: 'Hallway flooring install with marble-look tiles and membrane preparation visible',
    caption: 'Flooring preparation and install',
    category: 'flooring',
    stage: 'in-progress',
    width: 576,
    height: 1024,
    objectPosition: 'center 40%',
    usage: ['gallery'],
  },
  {
    id: 'bath-tile-23',
    src: '/images/work/23.jpeg',
    alt: 'Bathroom wall tiling above a tub with marble-look porcelain and leveling spacers',
    caption: 'Bathroom wall remodeling',
    category: 'bathroom',
    stage: 'in-progress',
    width: 720,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['bathroom'],
  },
  {
    id: 'exterior-paint-08',
    src: '/images/work/08.jpeg',
    alt: 'Exterior residential painting in progress on a brick home with porch detailing',
    caption: 'Exterior painting in progress',
    category: 'painting',
    stage: 'in-progress',
    width: 1280,
    height: 720,
    objectPosition: 'center',
    usage: ['gallery', 'services', 'about'],
    serviceIds: ['painting'],
  },
  {
    id: 'porch-framing-11',
    src: '/images/work/11.jpeg',
    alt: 'Wooden porch and stair framing under construction at a residential entrance',
    caption: 'Porch carpentry in progress',
    category: 'carpentry',
    stage: 'in-progress',
    width: 576,
    height: 1024,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['carpentry', 'decks'],
  },
  {
    id: 'porch-framing-17',
    src: '/images/work/17.jpeg',
    alt: 'Pressure-treated lumber framing for a new front porch and staircase',
    caption: 'Entry porch framing',
    category: 'carpentry',
    stage: 'in-progress',
    width: 1024,
    height: 576,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'concrete-walk-02',
    src: '/images/work/02.jpeg',
    alt: 'Freshly finished concrete sidewalk with broom texture beside a vinyl fence',
    caption: 'Exterior concrete finish',
    category: 'general-remodeling',
    stage: 'completed',
    width: 576,
    height: 1024,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'concrete-walk-06',
    src: '/images/work/06.jpeg',
    alt: 'Newly poured broom-finished concrete walkway along a residential street edge',
    caption: 'Concrete walkway work',
    category: 'general-remodeling',
    stage: 'completed',
    width: 576,
    height: 1024,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'drywall-finish-52',
    src: '/images/work/interior-plaster-finish.jpg',
    alt: 'Interior walls and ceiling after plaster and finish preparation with recessed lighting',
    caption: 'Interior finish preparation',
    category: 'drywall',
    stage: 'in-progress',
    width: 1600,
    height: 900,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['drywall'],
  },
  {
    id: 'recessed-lighting',
    src: '/images/work/interior-recessed-lighting.jpg',
    alt: 'Residential dining and living area with newly installed recessed ceiling lights',
    caption: 'Interior improvement — recessed lighting',
    category: 'residential',
    stage: 'completed',
    width: 768,
    height: 1024,
    objectPosition: 'center top',
    usage: ['gallery'],
  },
  {
    id: 'floor-framing-04',
    src: '/images/work/04.jpeg',
    alt: 'Structural floor joist framing during an interior remodeling project',
    caption: 'Structural framing in progress',
    category: 'general-remodeling',
    stage: 'in-progress',
    width: 720,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery', 'about'],
  },
  {
    id: 'site-work-12',
    src: '/images/work/12.jpeg',
    alt: 'Exterior remodeling site with foundation preparation and infrastructure rough-in',
    caption: 'Exterior project site work',
    category: 'commercial',
    stage: 'in-progress',
    width: 720,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['residential-commercial'],
  },
  {
    id: 'site-work-14',
    src: '/images/work/14.jpeg',
    alt: 'Building exterior sheathing and groundwork during a remodeling project',
    caption: 'Exterior remodeling in progress',
    category: 'commercial',
    stage: 'in-progress',
    width: 1280,
    height: 720,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'site-work-22',
    src: '/images/work/22.jpeg',
    alt: 'Exterior wall sheathing and utility rough-in at an active job site',
    caption: 'Job site — exterior phase',
    category: 'general-remodeling',
    stage: 'in-progress',
    width: 720,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'rough-in-05',
    src: '/images/work/05.jpeg',
    alt: 'Floor cavity during remodeling showing structural joists and in-progress infrastructure work',
    caption: 'Remodeling infrastructure phase',
    category: 'general-remodeling',
    stage: 'in-progress',
    width: 1280,
    height: 720,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'rough-in-03',
    src: '/images/work/03.jpeg',
    alt: 'Foundation-area remodeling work with infrastructure rough-in in progress',
    caption: 'Project rough-in stage',
    category: 'general-remodeling',
    stage: 'in-progress',
    width: 1280,
    height: 720,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'tile-shower-21',
    src: '/images/work/21.jpeg',
    alt: 'Shower corner tiling with marble-look wall tiles and hexagonal floor mosaic',
    caption: 'Shower remodeling in progress',
    category: 'bathroom',
    stage: 'in-progress',
    width: 576,
    height: 1024,
    objectPosition: 'center',
    usage: ['gallery', 'services'],
    serviceIds: ['bathroom'],
  },
  {
    id: 'porch-framing-24',
    src: '/images/work/24.jpeg',
    alt: 'Front porch and stair framing under construction on a residential home',
    caption: 'Entry remodeling in progress',
    category: 'carpentry',
    stage: 'in-progress',
    width: 1024,
    height: 576,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'rough-in-10',
    src: '/images/work/10.jpeg',
    alt: 'Infrastructure rough-in during a remodeling project beneath unfinished framing',
    caption: 'Infrastructure phase',
    category: 'general-remodeling',
    stage: 'in-progress',
    width: 720,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'rough-in-13',
    src: '/images/work/13.jpeg',
    alt: 'Exterior foundation remodeling work during an active construction phase',
    caption: 'Foundation-area project work',
    category: 'general-remodeling',
    stage: 'in-progress',
    width: 720,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'pack01-work-01',
    src: '/images/work/pack01-work-01.jpg',
    alt: 'Interior remodeling work in progress with framing preparation',
    caption: 'Interior remodeling in progress',
    category: 'residential',
    stage: 'in-progress',
    width: 900,
    height: 1600,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'pack01-work-02',
    src: '/images/work/pack01-work-02.jpg',
    alt: 'Residential remodeling job site detail during active work',
    caption: 'On-site remodeling detail',
    category: 'residential',
    stage: 'in-progress',
    width: 900,
    height: 1600,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'pack01-work-04',
    src: '/images/work/pack01-work-04.jpg',
    alt: 'Completed exterior remodeling detail from an FMD project',
    caption: 'Exterior project detail',
    category: 'general-remodeling',
    stage: 'completed',
    width: 1200,
    height: 1600,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'pack02-work-01',
    src: '/images/work/pack02-work-01.jpg',
    alt: 'Bathroom or interior finish work photographed during remodeling',
    caption: 'Interior finish progress',
    category: 'bathroom',
    stage: 'in-progress',
    width: 960,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'pack02-work-02',
    src: '/images/work/pack02-work-02.jpg',
    alt: 'Remodeling craftsmanship detail from an active FMD project',
    caption: 'Craftsmanship detail',
    category: 'tiling',
    stage: 'in-progress',
    width: 960,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'pack02-work-03',
    src: '/images/work/pack02-work-03.jpg',
    alt: 'Remodeling progress photo from an FMD job site',
    caption: 'Project progress',
    category: 'general-remodeling',
    stage: 'in-progress',
    width: 1280,
    height: 960,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'pack02-work-04',
    src: '/images/work/pack02-work-04.jpg',
    alt: 'Interior remodeling surface work captured on site',
    caption: 'Interior surface work',
    category: 'drywall',
    stage: 'in-progress',
    width: 1280,
    height: 960,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'pack02-work-05',
    src: '/images/work/pack02-work-05.jpg',
    alt: 'Finish carpentry or remodeling detail from a residential project',
    caption: 'Finish detail',
    category: 'carpentry',
    stage: 'in-progress',
    width: 960,
    height: 1280,
    objectPosition: 'center',
    usage: ['gallery'],
  },
  {
    id: 'rough-in-framing',
    src: '/images/work/rough-in-framing.jpg',
    alt: 'Framing and rough-in stage during a residential remodeling project',
    caption: 'Framing and rough-in stage',
    category: 'general-remodeling',
    stage: 'in-progress',
    width: 1600,
    height: 900,
    objectPosition: 'center',
    usage: ['gallery', 'about'],
  },
]

/** No confirmed before/after pairs in the provided media. */
export const beforeAfterPairs: Array<{
  id: string
  title: string
  beforeId: string
  afterId: string
}> = []

export function getMediaById(id: string): MediaItem | undefined {
  return projectMedia.find((item) => item.id === id)
}

export function getGalleryMedia(): MediaItem[] {
  return projectMedia.filter(
    (item) => !item.usage || item.usage.includes('gallery'),
  )
}

export function getHeroMedia(): MediaItem | undefined {
  return (
    projectMedia.find(
      (item) => item.usage?.includes('hero') && item.stage === 'completed',
    ) ??
    projectMedia.find((item) => item.usage?.includes('hero')) ??
    projectMedia.find((item) => item.stage === 'completed') ??
    projectMedia[0]
  )
}

export function getAboutMedia(): MediaItem | undefined {
  return (
    projectMedia.find((item) => item.usage?.includes('about')) ??
    projectMedia.find((item) => item.stage === 'in-progress') ??
    projectMedia[0]
  )
}

export function getServiceMedia(serviceId: string): MediaItem | undefined {
  return projectMedia.find((item) => item.serviceIds?.includes(serviceId))
}

export function getGalleryCategories(): MediaCategory[] {
  const categories = new Set(
    getGalleryMedia()
      .map((item) => item.category)
      .filter((c) => c !== 'brand'),
  )
  return Array.from(categories)
}

export const categoryLabels: Record<MediaCategory, string> = {
  brand: 'Brand',
  kitchen: 'Kitchen',
  bathroom: 'Bathroom',
  flooring: 'Flooring',
  tiling: 'Tiling',
  painting: 'Painting',
  drywall: 'Drywall',
  carpentry: 'Carpentry',
  decks: 'Decks',
  'general-remodeling': 'Remodeling',
  commercial: 'Commercial',
  residential: 'Residential',
}
