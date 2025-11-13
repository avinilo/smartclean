// Configuración SEO para Smart Clean
// Keywords principales y secundarias por página

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  openGraph: {
    title: string
    description: string
    type: 'website' | 'article' | 'book' | 'profile'
    images: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
  twitter: {
    card: 'summary' | 'summary_large_image' | 'player' | 'app'
    title: string
    description: string
    images: string[]
  }
}

// Keywords principales de Smart Clean
export const MAIN_KEYWORDS = [
  'mantenimiento Valencia',
  'electricistas Valencia', 
  'gestión documental',
  'mano de obra especializada',
  'mantenimiento integral',
  'obras Valencia',
  'fábricas Valencia'
]

// Configuración SEO por página
export const SEO_PAGES: Record<string, SEOConfig> = {
  // Homepage
  home: {
    title: 'Smart Clean - Servicios Profesionales de Limpieza en Valencia',
    description: 'Servicios profesionales de limpieza para oficinas, comunidades, colegios e instalaciones industriales en Valencia. Limpieza integral con productos ecológicos y personal cualificado.',
    keywords: [
      'limpieza Valencia',
      'limpieza oficinas Valencia',
      'limpieza comunidades',
      'limpieza colegios',
      'limpieza industrial',
      'servicios limpieza Valencia',
      'limpieza ecológica',
      'empresa limpieza Valencia',
      'limpieza integral',
      'limpieza profesional'
    ],
    openGraph: {
      title: 'Smart Clean - Servicios Profesionales de Limpieza en Valencia',
      description: 'Servicios profesionales de limpieza para oficinas, comunidades e instalaciones industriales en Valencia.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart Clean - Servicios de limpieza Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Smart Clean - Servicios Profesionales de Limpieza Valencia',
      description: 'Servicios profesionales de limpieza para oficinas, comunidades e instalaciones industriales.',
      images: ['/og-image.png']
    }
  },

  // Limpieza de Oficinas
  limpiezaOficinas: {
    title: 'Limpieza de Oficinas Valencia - Servicios Profesionales | Smart Clean',
    description: 'Servicios profesionales de limpieza de oficinas en Valencia. Limpieza diaria, mensual y servicios especiales. Productos ecológicos y personal cualificado.',
    keywords: [
      'limpieza oficinas Valencia',
      'limpieza empresas',
      'servicios limpieza oficinas',
      'limpieza profesional oficinas',
      'limpieza ecológica oficinas',
      'empresa limpieza oficinas',
      'limpieza mantenimiento oficinas',
      'servicios limpieza Valencia',
      'limpieza despachos',
      'limpieza co working'
    ],
    openGraph: {
      title: 'Limpieza de Oficinas Valencia - Servicios Profesionales',
      description: 'Servicios profesionales de limpieza de oficinas en Valencia. Productos ecológicos y personal cualificado.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Limpieza de oficinas Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Limpieza de Oficinas Valencia',
      description: 'Servicios profesionales de limpieza con productos ecológicos.',
      images: ['/og-image.png']
    }
  },

  // Limpieza de Comunidades
  limpiezaComunidades: {
    title: 'Limpieza de Comunidades Valencia - Servicios Integrales | Smart Clean',
    description: 'Servicios integrales de limpieza de comunidades en Valencia. Limpieza de zonas comunes, escaleras, ascensores y servicios especiales. Presupuestos personalizados.',
    keywords: [
      'limpieza comunidades Valencia',
      'limpieza zonas comunes',
      'limpieza escaleras',
      'limpieza ascensores',
      'servicios limpieza comunidades',
      'empresa limpieza comunidades',
      'limpieza mantenimiento comunidades',
      'limpieza portal',
      'limpieza vecinos Valencia',
      'servicios limpieza edificios'
    ],
    openGraph: {
      title: 'Limpieza de Comunidades Valencia - Servicios Integrales',
      description: 'Servicios integrales de limpieza de comunidades en Valencia. Presupuestos personalizados.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Limpieza de comunidades Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Limpieza de Comunidades Valencia',
      description: 'Servicios integrales de limpieza con presupuestos personalizados.',
      images: ['/og-image.png']
    }
  },

  // Limpieza Industrial
  limpiezaIndustrial: {
    title: 'Limpieza Industrial Valencia - Servicios Especializados | Smart Clean',
    description: 'Servicios especializados de limpieza industrial en Valencia. Limpieza de naves, maquinaria, suelos industriales y zonas de producción. Servicios adaptados a tu sector.',
    keywords: [
      'limpieza industrial Valencia',
      'limpieza naves industriales',
      'limpieza maquinaria industrial',
      'limpieza suelos industriales',
      'servicios limpieza industrial',
      'empresa limpieza industrial',
      'limpieza zonas producción',
      'limpieza fábricas Valencia',
      'limpieza talleres industriales',
      'servicios limpieza sector industrial'
    ],
    openGraph: {
      title: 'Limpieza Industrial Valencia - Servicios Especializados',
      description: 'Servicios especializados de limpieza industrial en Valencia. Servicios adaptados a tu sector.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Limpieza industrial Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Limpieza Industrial Valencia',
      description: 'Servicios especializados de limpieza adaptados a tu sector.',
      images: ['/og-image.png']
    }
  },

  // Sobre Nosotros
  sobreNosotros: {
    title: 'Sobre Nosotros - Smart Clean Valencia | Empresa de Limpieza Profesional',
    description: 'Conoce Smart Clean, empresa líder en servicios de limpieza profesional en Valencia. Especialistas en limpieza de oficinas, comunidades, colegios e instalaciones industriales.',
    keywords: [
      'empresa limpieza Valencia',
      'Smart Clean Valencia',
      'limpieza profesional Valencia',
      'servicios limpieza empresa',
      'limpieza oficinas Valencia',
      'limpieza comunidades Valencia',
      'empresa limpieza colegios',
      'servicios limpieza industriales',
      'empresa especializada limpieza'
    ],
    openGraph: {
      title: 'Sobre Nosotros - Smart Clean Valencia',
      description: 'Empresa líder en servicios de limpieza profesional en Valencia.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smart Clean empresa Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sobre Nosotros - Smart Clean Valencia',
      description: 'Empresa líder en servicios de limpieza profesional.',
      images: ['/og-image.png']
    }
  },

  // Casos de Éxito
  casosExito: {
    title: 'Casos de Éxito - Proyectos Smart Clean Valencia | Servicios de Limpieza',
    description: 'Descubre nuestros casos de éxito: limpieza de oficinas, comunidades, colegios e instalaciones industriales. Servicios de limpieza profesional en Valencia y alrededores.',
    keywords: [
      'casos éxito Smart Clean',
      'limpieza oficinas Valencia',
      'limpieza comunidades Valencia',
      'limpieza colegios Valencia',
      'servicios limpieza profesional',
      'proyectos limpieza Valencia',
      'clientes limpieza Valencia',
      'referencias Smart Clean',
      'trabajos limpieza realizados'
    ],
    openGraph: {
      title: 'Casos de Éxito - Proyectos Smart Clean Valencia',
      description: 'Limpieza de oficinas, comunidades, colegios e instalaciones. Nuestros proyectos de éxito en Valencia.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Casos éxito Smart Clean Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Casos de Éxito Smart Clean Valencia',
      description: 'Limpieza de oficinas, comunidades y más proyectos de éxito.',
      images: ['/og-image.png']
    }
  }
}

// Función para obtener configuración SEO de una página
export function getSEOConfig(page: keyof typeof SEO_PAGES): SEOConfig {
  return SEO_PAGES[page] || SEO_PAGES.home
}

// Keywords long-tail específicas por servicio
export const LONG_TAIL_KEYWORDS = {
  limpiezaOficinas: [
    'limpieza oficinas diaria Valencia',
    'servicios limpieza despachos Valencia',
    'empresa limpieza oficinas profesional',
    'limpieza ecológica empresas Valencia',
    'limpieza mantenimiento oficinas'
  ],
  limpiezaComunidades: [
    'limpieza comunidades vecinos Valencia',
    'servicios limpieza escaleras ascensores',
    'empresa limpieza zonas comunes Valencia',
    'limpieza portal edificios Valencia',
    'presupuestos limpieza comunidades'
  ],
  limpiezaIndustrial: [
    'limpieza industrial naves Valencia',
    'servicios limpieza maquinaria industrial',
    'empresa limpieza talleres industriales',
    'limpieza suelos industriales Valencia',
    'limpieza zonas producción fábricas'
  ]
}

// Meta robots por página
export const ROBOTS_CONFIG = {
  default: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  noindex: 'noindex, nofollow',
  archive: 'index, follow, noarchive'
}