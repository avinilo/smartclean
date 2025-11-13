import { Sparkles, CheckCircle, AlertCircle, Clock, Shield, Building } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Limpieza de Comunidades Valencia - Servicio Profesional | Smart Clean',
  description: 'Especialistas en limpieza de comunidades de vecinos en Valencia. Servicio profesional, flexible y garantizado. Presupuesto sin compromiso.',
  keywords: [
    'limpieza comunidades Valencia',
    'limpieza comunidades vecinos',
    'servicio limpieza edificios Valencia',
    'limpieza escaleras comunidades',
    'limpieza zonas comunes',
    'empresa limpieza comunidades Valencia',
    'mantenimiento comunidades',
    'limpieza portal edificios',
    'limpieza ascensores comunidades'
  ],
  openGraph: {
    title: 'Limpieza de Comunidades Valencia - Servicio Profesional | Smart Clean',
    description: 'Especialistas en limpieza de comunidades de vecinos en Valencia. Servicio profesional, flexible y garantizado.',
    type: 'website',
    locale: 'es_ES',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Limpieza de comunidades Valencia'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limpieza de Comunidades Valencia - Servicio Profesional',
    description: 'Especialistas en limpieza de comunidades de vecinos en Valencia.',
    images: ['/og-image.png']
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function LimpiezaComunidadesPage() {
  const breadcrumbItems = [
    { name: 'Limpieza de Comunidades' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&auto=format"
            alt="Comunidad de vecinos limpia"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Limpieza de Comunidades Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">Servicio profesional para comunidades de vecinos</p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up animate-delay-500">
              Mantenemos su comunidad en condiciones óptimas de limpieza y higiene
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
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary animate-fade-in">Su socio en limpieza de comunidades Valencia</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                La limpieza de comunidades de vecinos requiere especial atención y cuidado. En Smart Clean entendemos que cada comunidad es única y necesita un servicio adaptado a sus necesidades específicas. Con más de 10 años de experiencia en Valencia, garantizamos un servicio profesional y confiable.
              </p>

              <div className="bg-red-50 border-l-4 border-smartclean-primary p-6 mb-8 animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-smartclean-secondary">Los riesgos de una limpieza deficiente en comunidades</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Mala imagen para residentes y visitantes</li>
                      <li>• Problemas de higiene y salubridad</li>
                      <li>• Desgaste prematuro de zonas comunes</li>
                      <li>• Quejas constantes de vecinos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary animate-slide-left animate-delay-600">Nuestra misión: mantener su comunidad impecable</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in animate-delay-800">
                Somos especialistas en limpieza de comunidades con los conocimientos y equipos necesarios para mantener zonas comunes en condiciones óptimas de higiene, creando un ambiente agradable para todos los residentes.
              </p>
            </div>

            <div className="bg-smartclean-light rounded-2xl p-8 mb-12 border border-smartclean-primary/20 animate-fade-in animate-delay-1000">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary animate-slide-left animate-delay-1200">Servicios de limpieza para comunidades</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3 animate-slide-up animate-delay-1400">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Portales y Entradas</h4>
                    <p className="text-sm text-gray-600">Limpieza diaria de portales, puertas de entrada y zonas de acceso principal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1500">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Escaleras y Pasillos</h4>
                    <p className="text-sm text-gray-600">Mantenimiento de escaleras, pasillos y zonas de tránsito común</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1600">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Ascensores</h4>
                    <p className="text-sm text-gray-600">Limpieza y desinfección de cabinas de ascensores y botoneras</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1700">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Zonas Comunes</h4>
                    <p className="text-sm text-gray-600">Mantenimiento de salones comunitarios, terrazas y zonas recreativas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1800">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Garajes Comunitarios</h4>
                    <p className="text-sm text-gray-600">Limpieza de zonas de garaje, trasteros y áreas de almacenamiento</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1900">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Control de Calidad</h4>
                    <p className="text-sm text-gray-600">Supervisión periódica y hojas de firma para control del servicio</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl animate-scale-in animate-delay-2000">
                <h4 className="font-semibold mb-3 text-smartclean-secondary">Frecuencias adaptadas a sus necesidades:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-smartclean-primary" />
                    <span>Diario</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-smartclean-primary" />
                    <span>Semanal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-smartclean-primary" />
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
                    <p className="text-lg">Nos adaptamos a las necesidades de su comunidad. Horarios diarios, semanales o quincenales según sus preferencias.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-secondary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2400">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Seguridad garantizada</h3>
                    <p className="text-lg">Personal cualificado y fijo para su comunidad. Supervisión y control de calidad incluidos en el servicio.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fade-in animate-delay-2600">
              <h3 className="text-3xl font-bold mb-4 text-smartclean-secondary animate-bounce-in animate-delay-2800">Limpieza que respeta su comunidad</h3>
              <p className="text-2xl text-smartclean-primary font-semibold mb-4 animate-slide-up animate-delay-3000">Garantizamos satisfacción</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in animate-delay-3200">
                Nuestro enfoque es simple: limpieza profesional para comunidades, respetando el entorno y las necesidades de todos los vecinos. Sin complicaciones, solo resultados impecables.
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
              <h2 className="text-4xl font-bold mb-4 text-smartclean-secondary animate-bounce-in">Solicite su plan de limpieza para comunidades</h2>
              <p className="text-xl text-gray-600 animate-fade-in animate-delay-200">
                Contacte con nosotros y mantenga su comunidad en perfectas condiciones
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

