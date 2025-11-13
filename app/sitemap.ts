import { MetadataRoute } from 'next'

// Configuración inteligente de sitemap
const SITEMAP_CONFIG = {
  baseUrl: 'https://limpiezassmartclean.com',
  // Frecuencias de actualización inteligentes basadas en el tipo de contenido
  frequencies: {
    homepage: 'weekly' as const,
    services: 'monthly' as const,
    company: 'monthly' as const,
    legal: 'yearly' as const,
    dynamic: 'weekly' as const
  },
  // Prioridades basadas en importancia de negocio
  priorities: {
    homepage: 1.0,
    mainServices: 0.9,
    secondaryServices: 0.8,
    company: 0.7,
    support: 0.6,
    legal: 0.3
  }
}

// Páginas con metadatos específicos
const PAGES_METADATA = [
  {
    path: '',
    type: 'homepage',
    lastModified: new Date('2024-01-15'), // Última actualización real
    images: ['/og-image.png', '/hero-image.jpg']
  },
  {
    path: '/limpieza-oficinas',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/oficinas.jpg', '/services/oficinas-hero.jpg']
  },
  {
    path: '/limpieza-comunidades',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/comunidades.jpg', '/services/comunidades-hero.jpg']
  },
  {
    path: '/limpieza-industrial',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/industrial.jpg', '/services/industrial-hero.jpg']
  },
  {
    path: '/limpieza-colegios',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/colegios.jpg', '/services/colegios-hero.jpg']
  },
  {
    path: '/limpieza-cristales',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/cristales.jpg', '/services/cristales-hero.jpg']
  },
  {
    path: '/limpieza-garajes',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/garajes.jpg', '/services/garajes-hero.jpg']
  },
  {
    path: '/limpieza-gimnasios',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/gimnasios.jpg', '/services/gimnasios-hero.jpg']
  },
  {
    path: '/limpieza-talleres',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/talleres.jpg', '/services/talleres-hero.jpg']
  },
  {
    path: '/limpieza-coworking',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/coworking.jpg', '/services/coworking-hero.jpg']
  },
  {
    path: '/vitrificado-suelos',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/vitrificado.jpg', '/services/vitrificado-hero.jpg']
  },
  {
    path: '/servicios/instalaciones-deportivas',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/deportivas.jpg', '/services/deportivas-hero.jpg']
  },
  {
    path: '/servicios/servicios-especiales',
    type: 'mainServices',
    lastModified: new Date('2024-01-10'),
    images: ['/services/especiales.jpg', '/services/especiales-hero.jpg']
  },
  {
    path: '/blog',
    type: 'secondaryServices',
    lastModified: new Date('2024-01-08'),
    images: ['/blog/hero.jpg']
  },
  {
    path: '/sobre-nosotros',
    type: 'company',
    lastModified: new Date('2024-01-05'),
    images: ['/about/team.jpg', '/about/office.jpg']
  },
  {
    path: '/casos-exito',
    type: 'secondaryServices',
    lastModified: new Date('2024-01-08'),
    images: ['/cases/case-1.jpg', '/cases/case-2.jpg']
  },
  {
    path: '/certificaciones',
    type: 'support',
    lastModified: new Date('2023-12-15'),
    images: ['/certifications/iso.jpg', '/certifications/quality.jpg']
  },
  {
    path: '/preguntas-frecuentes',
    type: 'support',
    lastModified: new Date('2024-01-12'),
    images: []
  },
  {
    path: '/trabaja-con-nosotros',
    type: 'support',
    lastModified: new Date('2024-01-01'),
    images: ['/careers/team-work.jpg']
  },
  {
    path: '/politica-privacidad',
    type: 'legal',
    lastModified: new Date('2023-11-01'),
    images: []
  }
]

export default function sitemap(): MetadataRoute.Sitemap {
  const { baseUrl, frequencies, priorities } = SITEMAP_CONFIG
  
  return PAGES_METADATA.map(page => {
    const url = page.path ? `${baseUrl}${page.path}` : baseUrl
    
    // Determinar frecuencia y prioridad basada en el tipo
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    let priority: number
    
    switch (page.type) {
      case 'homepage':
        changeFrequency = frequencies.homepage
        priority = priorities.homepage
        break
      case 'mainServices':
        changeFrequency = frequencies.services
        priority = priorities.mainServices
        break
      case 'secondaryServices':
        changeFrequency = frequencies.services
        priority = priorities.secondaryServices
        break
      case 'company':
        changeFrequency = frequencies.company
        priority = priorities.company
        break
      case 'support':
        changeFrequency = frequencies.services
        priority = priorities.support
        break
      case 'legal':
        changeFrequency = frequencies.legal
        priority = priorities.legal
        break
      default:
        changeFrequency = frequencies.dynamic
        priority = 0.5
    }
    
    const sitemapEntry: MetadataRoute.Sitemap[0] = {
      url,
      lastModified: page.lastModified,
      changeFrequency,
      priority,
    }
    
    return sitemapEntry
  })
}
