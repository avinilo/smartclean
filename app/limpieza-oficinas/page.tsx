import { Sparkles, CheckCircle, AlertCircle, Clock, Shield, Briefcase } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Limpieza de Oficinas Valencia - Servicio Profesional | Smart Clean',
  description: 'Especialistas en limpieza de oficinas en Valencia. Servicio profesional que proyecta imagen de confianza y organización. Presupuesto sin compromiso.',
  keywords: [
    'limpieza oficinas Valencia',
    'limpieza despachos Valencia',
    'limpieza empresas Valencia',
    'servicio limpieza oficinas',
    'empresa limpieza oficinas Valencia',
    'limpieza zonas trabajo',
    'limpieza salas reuniones',
    'limpieza centros trabajo',
    'higiene oficinas Valencia'
  ],
  openGraph: {
    title: 'Limpieza de Oficinas Valencia - Servicio Profesional | Smart Clean',
    description: 'Especialistas en limpieza de oficinas en Valencia. Servicio profesional que proyecta imagen de confianza.',
    type: 'website',
    locale: 'es_ES',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Limpieza de oficinas Valencia'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limpieza de Oficinas Valencia - Servicio Profesional',
    description: 'Especialistas en limpieza de oficinas en Valencia.',
    images: ['/og-image.png']
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function LimpiezaOficinasPage() {
  const breadcrumbItems = [
    { name: 'Limpieza de Oficinas' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&auto=format"
            alt="Oficina limpia y organizada"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Limpieza de Oficinas Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">Servicio profesional para centros de trabajo</p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up animate-delay-500">
              Creamos ambientes de trabajo limpios y productivos
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

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary animate-fade-in">Su socio en limpieza de oficinas Valencia</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                La importancia de mantener una oficina limpia y ordenada no puede subestimarse. Más allá de su aspecto estético, la limpieza de una oficina es fundamental para reflejar el compromiso de una empresa tanto con sus empleados como con sus visitantes, proyectando una imagen de confianza y organización.
              </p>

              <div className="bg-red-50 border-l-4 border-smartclean-primary p-6 mb-8 animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-smartclean-secondary">Los riesgos de una limpieza deficiente en oficinas</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Mala imagen corporativa ante clientes y proveedores</li>
                      <li>• Reducción de la productividad de los empleados</li>
                      <li>• Proliferación de gérmenes y enfermedades</li>
                      <li>• Ambiente de trabajo poco saludable</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary animate-slide-left animate-delay-600">Nuestra misión: crear ambientes de trabajo impecables</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in animate-delay-800">
                Somos especialistas en limpieza de oficinas con los conocimientos y equipos necesarios para mantener cada detalle de su empresa limpio, creando un ambiente propicio para que los empleados trabajen de manera cómoda y concentrada.
              </p>
            </div>

            <div className="bg-smartclean-light rounded-2xl p-8 mb-12 border border-smartclean-primary/20 animate-fade-in animate-delay-1000">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary animate-slide-left animate-delay-1200">Servicios de limpieza para oficinas</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3 animate-slide-up animate-delay-1400">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Zonas de Trabajo</h4>
                    <p className="text-sm text-gray-600">Limpieza de escritorios, sillas, ordenadores y equipos de oficina</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1500">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Salas de Reuniones</h4>
                    <p className="text-sm text-gray-600">Mantenimiento de salas de reuniones, mesas y equipos audiovisuales</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1600">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Zonas Comunes</h4>
                    <p className="text-sm text-gray-600">Limpieza de recepciones, pasillos y zonas de descanso</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1700">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Baños</h4>
                    <p className="text-sm text-gray-600">Desinfección y mantenimiento de baños con productos certificados</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1800">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Cristales</h4>
                    <p className="text-sm text-gray-600">Limpieza de ventanas, mamparas y cristales interiores</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1900">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Suelos</h4>
                    <p className="text-sm text-gray-600">Mantenimiento de todo tipo de suelos: parquet, moqueta, tarima</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl animate-scale-in animate-delay-2000">
                <h4 className="font-semibold mb-3 text-smartclean-secondary">Frecuencias adaptadas a sus necesidades:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-smartclean-primary" />
                    <span>Diario</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-smartclean-primary" />
                    <span>Semanal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-smartclean-primary" />
                    <span>Quincenal</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-smartclean-primary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2200">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Servicio flexible</h3>
                    <p className="text-lg">Nos adaptamos a sus horarios de oficina para no interferir con sus operaciones diarias.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-secondary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2400">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Discreción garantizada</h3>
                    <p className="text-lg">Personal cualificado que respeta la confidencialidad y el entorno de trabajo de su empresa.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fade-in animate-delay-2600">
              <h3 className="text-3xl font-bold mb-4 text-smartclean-secondary animate-bounce-in animate-delay-2800">Limpieza que proyecta profesionalidad</h3>
              <p className="text-2xl text-smartclean-primary font-semibold mb-4 animate-slide-up animate-delay-3000">Garantizamos imagen impecable</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in animate-delay-3200">
                Nuestro enfoque es simple: limpieza profesional de oficinas que proyecta imagen de confianza y organización, creando ambientes de trabajo productivos y saludables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-smartclean-secondary animate-bounce-in">Solicite su plan de limpieza para oficinas</h2>
              <p className="text-xl text-gray-600 animate-fade-in animate-delay-200">
                Contacte con nosotros y proyecte la mejor imagen de su empresa
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover-lift animate-scale-in animate-delay-400">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
