'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBorderVisible, setIsBorderVisible] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Detectar scroll para cambiar el estilo del header y dirección de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      // Lógica existente para transparencia y borde
      setIsBorderVisible(scrollPosition > 80)
      setIsScrolled(scrollPosition > 100)
      
      // Nueva lógica para mostrar/ocultar header basado en dirección de scroll
      // IMPORTANTE: Si el menú móvil está abierto, siempre mantener el header visible
      if (isMenuOpen) {
        setIsHeaderVisible(true)
      } else if (scrollPosition > 100) { // Solo aplicar después de 100px
        if (scrollPosition > lastScrollY && scrollPosition > 200) {
          // Scrolling hacia abajo - ocultar header
          setIsHeaderVisible(false)
        } else if (scrollPosition < lastScrollY) {
          // Scrolling hacia arriba - mostrar header
          setIsHeaderVisible(true)
        }
      } else {
        // Siempre mostrar header en la parte superior
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(scrollPosition)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMenuOpen])

  const services = [
    { name: 'Limpieza de Comunidades', href: '/limpieza-comunidades' },
    { name: 'Limpieza Industrial', href: '/limpieza-industrial' },
    { name: 'Limpieza de Oficinas', href: '/gestion-documental' },
    { name: 'Limpieza de Garajes', href: '/limpieza-garajes' },
    { name: 'Limpieza de Cristales', href: '/limpieza-cristales' },
    { name: 'Limpieza de Talleres', href: '/limpieza-talleres' },
    { name: 'Limpieza de Colegios', href: '/limpieza-colegios' },
    { name: 'Vitrificado de Suelos', href: '/vitrificado-suelos' },
    { name: 'Limpieza de Coworking', href: '/limpieza-coworking' },
    { name: 'Limpieza de Gimnasios', href: '/limpieza-gimnasios' },
    { name: 'Limpieza de Instalaciones Deportivas', href: '/servicios/instalaciones-deportivas' },
    { name: 'Servicios Especiales', href: '/servicios/servicios-especiales' },
  ]

  const nosotrosItems = [
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Casos de Éxito', href: '/casos-exito' },
    { name: 'Certificaciones', href: '/certificaciones' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
       isHeaderVisible ? 'top-0' : '-top-20'
     } ${
       isScrolled || isMenuOpen
        ? `bg-smartclean-light shadow-lg ${isBorderVisible ? 'border-b border-smartclean-primary/20' : ''}` 
         : 'bg-transparent'
     }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover-scale" aria-label="Smart Clean - Ir a página de inicio">
            <Image
              src="/logo.webp"
              alt="Smart Clean - Servicios profesionales de limpieza"
              width={150}
              height={50}
              className={`h-10 w-auto transition-smooth ${isScrolled || isMenuOpen ? '' : 'brightness-0 invert'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
            <Link
              href="/"
              className={`font-medium transition-smooth relative group ${
                isScrolled 
                  ? 'text-smartclean-secondary hover:text-smartclean-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              Inicio
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                isScrolled ? 'bg-smartclean-primary' : 'bg-white'
              }`}></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`flex items-center gap-1 font-medium transition-smooth relative group ${
                  isScrolled 
                    ? 'text-smartclean-secondary hover:text-smartclean-primary' 
                    : 'text-white hover:text-white/80'
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-label="Menú de servicios"
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-smooth ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                  isScrolled ? 'bg-smartclean-primary' : 'bg-white'
                }`}></span>
              </button>
              
              {/* Dropdown Menu - mantiene colores originales */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-smartclean-light transition-smooth ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                role="menu"
                aria-label="Servicios disponibles"
              >
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-smartclean-secondary hover:text-smartclean-primary hover:bg-smartclean-light/50 transition-smooth hover-lift"
                      role="menuitem"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Nosotros Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsNosotrosOpen(true)}
                onMouseLeave={() => setIsNosotrosOpen(false)}
                className={`flex items-center gap-1 font-medium transition-smooth relative group ${
                  isScrolled 
                    ? 'text-smartclean-secondary hover:text-smartclean-primary' 
                    : 'text-white hover:text-white/80'
                }`}
                aria-expanded={isNosotrosOpen}
                aria-haspopup="true"
                aria-label="Menú sobre nosotros"
              >
                Nosotros
                <ChevronDown className={`w-4 h-4 transition-smooth ${isNosotrosOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                  isScrolled ? 'bg-smartclean-primary' : 'bg-white'
                }`}></span>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-smartclean-light transition-smooth ${
                  isNosotrosOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsNosotrosOpen(true)}
                onMouseLeave={() => setIsNosotrosOpen(false)}
                role="menu"
                aria-label="Información sobre nosotros"
              >
                <div className="py-2">
                  {nosotrosItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-smartclean-secondary hover:text-smartclean-primary hover:bg-smartclean-light/50 transition-smooth hover-lift"
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/preguntas-frecuentes"
              className={`font-medium transition-smooth relative group ${
                isScrolled 
                  ? 'text-smartclean-secondary hover:text-smartclean-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              FAQ
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                isScrolled ? 'bg-smartclean-primary' : 'bg-white'
              }`}></span>
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className={`font-medium transition-smooth relative group ${
                isScrolled 
                  ? 'text-smartclean-secondary hover:text-smartclean-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              Blog
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                isScrolled ? 'bg-smartclean-primary' : 'bg-white'
              }`}></span>
            </Link>

            <Link
              href="/#contacto"
              className={`font-medium transition-smooth relative group ${
                isScrolled 
                  ? 'text-smartclean-secondary hover:text-smartclean-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              Contacto
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                isScrolled ? 'bg-smartclean-primary' : 'bg-white'
              }`}></span>
            </Link>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <a href="tel:+34691616465" className="btn-smartclean-primary text-sm py-2 px-6 flex items-center gap-2 hover-lift">
              <Phone className="w-4 h-4" />
              Llamar
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-smartclean-light/50 transition-smooth hover-scale"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 transition-smooth ${isScrolled || isMenuOpen ? 'text-smartclean-secondary' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 transition-smooth ${isScrolled || isMenuOpen ? 'text-smartclean-secondary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden fixed top-20 left-0 w-full bg-white shadow-lg border-t border-smartclean-primary/20 z-40 animate-slide-up max-h-[calc(100vh-5rem)] overflow-y-auto"
            role="navigation"
            aria-label="Menú de navegación móvil"
          >
            <div className="flex flex-col space-y-4 py-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-smartclean-secondary hover:text-smartclean-primary font-medium transition-smooth px-4 py-2 rounded-lg hover:bg-smartclean-light/50 hover-lift"
              >
                Inicio
              </Link>

              {/* Mobile Services - Ahora con desplegable */}
              <div className="px-4">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-smartclean-secondary font-medium transition-smooth py-2 rounded-lg hover:bg-smartclean-light/50 hover-lift"
                  aria-expanded={isServicesOpen}
                  aria-controls="mobile-services-menu"
                >
                  <span>Servicios</span>
                  <ChevronDown className={`w-4 h-4 transition-smooth ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  id="mobile-services-menu"
                  className={`pl-4 space-y-2 transition-all duration-300 overflow-hidden ${
                    isServicesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsServicesOpen(false)
                      }}
                      className="block text-gray-600 hover:text-smartclean-primary transition-smooth py-1 hover-lift"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Nosotros - Ahora con desplegable */}
              <div className="px-4">
                <button
                  onClick={() => setIsNosotrosOpen(!isNosotrosOpen)}
                  className="flex items-center justify-between w-full text-smartclean-secondary font-medium transition-smooth py-2 rounded-lg hover:bg-smartclean-light/50 hover-lift"
                  aria-expanded={isNosotrosOpen}
                  aria-controls="mobile-nosotros-menu"
                >
                  <span>Nosotros</span>
                  <ChevronDown className={`w-4 h-4 transition-smooth ${isNosotrosOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  id="mobile-nosotros-menu"
                  className={`pl-4 space-y-2 transition-all duration-300 overflow-hidden ${
                    isNosotrosOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  {nosotrosItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsNosotrosOpen(false)
                      }}
                      className="block text-gray-600 hover:text-smartclean-primary transition-smooth py-1 hover-lift"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/preguntas-frecuentes"
                onClick={() => setIsMenuOpen(false)}
                className="text-smartclean-secondary hover:text-smartclean-primary font-medium transition-smooth px-4 py-2 rounded-lg hover:bg-smartclean-light/50 hover-lift"
              >
                Preguntas Frecuentes
              </Link>

              {/* Mobile Blog */}
              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="text-smartclean-secondary hover:text-smartclean-primary font-medium transition-smooth px-4 py-2 rounded-lg hover:bg-smartclean-light/50 hover-lift"
              >
                Blog
              </Link>

              <Link
                href="/#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="text-smartclean-secondary hover:text-smartclean-primary font-medium transition-smooth px-4 py-2 rounded-lg hover:bg-smartclean-light/50 hover-lift"
              >
                Contacto
              </Link>

              <div className="px-4 pt-2 pb-4">
                <a href="tel:+34691616465" className="btn-smartclean-primary text-sm py-2 px-6 flex items-center justify-center gap-2 hover-lift">
                  <Phone className="w-4 h-4" />
                  Llamar
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
