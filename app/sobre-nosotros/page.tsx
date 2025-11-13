import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Award, Users, Calendar, MapPin, Phone, Mail } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getSEOConfig } from '@/lib/seo-config'

const seoConfig = getSEOConfig('sobreNosotros')

export const metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords.join(', '),
  openGraph: {
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    type: seoConfig.openGraph.type,
    locale: 'es_ES',
    images: seoConfig.openGraph.images,
  },
  twitter: {
    card: seoConfig.twitter.card,
    title: seoConfig.twitter.title,
    description: seoConfig.twitter.description,
    images: seoConfig.twitter.images,
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function SobreNosotros() {
  const breadcrumbItems = [
    { name: 'Sobre Nosotros' }
  ]

  const certifications = [
    {
      title: "Prevención de Riesgos Laborales",
      description: "Certificación completa en PRL para todo nuestro personal de limpieza",
      year: "2024"
    },
    {
      title: "Productos de Limpieza Ecológicos",
      description: "Certificación en uso de productos químicos seguros y sostenibles",
      year: "2024"
    },
    {
      title: "Limpieza Industrial Especializada",
      description: "Especialización en limpieza de instalaciones industriales",
      year: "2023"
    }
  ]

  const experience = [
    {
      title: "Más de 10 años de experiencia",
      description: "Una década ofreciendo servicios de limpieza profesional en Valencia"
    },
    {
      title: "Más de 500 clientes satisfechos",
      description: "Empresas, comunidades e industrias que confían en nuestros servicios"
    },
    {
      title: "Equipo de 20+ profesionales",
      description: "Personal especializado en limpieza de oficinas, comunidades e industrias"
    },
    {
      title: "Cobertura en toda la Comunidad Valenciana",
      description: "Servicio completo en Valencia, Alicante y Castellón"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
              <div className="absolute inset-0 bg-smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&auto=format"
            alt="Equipo profesional de Smart Clean - Sobre nosotros"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-bounce-in">
              Sobre Limpiezas Smart Clean Valencia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animate-delay-300">
              Experiencia, profesionalidad y confianza en cada servicio de limpieza
            </p>
          </div>
        </div>
      </section>

       {/* Breadcrumbs */}
       <section className="py-4 bg-gray-50 border-b">
         <div className="container-custom">
           <Breadcrumbs items={breadcrumbItems} />
         </div>
       </section>

       {/* Nuestra Historia */}
       <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-smartclean-secondary animate-slide-left">
                Nuestra Historia
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed animate-fade-in animate-delay-300">
                Smart Clean nació de la necesidad de ofrecer servicios de limpieza profesionales y confiables en Valencia. Con más de 10 años de experiencia en el sector, nos hemos consolidado como referente en limpieza de oficinas, comunidades e instalaciones industriales en toda la Comunidad Valenciana.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in animate-delay-500">
                Nuestro modelo de negocio se basa en la prestación de servicios de limpieza integral para empresas, comunidades de vecinos e instalaciones industriales, utilizando productos ecológicos certificados y técnicas avanzadas que garantizan resultados excepcionales y seguros para nuestros clientes.
              </p>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed animate-fade-in animate-delay-300">
                Contamos con un equipo de más de 20 profesionales especializados en limpieza de oficinas, mantenimiento de comunidades y servicios industriales. Nuestro enfoque principal es la satisfacción del cliente y la excelencia en cada servicio.
              </p>
              
              <div className="space-y-4 mb-8 animate-slide-up animate-delay-500">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Productos de limpieza ecológicos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Personal cualificado y formado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Experiencia demostrada en limpieza</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Compromiso con la excelencia</span>
                </div>
              </div>
            </div>
            
            {/* Imagen profesional */}
            <div className="animate-slide-right animate-delay-300">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&auto=format"
                  alt="Servicios de limpieza profesional - Smart Clean especializada en limpieza integral"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-smartclean-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación y Contacto */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-smartclean-secondary animate-fade-in">
              Nuestra Ubicación
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Ubicados estratégicamente en Valencia para dar servicio a toda la Comunidad Valenciana
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-smartclean-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-smartclean-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Dirección</h3>
                  <p className="text-gray-600">Calle Josep Meliá Pigmalión 21 C 5<br />46180 Benaguasil, Valencia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-smartclean-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-smartclean-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Teléfono</h3>
                  <a href="tel:+34691616465" className="text-smartclean-primary hover:text-smartclean-secondary transition-colors">
                    +34 691 616 465
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-smartclean-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-smartclean-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Email</h3>
                  <a href="mailto:info@limpiezassmartclean.com" className="text-smartclean-primary hover:text-smartclean-secondary transition-colors">
                    info@limpiezassmartclean.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 text-center animate-scale-in animate-delay-300">
              <Calendar className="w-16 h-16 text-smartclean-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary">Horario de Atención</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Lunes a Viernes:</strong> 07:00 - 20:00</p>
                <p><strong>Sábados:</strong> 08:00 - 14:00</p>
                <p><strong>Domingos:</strong> Servicios programados</p>
              </div>
              <p className="text-sm text-smartclean-primary mt-4 font-semibold">
                Servicio de limpieza 24h disponible
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

