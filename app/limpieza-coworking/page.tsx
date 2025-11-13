import { Sparkles, CheckCircle, AlertCircle, Clock, Shield, Users } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Limpieza de Coworking Valencia - Servicio Profesional | Smart Clean',
  description: 'Especialistas en limpieza de espacios coworking en Valencia. Servicio profesional que mantiene espacios colaborativos limpios y productivos. Presupuesto sin compromiso.',
  keywords: [
    'limpieza coworking Valencia',
    'limpieza espacios colaborativos',
    'limpieza oficinas compartidas',
    'limpieza espacios trabajo compartido',
    'servicio limpieza coworking',
    'empresa limpieza coworking Valencia',
    'limpieza salas reuniones coworking',
    'limpieza zonas comunes coworking',
    'higiene espacios coworking',
    'limpieza hot desk Valencia'
  ],
  openGraph: {
    title: 'Limpieza de Coworking Valencia - Servicio Profesional | Smart Clean',
    description: 'Especialistas en limpieza de espacios coworking en Valencia. Mantenemos espacios colaborativos limpios y productivos.',
    type: 'website',
    locale: 'es_ES',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Limpieza de coworking Valencia'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limpieza de Coworking Valencia - Servicio Profesional',
    description: 'Especialistas en limpieza de espacios coworking en Valencia.',
    images: ['/og-image.png']
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function LimpiezaCoworkingPage() {
  const breadcrumbItems = [
    { name: 'Limpieza de Coworking' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&auto=format"
            alt="Espacio coworking limpio"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Limpieza de Coworking Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">Servicio profesional para espacios colaborativos</p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up animate-delay-500">
              Mantenemos espacios coworking limpios y productivos
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
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary animate-fade-in">Su socio en limpieza de coworking Valencia</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                Cada vez más empresas están eligiendo adoptar un enfoque colaborativo al compartir espacios de trabajo con otras compañías. A pesar de sus beneficios, uno de los desafíos que enfrentan las empresas que comparten estos espacios es mantenerlos en un estado de limpieza y conservación óptimos.
              </p>

              <div className="bg-red-50 border-l-4 border-smartclean-primary p-6 mb-8 animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-smartclean-secondary">Los riesgos de una limpieza deficiente en coworking</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Mala impresión para empresas y clientes</li>
                      <li>• Reducción de la productividad de los coworkers</li>
                      <li>• Proliferación de gérmenes entre usuarios compartidos</li>
                      <li>• Deterioro del espacio colaborativo</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary animate-slide-left animate-delay-600">Nuestra misión: mantener espacios coworking impecables</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in animate-delay-800">
                Somos especialistas en limpieza de espacios coworking con los conocimientos y equipos necesarios para mantener oficinas compartidas, salas de reuniones y zonas comunes en condiciones óptimas de higiene, creando un entorno productivo para todos los usuarios.
              </p>
            </div>

            <div className="bg-smartclean-light rounded-2xl p-8 mb-12 border border-smartclean-primary/20 animate-fade-in animate-delay-1000">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary animate-slide-left animate-delay-1200">Servicios de limpieza para coworking</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3 animate-slide-up animate-delay-1400">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Zonas de Trabajo</h4>
                    <p className="text-sm text-gray-600">Limpieza de hot desks, oficinas privadas y zonas de trabajo compartidas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1500">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Salas de Reuniones</h4>
                    <p className="text-sm text-gray-600">Mantenimiento de salas de reuniones, equipos audiovisuales y pizarras</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1600">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Zonas Comunes</h4>
                    <p className="text-sm text-gray-600">Limpieza de cafeterías, zonas de descanso y espacios de networking</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1700">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Baños</h4>
                    <p className="text-sm text-gray-600">Desinfección y mantenimiento de baños compartidos con alta frecuencia de uso</p>
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
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Desinfección de Superficies</h4>
                    <p className="text-sm text-gray-600">Tratamiento antibacteriano de superficies de alto contacto compartidas</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl animate-scale-in animate-delay-2000">
                <h4 className="font-semibold mb-3 text-smartclean-secondary">Espacios que atendemos:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-smartclean-primary" />
                    <span>Hot desks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-smartclean-primary" />
                    <span>Oficinas privadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-smartclean-primary" />
                    <span>Zonas de networking</span>
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
                    <p className="text-lg">Nos adaptamos a los horarios de su coworking para no interferir con las actividades de los usuarios.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-secondary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2400">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Colaboración garantizada</h3>
                    <p className="text-lg">Entendemos la dinámica de espacios compartidos y respetamos la privacidad de todos los usuarios.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fade-in animate-delay-2600">
              <h3 className="text-3xl font-bold mb-4 text-smartclean-secondary animate-bounce-in animate-delay-2800">Limpieza que fomenta la colaboración</h3>
              <p className="text-2xl text-smartclean-primary font-semibold mb-4 animate-slide-up animate-delay-3000">Garantizamos espacios productivos</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in animate-delay-3200">
                Nuestro enfoque es simple: limpieza profesional de espacios coworking que mantiene entornos colaborativos limpios y productivos para todos los usuarios.
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
              <h2 className="text-4xl font-bold mb-4 text-smartclean-secondary animate-bounce-in">Solicite su plan de limpieza para coworking</h2>
              <p className="text-xl text-gray-600 animate-fade-in animate-delay-200">
                Contacte con nosotros y mantenga su espacio colaborativo en perfectas condiciones
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

