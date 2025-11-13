import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Wrench, FileText, CheckCircle, Clock, Shield, Phone, Car, Wind, GraduationCap, Sparkles, Building, Dumbbell, Trophy, Target } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'
import { getSEOConfig } from '@/lib/seo-config'

const seoConfig = getSEOConfig('home')

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords.join(', '),
  openGraph: {
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    type: seoConfig.openGraph.type as any,
    locale: 'es_ES',
    images: seoConfig.openGraph.images,
  },
  twitter: {
    card: seoConfig.twitter.card as any,
    title: seoConfig.twitter.title,
    description: seoConfig.twitter.description,
    images: seoConfig.twitter.images,
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function Home() {

  const services = [
    {
      id: 'limpieza-oficinas',
      title: 'Limpieza de Oficinas',
      subtitle: 'Espacios de Trabajo Impecables',
      icon: Users,
      description: 'Servicio profesional de limpieza para oficinas y despachos. Mantenemos su espacio de trabajo limpio y saludable para mejorar la productividad.',
      features: [
        'Limpieza diaria y mantenimiento',
        'Productos ecológicos y certificados',
        'Horarios flexibles para no interrumpir su actividad',
        'Personal uniformado y capacitado',
        'Plan de limpieza personalizado',
        'Servicio urgente 24h disponible'
      ],
      link: '/gestion-documental',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format',
      priority: 1
    },
    {
      id: 'limpieza-comunidades',
      title: 'Limpieza de Comunidades',
      subtitle: 'Espacios Comunes Cuidados',
      icon: FileText,
      description: 'Mantenimiento integral de zonas comunes en comunidades de vecinos. Escaleras, ascensores, portales y zonas exteriores siempre limpias.',
      features: [
        'Limpieza de escaleras y pasillos',
        'Mantenimiento de ascensores',
        'Portales y zonas de entrada',
        'Zonas exteriores y jardines',
        'Frecuencia adaptada a sus necesidades',
        'Servicio de mantenimiento incluido'
      ],
      link: '/mano-obra',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&auto=format',
      priority: 2
    },
    {
      id: 'limpieza-industrial',
      title: 'Limpieza Industrial',
      subtitle: 'Instalaciones Productivas Limpias',
      icon: Wrench,
      description: 'Servicios especializados de limpieza para fábricas, almacenes y centros logísticos. Cumplimos con todos los estándares de seguridad.',
      features: [
        'Fábricas y centros de producción',
        'Almacenes y centros logísticos',
        'Maquinaria y equipos industriales',
        'Protocolos de seguridad estrictos',
        'Personal especializado y formado',
        'Servicio adaptado a su producción'
      ],
      link: '/gestora-mantenimientos',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop&auto=format',
      priority: 3
    },
    {
      id: 'limpieza-garajes',
      title: 'Limpieza de Garajes',
      subtitle: 'Parkings Comunitarios Impecables',
      icon: Car,
      description: 'Limpieza especializada de garajes comunitarios y parkings. Eliminamos suciedad, aceites y mantenemos sus instalaciones en perfecto estado.',
      features: [
        'Eliminación de manchas de aceite y grasa',
        'Limpieza profunda de suelos',
        'Desinfección de zonas comunes',
        'Mantenimiento de zonas de acceso',
        'Limpieza de rampas y zonas de maniobra',
        'Servicio programado según necesidades'
      ],
      link: '/limpieza-garajes',
      image: 'https://images.unsplash.com/photo-1523413363575-42f420a2f7a1?w=800&h=600&fit=crop&auto=format',
      priority: 4
    },
    {
      id: 'limpieza-cristales',
      title: 'Limpieza de Cristales',
      subtitle: 'Cristales Brillantes y Sin Manchas',
      icon: Wind,
      description: 'Servicio profesional de limpieza de cristales para ventanas, fachadas y superficies de vidrio. Resultados impecables y sin rayas.',
      features: [
        'Limpieza de ventanas interiores y exteriores',
        'Limpieza de fachadas de cristal',
        'Técnicas sin marcas ni rayas',
        'Productos antihuella y antical',
        'Acceso a altura con equipamiento especial',
        'Servicio regular o puntual'
      ],
      link: '/limpieza-cristales',
      image: 'https://images.unsplash.com/photo-1556697084-7f5cd59b8bf9?w=800&h=600&fit=crop&auto=format',
      priority: 5
    },
    {
      id: 'limpieza-colegios',
      title: 'Limpieza de Colegios',
      subtitle: 'Centros Educativos Sanitizados',
      icon: GraduationCap,
      description: 'Limpieza especializada para centros educativos. Protocolos de higiene adaptados a las necesidades de colegios, guarderías y universidades.',
      features: [
        'Desinfección de aulas y zonas comunes',
        'Limpieza de comedores escolares',
        'Protocolos adaptados a niños',
        'Productos hipoalergénicos certificados',
        'Horarios adaptados al horario escolar',
        'Servicio de urgencia disponible'
      ],
      link: '/limpieza-colegios',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop&auto=format',
      priority: 6
    },
    {
      id: 'limpieza-suelos',
      title: 'Limpieza de Suelos',
      subtitle: 'Suelos Impecables y Cuidados',
      icon: Sparkles,
      description: 'Servicio especializado en limpieza y tratamiento de todo tipo de suelos. Marmol, parquet, gres, alfombras y moquetas.',
      features: [
        'Limpieza profunda de todo tipo de suelos',
        'Tratamiento específico según material',
        'Vitrificado y abrillantado',
        'Extracción de manchas difíciles',
        'Secado rápido y sin olores',
        'Mantenimiento programado'
      ],
      link: '/limpieza-suelos',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&auto=format',
      priority: 7
    },
    {
      id: 'limpieza-edificios',
      title: 'Limpieza de Edificios',
      subtitle: 'Edificios Completos Limpios',
      icon: Building,
      description: 'Limpieza integral de edificios de oficinas, residencias y complejos comerciales. Mantenimiento de todas las zonas comunes y privadas.',
      features: [
        'Limpieza de oficinas y despachos',
        'Mantenimiento de zonas comunes',
        'Limpieza de baños y vestuarios',
        'Servicio de conserjería incluido',
        'Protocolos de seguridad e higiene',
        'Horarios flexibles 24/7'
      ],
      link: '/limpieza-edificios',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format',
      priority: 8
    },
    {
      id: 'limpieza-gimnasios',
      title: 'Limpieza de Gimnasios',
      subtitle: 'Centros Deportivos Sanitizados',
      icon: Dumbbell,
      description: 'Limpieza especializada para gimnasios y centros deportivos. Protocolos de higiene para zonas de entrenamiento y vestuarios.',
      features: [
        'Desinfección de equipos deportivos',
        'Limpieza de vestuarios y duchas',
        'Sanitización de zonas de entrenamiento',
        'Productos desinfectantes deportivos',
        'Eliminación de olores corporales',
        'Mantenimiento continuo durante el día'
      ],
      link: '/limpieza-gimnasios',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&auto=format',
      priority: 9
    },
    {
      id: 'vitrificado-suelos',
      title: 'Vitrificado de Suelos',
      subtitle: 'Protección y Brillo Duradero',
      icon: Sparkles,
      description: 'Servicio especializado de vitrificado de suelos para una protección duradera y un acabado brillante. Ideal para suelos de alto tráfico.',
      features: [
        'Vitrificado profesional de suelos',
        'Protección contra desgaste y manchas',
        'Acabado brillante y duradero',
        'Aplicación de resinas de alta calidad',
        'Secado rápido y sin olores',
        'Mantenimiento post-vitrificado'
      ],
      link: '/vitrificado-suelos',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format',
      priority: 10
    },
    {
      id: 'limpieza-instalaciones-deportivas',
      title: 'Limpieza de Instalaciones Deportivas',
      subtitle: 'Centros Deportivos en Óptimas Condiciones',
      icon: Trophy,
      description: 'Limpieza especializada para polideportivos, pabellones y campos deportivos. Mantenemos sus instalaciones en perfectas condiciones higiénicas.',
      features: [
        'Limpieza de vestuarios y duchas deportivas',
        'Desinfección de zonas de entrenamiento',
        'Mantenimiento de gradas y zonas públicas',
        'Limpieza de pistas deportivas y campos',
        'Protocolos específicos para deportes',
        'Servicio post-evento y mantenimiento'
      ],
      link: '/limpieza-instalaciones-deportivas',
      image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800&h=600&fit=crop&auto=format',
      priority: 11
    },
    {
      id: 'servicios-especiales',
      title: 'Servicios Especiales de Limpieza',
      subtitle: 'Soluciones Personalizadas para Casos Únicos',
      icon: Target,
      description: 'Servicios de limpieza especializados para situaciones específicas: limpieza post-obra, eventos, mudanzas, o emergencias. Soluciones adaptadas a sus necesidades.',
      features: [
        'Limpieza post-obra y construcción',
        'Servicio de limpieza para eventos',
        'Limpieza de fin de obra y mudanzas',
        'Servicios de emergencia y urgencia',
        'Limpieza de garajes y trasteros',
        'Tratamientos antihongos y antimoho'
      ],
      link: '/servicios-especiales',
      image: 'https://images.unsplash.com/photo-1521791055328-946704121415?w=800&h=600&fit=crop&auto=format',
      priority: 12
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-smartclean overflow-hidden relative -mt-20 pt-20"
      >
        <div className="absolute inset-0 bg-smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&auto=format"
              alt="Instalaciones de limpieza profesional - Smart Clean servicios de limpieza integral"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-bounce-in">
              Limpiezas Smart Clean Valencia
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 text-white/90 animate-fade-in animate-delay-300">
              <strong>Limpieza integral</strong> para oficinas, comunidades e instalaciones industriales
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-white/80 animate-fade-in animate-delay-400">
              Valencia • Alicante • Castellón
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-500">
              <a href="#servicios" className="btn-primary hover-lift hover-glow">
                Ver Servicios Principales
              </a>
              <a href="#contacto" className="btn-secondary hover-lift hover-scale">
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-smartclean-secondary">
              Clientes que Confían en Nosotros
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Empresas, comunidades y particulares que necesitan servicios de limpieza profesional y confiable
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-smartclean-light rounded-xl hover-lift">
              <div className="w-16 h-16 bg-smartclean-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Oficinas y Despachos</h3>
              <p className="text-gray-600">Espacios de trabajo que requieren limpieza diaria y mantenimiento profesional.</p>
            </div>
            
            <div className="text-center p-6 bg-smartclean-light rounded-xl hover-lift">
              <div className="w-16 h-16 bg-smartclean-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Comunidades de Vecinos</h3>
              <p className="text-gray-600">Mantenimiento de zonas comunes, escaleras y espacios compartidos.</p>
            </div>
            
            <div className="text-center p-6 bg-smartclean-light rounded-xl hover-lift">
              <div className="w-16 h-16 bg-smartclean-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Industrias y Fábricas</h3>
              <p className="text-gray-600">Instalaciones industriales que requieren limpieza especializada y protocolos de seguridad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="servicios" 
        className="section-padding bg-gray-50"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-smartclean-secondary animate-fade-in">
              Servicios de Limpieza Profesional Smart Clean
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Soluciones de limpieza profesional adaptadas a sus necesidades específicas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link 
                  key={service.id}
                  href={service.link}
                  className={`card-service group animate-scale-in animate-delay-${(index + 1) * 200} hover-lift block cursor-pointer`}
                >
                  
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Servicios profesionales de Smart Clean`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-smartclean-primary/20"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-smartclean-secondary">{service.title}</h3>
                  <p className="text-sm text-smartclean-primary font-semibold mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-smartclean-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 text-smartclean-primary font-semibold group-hover:gap-3 transition-all group-hover:text-smartclean-secondary">
                    Más información <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>



      {/* About Section */}
      <section 
        id="nosotros" 
        className="section-padding bg-white"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&auto=format"
                alt="Equipo profesional de limpieza - Smart Clean"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-smartclean-primary/10"></div>
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-smartclean-secondary animate-slide-left">
                Empresa de Limpieza Profesional en Valencia
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed animate-fade-in animate-delay-300">
                <strong>Smart Clean</strong> es tu empresa de limpieza de confianza en Valencia. Más de 10 años de experiencia en limpieza profesional de oficinas, comunidades e instalaciones industriales con productos ecológicos certificados.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8 animate-slide-right animate-delay-500">
                <div className="flex items-start gap-3 hover-lift">
                  <div className="w-10 h-10 bg-smartclean-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-smartclean-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-smartclean-secondary">Equipo Profesional</h3>
                    <p className="text-sm text-gray-600">Personal capacitado y experimentado</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift">
                  <div className="w-10 h-10 bg-smartclean-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-smartclean-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-smartclean-secondary">Productos Ecológicos</h3>
                    <p className="text-sm text-gray-600">Comprometidos con el medio ambiente</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift">
                  <div className="w-10 h-10 bg-smartclean-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-smartclean-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-smartclean-secondary">Servicio Garantizado</h3>
                    <p className="text-sm text-gray-600">Calidad y puntualidad aseguradas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 hover-lift">
                  <div className="w-10 h-10 bg-smartclean-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-smartclean-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-smartclean-secondary">Cobertura Regional</h3>
                    <p className="text-sm text-gray-600">Valencia, Alicante, Castellón</p>
                  </div>
                </div>
              </div>

              <a href="#contacto" className="btn-primary hover-lift">
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contacto" 
        className="section-padding bg-gray-50"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-smartclean-secondary animate-fade-in">
                Solicite su Presupuesto
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 animate-slide-up animate-delay-200">
                Respuesta rápida garantizada en 24-48 horas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 border border-smartclean-light hover-lift animate-slide-left animate-delay-400">
                <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-smartclean-primary mt-1" />
                    <div>
                      <p className="font-semibold text-smartclean-secondary">Teléfono</p>
                      <a href="tel:+34691616465" className="text-gray-600 hover:text-smartclean-primary transition-colors">691 616 465</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-smartclean-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-smartclean-secondary">Email</p>
                      <a href="mailto:info@limpiezassmartclean.com" className="text-gray-600 hover:text-smartclean-primary transition-colors">info@limpiezassmartclean.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-smartclean-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-smartclean-secondary">Dirección</p>
                      <p className="text-gray-600">Calle Josep Meliá Pigmalión 21 C 5<br />46180 Benaguasil, Valencia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl shadow-lg p-8 border border-smartclean-light hover-lift animate-slide-right animate-delay-600">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
