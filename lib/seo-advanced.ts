/**
 * Utilidades avanzadas de SEO para Smart Clean
 * Incluye canonical URLs, hreflang, Open Graph avanzado y Schema.org adicionales
 */

import { Metadata } from 'next'

// Configuración base del sitio
export const SITE_CONFIG = {
  name: 'Smart Clean',
  url: getBaseUrl(),
  description: 'Servicios profesionales de limpieza en Valencia: oficinas, comunidades e instalaciones industriales',
  locale: 'es_ES',
  type: 'website',
  author: 'Smart Clean',
  keywords: [
    'limpieza profesional',
    'limpieza oficinas',
    'limpieza comunidades',
    'limpieza industrial',
    'Valencia',
    'servicios de limpieza'
  ]
}

// Función para detectar URL base automáticamente
function getBaseUrl(): string {
  // 1. Prioridad: Variable de entorno explícita
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  
  // 2. Vercel: Usar VERCEL_URL automáticamente
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  
  // 3. Fallback: URL de producción
  return 'https://limpiezassmartclean.com'
}

// Tipos para configuración SEO
export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
  ogType?: 'website' | 'article'
  ogImage?: string
  twitterCard?: 'summary' | 'summary_large_image'
  structuredData?: any[]
}

/**
 * Genera canonical URL dinámico
 */
export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_CONFIG.url}${cleanPath}`
}

/**
 * Genera hreflang para internacionalización futura
 */
export function generateHreflang(path: string): Record<string, string> {
  const baseUrl = generateCanonicalUrl(path)
  
  return {
    'es': baseUrl,
    'es-ES': baseUrl,
    'x-default': baseUrl
  }
}

/**
 * Genera Open Graph avanzado
 */
export function generateOpenGraph(config: SEOConfig): Metadata['openGraph'] {
  return {
    type: config.ogType || 'website',
    locale: SITE_CONFIG.locale,
    url: config.canonical || SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: config.title,
    description: config.description,
    images: [
      {
        url: config.ogImage || '/og-image.png',
        width: 1200,
        height: 630,
        alt: config.title,
        type: 'image/png'
      }
    ]
  }
}

/**
 * Genera Twitter Cards optimizadas
 */
export function generateTwitterCard(config: SEOConfig): Metadata['twitter'] {
  return {
    card: config.twitterCard || 'summary_large_image',
    site: '@smartcleanvlc',
    creator: '@smartcleanvlc',
    title: config.title,
    description: config.description,
    images: [config.ogImage || '/og-image.png']
  }
}

/**
 * Schema.org para FAQ
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * Schema.org para HowTo (procesos de mantenimiento)
 */
export function generateHowToSchema(title: string, steps: Array<{ name: string; text: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: `Guía paso a paso: ${title}`,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  }
}

/**
 * Schema.org para Breadcrumbs avanzado
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

/**
 * Schema.org para Service específico
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  provider: string
  areaServed: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider,
      url: SITE_CONFIG.url
    },
    areaServed: {
      '@type': 'Place',
      name: service.areaServed
    },
    serviceType: service.serviceType,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Catálogo de ${service.name}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name
          }
        }
      ]
    }
  }
}

/**
 * Genera metadata completa para una página
 */
export function generatePageMetadata(config: SEOConfig): Metadata {
  const canonical = config.canonical || SITE_CONFIG.url
  const keywords = config.keywords || SITE_CONFIG.keywords

  return {
    title: config.title,
    description: config.description,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    publisher: SITE_CONFIG.author,
    robots: {
      index: !config.noindex,
      follow: !config.nofollow,
      googleBot: {
        index: !config.noindex,
        follow: !config.nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    alternates: {
      canonical,
      languages: generateHreflang(canonical.replace(SITE_CONFIG.url, ''))
    },
    openGraph: generateOpenGraph(config),
    twitter: generateTwitterCard(config),
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION
    },
    other: {
      'msapplication-TileColor': '#2563eb',
      'theme-color': '#ffffff'
    }
  }
}

/**
 * Utilidades para preconnect y DNS prefetch
 */
export const PRECONNECT_URLS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://www.google-analytics.com',
  'https://www.googletagmanager.com'
]

export const DNS_PREFETCH_URLS = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://www.google-analytics.com',
  'https://www.googletagmanager.com',
  'https://connect.facebook.net',
  'https://www.linkedin.com'
]

/**
 * Genera structured data JSON-LD
 */
export function generateStructuredDataScript(data: any | any[]): string {
  const structuredData = Array.isArray(data) ? data : [data]
  
  return JSON.stringify(structuredData.length === 1 ? structuredData[0] : structuredData, null, 0)
}

/**
 * Configuraciones SEO específicas por página
 */
export const PAGE_SEO_CONFIGS = {
  home: {
    title: 'Smart Clean - Servicios Profesionales de Limpieza Valencia',
    description: 'Servicios profesionales de limpieza en Valencia: oficinas, comunidades, colegios e instalaciones industriales. Productos ecológicos y personal cualificado.',
    keywords: ['limpieza profesional Valencia', 'servicios limpieza', 'limpieza oficinas', 'limpieza comunidades', 'limpieza industrial'],
    ogType: 'website' as const,
    twitterCard: 'summary_large_image' as const
  },
  'limpieza-oficinas': {
    title: 'Limpieza de Oficinas Valencia | Smart Clean Profesional',
    description: 'Servicios profesionales de limpieza de oficinas en Valencia. Limpieza diaria, mensual y servicios especiales. Productos ecológicos y personal cualificado.',
    keywords: ['limpieza oficinas Valencia', 'servicios limpieza oficinas', 'limpieza profesional', 'limpieza ecológica'],
    ogType: 'service' as const
  },
  'limpieza-comunidades': {
    title: 'Limpieza de Comunidades Valencia | Smart Clean Integral',
    description: 'Servicios integrales de limpieza de comunidades en Valencia. Limpieza de zonas comunes, escaleras, ascensores y servicios especiales.',
    keywords: ['limpieza comunidades Valencia', 'limpieza zonas comunes', 'limpieza escaleras', 'servicios comunidades'],
    ogType: 'service' as const
  },
  'limpieza-industrial': {
    title: 'Limpieza Industrial Valencia | Smart Clean Especializada',
    description: 'Servicios especializados de limpieza industrial en Valencia. Limpieza de naves, maquinaria, suelos industriales y zonas de producción.',
    keywords: ['limpieza industrial Valencia', 'limpieza naves', 'limpieza maquinaria', 'servicios industriales'],
    ogType: 'service' as const
  }
} as const
