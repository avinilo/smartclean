import { Sparkles, CheckCircle, AlertCircle, Clock, Shield, Wrench } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Limpieza de Talleres y Concesionarios Valencia - Servicio Profesional | Smart Clean',
  description: 'Especialistas en limpieza de talleres y concesionarios en Valencia. Servicio profesional adaptado a las exigencias del entorno. Presupuesto sin compromiso.',
  keywords: [
    'limpieza talleres Valencia',
    'limpieza concesionarios Valencia',
    'limpieza talleres mecánicos',
    'limpieza salas exposición coches',
    'limpieza talleres automoción',
    'servicio limpieza talleres',
    'empresa limpieza talleres Valencia',
    'limpieza oficinas concesionarios',
    'limpieza instalaciones automoción',
    'higiene talleres Valencia'
  ],
  openGraph: {
    title: 'Limpieza de Talleres y Concesionarios Valencia - Servicio Profesional | Smart Clean',
    description: 'Especialistas en limpieza de talleres y concesionarios en Valencia. Servicio adaptado a las exigencias del entorno.',
    type: 'website',
    locale: 'es_ES',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Limpieza de talleres y concesionarios Valencia'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limpieza de Talleres y Concesionarios Valencia - Servicio Profesional',
    description: 'Especialistas en limpieza de talleres y concesionarios en Valencia.',
    images: ['/og-image.png']
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function LimpiezaTalleresPage() {
  const breadcrumbItems = [
    { name: 'Limpieza de Talleres y Concesionarios' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&h=1080&fit=crop&auto=format"
            alt="Taller mecánico limpio"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Limpieza de Talleres y Concesionarios Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">Servicio profesional para el sector automoción</p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up animate-delay-500">
              Mantenemos sus instalaciones en condiciones óptimas de limpieza y presentación
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
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary animate-fade-in">Su socio en limpieza de talleres y concesionarios Valencia</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                En el caso de los concesionarios, mantener una imagen impecable es esencial, cumpliendo con las expectativas de cualquier establecimiento comercial. Por otro lado, en los talleres mecánicos, la tarea se complica debido al uso de maquinaria especializada y la necesidad de contar con personal experimentado en este entorno.
              </p>

              <div className="bg-red-50 border-l-4 border-smartclean-primary p-6 mb-8 animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-smartclean-secondary">Los riesgos de una limpieza deficiente en talleres y concesionarios</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Mala imagen que afecta a la clientela y ventas</li>
                      <li>• Problemas de seguridad por acumulación de residuos</li>
                      <li>• Desgaste prematuro de instalaciones y equipos</li>
                      <li>• Incumplimiento de normativas de higiene industrial</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary animate-slide-left animate-delay-600">Nuestra misión: mantener sus instalaciones impecables</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in animate-delay-800">
                Somos conscientes de estas exigencias y, en base a ellas, hemos perfeccionado a lo largo de los años nuestro servicio de limpieza para concesionarios y talleres, ganándonos la satisfacción de un creciente número de clientes en el sector automoción.
              </p>
            </div>

            <div className="bg-smartclean-light rounded-2xl p-8 mb-12 border border-smartclean-primary/20 animate-fade-in animate-delay-1000">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary animate-slide-left animate-delay-1200">Servicios de limpieza para talleres y concesionarios</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3 animate-slide-up animate-delay-1400">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Salas de Exposición</h4>
                    <p className="text-sm text-gray-600">Mantenimiento impecable de salas de exposición y vehículos en exhibición</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1500">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Talleres Mecánicos</h4>
                    <p className="text-sm text-gray-600">Limpieza especializada adaptada al entorno de taller con maquinaria pesada</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1600">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Oficinas</h4>
                    <p className="text-sm text-gray-600">Mantenimiento de oficinas administrativas y zonas de atención al cliente</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1700">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Baños</h4>
                    <p className="text-sm text-gray-600">Desinfección y mantenimiento de baños para clientes y personal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1800">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Limpieza de Zonas Exteriores</h4>
                    <p className="text-sm text-gray-600">Mantenimiento de zonas de aparcamiento y accesos al establecimiento</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1900">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Eliminación de Residuos</h4>
                    <p className="text-sm text-gray-600">Gestión de residuos específicos del sector automoción de forma segura</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl animate-scale-in animate-delay-2000">
                <h4 className="font-semibold mb-3 text-smartclean-secondary">Adaptación al tamaño del lugar:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-smartclean-primary" />
                    <span>Pequeños talleres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-smartclean-primary" />
                    <span>Concesionarios medianos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-smartclean-primary" />
                    <span>Grandes instalaciones</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-smartclean-primary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2200">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Servicio adaptado</h3>
                    <p className="text-lg">Nos adaptamos al tamaño de su instalación y aseguramos que vehículos e instalaciones se mantengan en perfecto estado.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-secondary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2400">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Experiencia garantizada</h3>
                    <p className="text-lg">Personal experimentado en el entorno automoción que entiende las exigencias específicas del sector.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fade-in animate-delay-2600">
              <h3 className="text-3xl font-bold mb-4 text-smartclean-secondary animate-bounce-in animate-delay-2800">Limpieza que impulsa su negocio</h3>
              <p className="text-2xl text-smartclean-primary font-semibold mb-4 animate-slide-up animate-delay-3000">Garantizamos imagen impecable</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in animate-delay-3200">
                Nuestro enfoque es simple: limpieza profesional para talleres y concesionarios que mantiene su imagen impecable y sus instalaciones en perfecto estado, ganándose la satisfacción de sus clientes.
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
              <h2 className="text-4xl font-bold mb-4 text-smartclean-secondary animate-bounce-in">Solicite su plan de limpieza para talleres y concesionarios</h2>
              <p className="text-xl text-gray-600 animate-fade-in animate-delay-200">
                Contacte con nosotros y mantenga sus instalaciones en perfectas condiciones
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
