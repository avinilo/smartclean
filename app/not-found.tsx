'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Home, Phone, Mail, ArrowLeft, Search, Wrench, FileText, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AccessibleBreadcrumbs from '@/components/AccessibleBreadcrumbs'
import SEOHead from '@/components/SEOHead'

export default function NotFound() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Error 404', href: '/404' }
  ]

  const quickLinks = [
    {
      title: 'Limpieza de Comunidades',
      description: 'Mantenimiento de zonas comunes y espacios compartidos',
      href: '/mano-obra',
      icon: Users,
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200'
    },
    {
      title: 'Limpieza Industrial',
      description: 'Servicios especializados para instalaciones industriales',
      href: '/limpieza-industrial',
      icon: Wrench,
      color: 'bg-green-50 hover:bg-green-100 border-green-200'
    },
    {
      title: 'Limpieza de Oficinas',
      description: 'Espacios de trabajo limpios y saludables',
      href: '/gestion-documental',
      icon: FileText,
      color: 'bg-purple-50 hover:bg-purple-100 border-purple-200'
    }
  ]

  return (
    <>
      <SEOHead 
        title="Página no encontrada - Error 404 | Smart Clean"
        description="La página que buscas no existe. Descubre nuestros servicios de limpieza profesional en Valencia."
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-smartclean-light via-white to-smartclean-light/50">
        {/* Breadcrumbs */}
        <div className="container-custom pt-24 pb-4">
          <AccessibleBreadcrumbs items={breadcrumbItems} />
        </div>

        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Error Number */}
            <div className="mb-8">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold text-smartclean-primary/20 leading-none select-none">
                404
              </h1>
            </div>

            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/logo.webp"
                alt="Smart Clean"
                width={200}
                height={67}
                className="mx-auto h-16 w-auto"
                priority
              />
            </div>

            {/* Main Message */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-smartclean-secondary mb-4">
                ¡Ups! Página no encontrada
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                La página que estás buscando no existe o ha sido movida. 
                No te preocupes, te ayudamos a encontrar lo que necesitas.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/"
                className="btn-smartclean-primary inline-flex items-center gap-2 px-6 py-3 hover-lift"
                aria-label="Volver a la página de inicio"
              >
                <Home className="w-5 h-5" />
                Ir al Inicio
              </Link>
              
              <Link
                href="/#contacto"
                className="btn-smartclean-secondary inline-flex items-center gap-2 px-6 py-3 hover-lift"
                aria-label="Ir a la sección de contacto"
              >
                <Mail className="w-5 h-5" />
                Contactar
              </Link>
              
              <a
                href="tel:+34691616465"
                className="btn-smartclean-outline inline-flex items-center gap-2 px-6 py-3 hover-lift"
                aria-label="Llamar a Smart Clean"
              >
                <Phone className="w-5 h-5" />
                Llamar
              </a>
            </div>

            {/* Services Quick Links */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-smartclean-secondary mb-8">
                Descubre nuestros servicios de limpieza
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {quickLinks.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <Link
                      key={service.title}
                      href={service.href}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 hover-lift ${service.color}`}
                      aria-label={`Ir a ${service.title}`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 p-3 bg-white rounded-full shadow-sm">
                          <IconComponent className="w-8 h-8 text-smartclean-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-smartclean-secondary mb-2">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-smartclean-light/50">
              <div className="flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-smartclean-primary" />
              </div>
              <h3 className="text-xl font-semibold text-smartclean-secondary mb-4">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-gray-600 mb-6">
                Navega por nuestro sitio web o contáctanos directamente. 
                Estamos aquí para ayudarte con cualquier consulta sobre nuestros servicios.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/sobre-nosotros"
                  className="text-smartclean-primary hover:text-smartclean-secondary font-medium transition-colors"
                >
                  Conoce más sobre nosotros
                </Link>
                <span className="hidden sm:inline text-gray-300">|</span>
                <Link
                  href="/preguntas-frecuentes"
                  className="text-smartclean-primary hover:text-smartclean-secondary font-medium transition-colors"
                >
                  Preguntas frecuentes
                </Link>
                <span className="hidden sm:inline text-gray-300">|</span>
                <Link
                  href="/casos-exito"
                  className="text-smartclean-primary hover:text-smartclean-secondary font-medium transition-colors"
                >
                  Casos de éxito
                </Link>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-smartclean-primary hover:text-smartclean-secondary font-medium transition-colors"
                aria-label="Volver a la página anterior"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver atrás
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
