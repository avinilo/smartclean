import { Sparkles, CheckCircle, AlertCircle, Clock, Shield, Car } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Limpieza de Garajes Comunitarios Valencia - Servicio Profesional | Smart Clean',
  description: 'Especialistas en limpieza de garajes comunitarios en Valencia. Servicio profesional, seguimiento periódico y mantenimiento preventivo. Presupuesto sin compromiso.',
  keywords: [
    'limpieza garajes Valencia',
    'limpieza garajes comunitarios',
    'limpieza parkings comunidades',
    'servicio limpieza garajes',
    'mantenimiento garajes comunitarios',
    'empresa limpieza garajes Valencia',
    'limpieza trasteros comunidades',
    'limpieza zonas garaje edificios',
    'limpieza parkings subterráneos'
  ],
  openGraph: {
    title: 'Limpieza de Garajes Comunitarios Valencia - Servicio Profesional | Smart Clean',
    description: 'Especialistas en limpieza de garajes comunitarios en Valencia. Servicio profesional con seguimiento periódico.',
    type: 'website',
    locale: 'es_ES',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Limpieza de garajes comunitarios Valencia'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limpieza de Garajes Comunitarios Valencia - Servicio Profesional',
    description: 'Especialistas en limpieza de garajes comunitarios en Valencia.',
    images: ['/og-image.png']
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function LimpiezaGarajesPage() {
  const breadcrumbItems = [
    { name: 'Limpieza de Garajes Comunitarios' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&auto=format"
            alt="Garaje comunitario limpio"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Limpieza de Garajes Comunitarios Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">Servicio profesional para garajes y parkings</p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up animate-delay-500">
              Mantenemos sus garajes en condiciones óptimas de limpieza y seguridad
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
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary animate-fade-in">Su socio en limpieza de garajes Valencia</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                La limpieza de garajes comunitarios es fundamental para mantener la seguridad y prolongar la vida útil de las instalaciones. En Smart Clean ofrecemos servicios de limpieza con seguimiento periódico para garantizar la calidad del trabajo realizado.
              </p>

              <div className="bg-red-50 border-l-4 border-smartclean-primary p-6 mb-8 animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-smartclean-secondary">Los riesgos de una limpieza deficiente en garajes</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Acumulación de suciedad difícil de eliminar con el tiempo</li>
                      <li>• Problemas de seguridad por falta de visibilidad</li>
                      <li>• Desgaste prematuro del pavimento</li>
                      <li>• Mala imagen para residentes y visitantes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary animate-slide-left animate-delay-600">Nuestra misión: mantener sus garajes impecables</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in animate-delay-800">
                Somos especialistas en limpieza de garajes comunitarios con los conocimientos y equipos necesarios para mantener sus instalaciones en condiciones óptimas, previniendo la acumulación de suciedad y garantizando un entorno seguro.
              </p>
            </div>

            <div className="bg-smartclean-light rounded-2xl p-8 mb-12 border border-smartclean-primary/20 animate-fade-in animate-delay-1000">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary animate-slide-left animate-delay-1200">Servicios de limpieza para garajes</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3 animate-slide-up animate-delay-1400">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Pavimentos</h4>
                    <p className="text-sm text-gray-600">Limpieza profunda de suelos de garaje, eliminación de manchas de aceite y grasa</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1500">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Zonas de Tráfico</h4>
                    <p className="text-sm text-gray-600">Mantenimiento de zonas de circulación de vehículos y peatonal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1600">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Trasteros</h4>
                    <p className="text-sm text-gray-600">Limpieza de zonas de trasteros y áreas de almacenamiento comunitarios</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1700">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Rampas</h4>
                    <p className="text-sm text-gray-600">Mantenimiento de rampas de acceso y zonas de entrada/salida</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1800">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Eliminación de Polvo</h4>
                    <p className="text-sm text-gray-600">Eliminación de polvo y partículas en zonas de difícil acceso</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1900">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Control de Calidad</h4>
                    <p className="text-sm text-gray-600">Seguimiento periódico y evaluación del estado de limpieza</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl animate-scale-in animate-delay-2000">
                <h4 className="font-semibold mb-3 text-smartclean-secondary">Frecuencias recomendadas:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-smartclean-primary" />
                    <span>Semanal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-smartclean-primary" />
                    <span>Quincenal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-smartclean-primary" />
                    <span>Mensual</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-smartclean-primary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2200">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Servicio preventivo</h3>
                    <p className="text-lg">Evaluamos la frecuencia del mantenimiento para evitar gastos significativos en limpiezas completas del área.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-secondary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2400">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Seguimiento garantizado</h3>
                    <p className="text-lg">Servicios de seguimiento periódico para garantizar la calidad del trabajo realizado en sus instalaciones.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fade-in animate-delay-2600">
              <h3 className="text-3xl font-bold mb-4 text-smartclean-secondary animate-bounce-in animate-delay-2800">Limpieza que protege su inversión</h3>
              <p className="text-2xl text-smartclean-primary font-semibold mb-4 animate-slide-up animate-delay-3000">Garantizamos mantenimiento preventivo</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in animate-delay-3200">
                Nuestro enfoque es simple: limpieza profesional de garajes con seguimiento periódico, previniendo la acumulación de suciedad y protegiendo sus instalaciones.
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
              <h2 className="text-4xl font-bold mb-4 text-smartclean-secondary animate-bounce-in">Solicite su plan de limpieza para garajes</h2>
              <p className="text-xl text-gray-600 animate-fade-in animate-delay-200">
                Contacte con nosotros y mantenga sus garajes en perfectas condiciones
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

