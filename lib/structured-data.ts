// Structured Data Schemas para SEO - Smart Clean
// Implementación de Schema.org para mejorar la indexación y rich snippets

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Limpiezas Smart Clean Valencia",
  "url": "https://limpiezassmartclean.com",
  "logo": "https://limpiezassmartclean.com/og-image.png",
  "description": "Servicios profesionales de limpieza en Valencia. Especialistas en limpieza de comunidades, oficinas, garajes y servicios integrales.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Josep Meliá Pigmalión 21 C 5",
    "addressLocality": "Benaguasil",
    "addressRegion": "Valencia",
    "postalCode": "46180",
    "addressCountry": "ES"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34691616465",
    "contactType": "customer service",
    "email": "info@limpiezassmartclean.com",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://limpiezassmartclean.com"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Valencia, España"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Limpiezas Smart Clean Valencia",
  "url": "https://limpiezassmartclean.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://limpiezassmartclean.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const serviceSchemas = {
  limpiezaOficinas: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Limpieza de Oficinas",
    "description": "Servicio profesional de limpieza de oficinas con productos ecológicos. Limpieza diaria, semanal o mensual adaptada a las necesidades de cada empresa.",
    "provider": {
      "@type": "Organization",
      "name": "Smart Clean"
    },
    "areaServed": "Valencia, España",
    "serviceType": "Limpieza de oficinas",
    "offers": {
      "@type": "Offer",
      "description": "Limpieza profesional de oficinas con horarios flexibles"
    }
  },
  limpiezaComunidades: {
    "@context": "https://schema.org", 
    "@type": "Service",
    "name": "Limpieza de Comunidades",
    "description": "Servicio integral de limpieza de comunidades. Limpieza de zonas comunes, escaleras, ascensores y espacios compartidos con productos profesionales.",
    "provider": {
      "@type": "Organization", 
      "name": "Smart Clean"
    },
    "areaServed": "Valencia, España",
    "serviceType": "Limpieza de comunidades",
    "offers": {
      "@type": "Offer",
      "description": "Limpieza integral de comunidades con presupuestos personalizados"
    }
  },
  limpiezaIndustrial: {
    "@context": "https://schema.org",
    "@type": "Service", 
    "name": "Limpieza Industrial",
    "description": "Servicio especializado de limpieza industrial. Limpieza de naves, maquinaria, suelos industriales y zonas de producción con equipos y productos específicos.",
    "provider": {
      "@type": "Organization",
      "name": "Smart Clean"
    },
    "areaServed": "Valencia, España", 
    "serviceType": "Limpieza industrial",
    "offers": {
      "@type": "Offer",
      "description": "Limpieza industrial adaptada a cada sector"
    }
  }
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Smart Clean",
  "image": "https://limpiezassmartclean.com/og-image.png",
  "telephone": "+34691616465",
  "email": "info@limpiezassmartclean.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Josep Meliá Pigmalión 21 C 5",
    "addressLocality": "Benaguasil", 
    "addressRegion": "Valencia",
    "postalCode": "46180",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.4699", // Coordenadas de Benaguasil
    "longitude": "-0.3763"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "€€",
  "areaServed": "Valencia"
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué servicios ofrece Smart Clean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smart Clean ofrece servicios profesionales de limpieza: limpieza de oficinas, limpieza de comunidades, limpieza industrial, limpieza de colegios, limpieza de cristales, y servicios especiales adaptados a cada necesidad."
      }
    },
    {
      "@type": "Question", 
      "name": "¿Dónde está ubicada Smart Clean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smart Clean está ubicada en Calle Josep Meliá Pigmalión 21 C 5, 46180 Benaguasil, Valencia. Prestamos servicios en toda la Comunidad Valenciana."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el horario de atención de Smart Clean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestro horario de oficina es de lunes a viernes de 8:00 a 18:00. Para servicios de limpieza, adaptamos nuestros horarios a las necesidades de cada cliente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de empresas pueden usar los servicios de Smart Clean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestros servicios de limpieza están diseñados para todo tipo de empresas y comunidades: oficinas, comunidades de vecinos, colegios, instalaciones industriales, hoteles, restaurantes y negocios en general."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo contactar con Smart Clean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes contactarnos por teléfono al +34 691 616 465, por email a info@limpiezassmartclean.com, o a través de nuestro formulario web."
      }
    }
  ]
}

// Función helper para crear schemas específicos por página
export const createServiceSchema = (service: {
  name: string
  description: string
  serviceType: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": organizationSchema,
  "areaServed": "Valencia, España",
  "serviceType": service.serviceType
})

// Función para generar breadcrumb schema
export const createBreadcrumbSchema = (items: Array<{
  name: string
  url: string
}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})