import { Sparkles, CheckCircle, AlertCircle, Clock, Shield, Dumbbell } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Limpieza de Gimnasios Valencia - Servicio Profesional | Smart Clean',
  description: 'Especialistas en limpieza de gimnasios en Valencia. Servicio profesional que mantiene instalaciones deportivas limpias y saludables. Presupuesto sin compromiso.',
  keywords: [
    'limpieza gimnasios Valencia',
    'limpieza instalaciones deportivas',
    'limpieza centros deportivos Valencia',
    'limpieza salas fitness',
    'limpieza vestuarios gimnasio',
    'servicio limpieza gimnasios',
    'empresa limpieza gimnasios Valencia',
    'higiene gimnasios',
    'limpieza máquinas fitness',
    'limpieza saunas Valencia'
  ],
  openGraph: {
    title: 'Limpieza de Gimnasios Valencia - Servicio Profesional | Smart Clean',
    description: 'Especialistas en limpieza de gimnasios en Valencia. Mantenemos instalaciones deportivas limpias y saludables.',
    type: 'website',
    locale: 'es_ES',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Limpieza de gimnasios Valencia'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limpieza de Gimnasios Valencia - Servicio Profesional',
    description: 'Especialistas en limpieza de gimnasios en Valencia.',
    images: ['/og-image.png']
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function LimpiezaGimnasiosPage() {
  const breadcrumbItems = [
    { name: 'Limpieza de Gimnasios' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&auto=format"
            alt="Gimnasio limpio y ordenado"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Limpieza de Gimnasios Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">Servicio profesional para instalaciones deportivas</p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up animate-delay-500">
              Mantenemos sus instalaciones deportivas en condiciones óptimas de higiene
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
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary animate-fade-in">Su socio en limpieza de gimnasios Valencia</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                Mantener las instalaciones deportivas limpias y en óptimo estado es fundamental para crear un ambiente agradable y saludable, ya sea en un entorno de trabajo o de ocio. En Smart Clean nos especializamos en el mantenimiento de superficies de todo tipo para garantizar que se mantengan en condiciones óptimas.
              </p>

              <div className="bg-red-50 border-l-4 border-smartclean-primary p-6 mb-8 animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-smartclean-secondary">Los riesgos de una limpieza deficiente en gimnasios</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Propagación de bacterias y gérmenes entre usuarios</li>
                      <li>• Mala imagen que afecta a la clientela</li>
                      <li>• Reducción de la vida útil del equipamiento</li>
                      <li>• Riesgos de salud para usuarios y empleados</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary animate-slide-left animate-delay-600">Nuestra misión: mantener su gimnasio impecable</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in animate-delay-800">
                Somos especialistas en limpieza de gimnasios con los conocimientos y equipos necesarios para mantener salas de fitness, vestuarios, saunas y zonas comunes en condiciones óptimas de higiene, creando un entorno saludable para el ejercicio.
              </p>
            </div>

            <div className="bg-smartclean-light rounded-2xl p-8 mb-12 border border-smartclean-primary/20 animate-fade-in animate-delay-1000">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary animate-slide-left animate-delay-1200">Servicios de limpieza para gimnasios</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3 animate-slide-up animate-delay-1400">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Salas de Fitness</h4>
                    <p className="text-sm text-gray-600">Limpieza y desinfección de máquinas, pesas y equipos de ejercicio</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1500">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Vestuarios</h4>
                    <p className="text-sm text-gray-600">Desinfección profunda de vestuarios, duchas y taquillas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1600">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Saunas y Spas</h4>
                    <p className="text-sm text-gray-600">Mantenimiento especializado de zonas de sauna, jacuzzi y spa</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1700">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Zonas Comunes</h4>
                    <p className="text-sm text-gray-600">Mantenimiento de recepciones, pasillos y zonas de descanso</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1800">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Suelos</h4>
                    <p className="text-sm text-gray-600">Tratamiento especializado de suelos deportivos y zonas húmedas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1900">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Desinfección Especial</h4>
                    <p className="text-sm text-gray-600">Tratamiento antibacteriano de zonas de alto contacto</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl animate-scale-in animate-delay-2000">
                <h4 className="font-semibold mb-3 text-smartclean-secondary">Priorizamos la mejora de la productividad:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="w-5 h-5 text-smartclean-primary" />
                    <span>Uso eficiente del tiempo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dumbbell className="w-5 h-5 text-smartclean-primary" />
                    <span>Equipos ergonómicos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dumbbell className="w-5 h-5 text-smartclean-primary" />
                    <span>Resultados medibles</span>
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
                    <p className="text-lg">Nos adaptamos a los horarios de su gimnasio para no interferir con las actividades de los socios.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-secondary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2400">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Higiene garantizada</h3>
                    <p className="text-lg">Utilizamos productos certificados y seguimos protocolos de desinfección específicos para instalaciones deportivas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fade-in animate-delay-2600">
              <h3 className="text-3xl font-bold mb-4 text-smartclean-secondary animate-bounce-in animate-delay-2800">Limpieza que potencia el rendimiento</h3>
              <p className="text-2xl text-smartclean-primary font-semibold mb-4 animate-slide-up animate-delay-3000">Garantizamos entornos saludables</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in animate-delay-3200">
                Nuestro enfoque es simple: limpieza profesional de gimnasios que mantiene instalaciones deportivas limpias y saludables, creando el ambiente perfecto para el ejercicio.
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
              <h2 className="text-4xl font-bold mb-4 text-smartclean-secondary animate-bounce-in">Solicite su plan de limpieza para gimnasios</h2>
              <p className="text-xl text-gray-600 animate-fade-in animate-delay-200">
                Contacte con nosotros y mantenga su gimnasio en perfectas condiciones
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

