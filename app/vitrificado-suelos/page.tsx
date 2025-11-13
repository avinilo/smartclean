import { Sparkles, CheckCircle, AlertCircle, Clock, Shield, Sparkle } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Vitrificado de Suelos Valencia - Servicio Profesional | Smart Clean',
  description: 'Especialistas en vitrificado y abrillantado de suelos en Valencia. Servicio profesional que restaura el brillo original de sus suelos. Presupuesto sin compromiso.',
  keywords: [
    'vitrificado suelos Valencia',
    'abrillantado suelos Valencia',
    'pulido suelos Valencia',
    'restauración suelos Valencia',
    'vitrificado suelos comunidades',
    'vitrificado suelos comerciales',
    'servicio vitrificado suelos',
    'empresa vitrificado suelos Valencia',
    'pulido cristalino suelos',
    'abrillantado suelos Valencia'
  ],
  openGraph: {
    title: 'Vitrificado de Suelos Valencia - Servicio Profesional | Smart Clean',
    description: 'Especialistas en vitrificado y abrillantado de suelos en Valencia. Restauramos el brillo original de sus suelos.',
    type: 'website',
    locale: 'es_ES',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Vitrificado de suelos Valencia'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitrificado de Suelos Valencia - Servicio Profesional',
    description: 'Especialistas en vitrificado y abrillantado de suelos en Valencia.',
    images: ['/og-image.png']
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function VitrificadoSuelosPage() {
  const breadcrumbItems = [
    { name: 'Vitrificado de Suelos' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&auto=format"
            alt="Suelo vitrificado brillante"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Vitrificado de Suelos Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">Servicio profesional de abrillantado y restauración</p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up animate-delay-500">
              Restauramos el brillo original de sus suelos
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
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary animate-fade-in">Su socio en vitrificado de suelos Valencia</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                Los suelos están sometidos a un desgaste constante debido al uso diario. A pesar de llevar a cabo una limpieza regular de mantenimiento, es inevitable que, con el tiempo, ciertos tratamientos específicos como el pulido de suelos, el decapado y el abrillantado sean necesarios.
              </p>

              <div className="bg-red-50 border-l-4 border-smartclean-primary p-6 mb-8 animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-smartclean-secondary">Los riesgos de no vitrificar los suelos</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Pérdida del brillo original del suelo</li>
                      <li>• Daños y manchas permanentes en la superficie</li>
                      <li>• Desgaste acelerado del material</li>
                      <li>• Mala imagen para clientes y visitantes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary animate-slide-left animate-delay-600">Nuestra misión: restaurar la belleza de sus suelos</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-fade-in animate-delay-800">
                Somos especialistas en vitrificado de suelos con los conocimientos y equipos necesarios para restaurar la belleza de sus suelos, eliminando daños y manchas y devolviendo su brillo original.
              </p>
            </div>

            <div className="bg-smartclean-light rounded-2xl p-8 mb-12 border border-smartclean-primary/20 animate-fade-in animate-delay-1000">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary animate-slide-left animate-delay-1200">Servicios de vitrificado de suelos</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3 animate-slide-up animate-delay-1400">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Pulido de Suelos</h4>
                    <p className="text-sm text-gray-600">Pulido profesional que elimina rayones y restaura la superficie</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1500">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Decapado de Suelos</h4>
                    <p className="text-sm text-gray-600">Eliminación de capas dañadas y preparación para el tratamiento</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1600">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Abrillantado de Suelos</h4>
                    <p className="text-sm text-gray-600">Aplicación de tratamiento que devuelve el brillo y protege</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1700">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Vitrificado Cristalino</h4>
                    <p className="text-sm text-gray-600">Tratamiento avanzado que crea un acabado cristalino duradero</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1800">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Tratamiento de Manchas</h4>
                    <p className="text-sm text-gray-600">Eliminación de manchas difíciles y daños localizados</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 animate-slide-up animate-delay-1900">
                  <CheckCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-smartclean-secondary">Protección de Suelos</h4>
                    <p className="text-sm text-gray-600">Aplicación de protectores que previenen futuros daños</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl animate-scale-in animate-delay-2000">
                <h4 className="font-semibold mb-3 text-smartclean-secondary">Tipos de suelos que tratamos:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Sparkle className="w-5 h-5 text-smartclean-primary" />
                    <span>Mármol</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkle className="w-5 h-5 text-smartclean-primary" />
                    <span>Terrazo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkle className="w-5 h-5 text-smartclean-primary" />
                    <span>Mortero</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-smartclean-primary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2200">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Servicio duradero</h3>
                    <p className="text-lg">El vitrificado protege sus suelos por más tiempo, reduciendo la necesidad de mantenimiento frecuente.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-secondary text-white p-8 rounded-2xl hover-lift animate-scale-in animate-delay-2400">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Acabado perfecto</h3>
                    <p className="text-lg">Garantizamos un acabado cristalino que mejora la estética y facilita la limpieza diaria.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center animate-fade-in animate-delay-2600">
              <h3 className="text-3xl font-bold mb-4 text-smartclean-secondary animate-bounce-in animate-delay-2800">Vitrificado que revitaliza sus suelos</h3>
              <p className="text-2xl text-smartclean-primary font-semibold mb-4 animate-slide-up animate-delay-3000">Garantizamos suelos como nuevos</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in animate-delay-3200">
                Nuestro enfoque es simple: vitrificado profesional que restaura la belleza de sus suelos, eliminando daños y devolviendo su brillo original.
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
              <h2 className="text-4xl font-bold mb-4 text-smartclean-secondary animate-bounce-in">Solicite su servicio de vitrificado de suelos</h2>
              <p className="text-xl text-gray-600 animate-fade-in animate-delay-200">
                Contacte con nosotros y devuelva la belleza a sus suelos
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

