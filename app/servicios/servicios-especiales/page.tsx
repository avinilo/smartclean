import { Sparkles, CheckCircle, AlertCircle, Clock, Shield, Users } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Servicios Especiales de Limpieza Valencia - Tratamientos Especializados | Smart Clean',
  description: 'Servicios especiales de limpieza: post-obra, desinfección, tratamientos de suelos y limpieza industrial en Valencia. Servicio profesional garantizado.',
  keywords: [
    'servicios especiales limpieza Valencia',
    'limpieza post obra',
    'desinfección locales',
    'tratamientos suelos Valencia',
    'limpieza industrial',
    'vitrificado parquet',
    'cristalizado mármol',
    'servicios limpieza especializada'
  ],
  openGraph: {
    title: 'Servicios Especiales de Limpieza Valencia - Tratamientos Especializados | Smart Clean',
    description: 'Servicios especiales de limpieza: post-obra, desinfección y tratamientos de suelos en Valencia.',
    type: 'website',
    locale: 'es_ES',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Servicios especiales de limpieza Valencia'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Especiales de Limpieza Valencia - Tratamientos Especializados',
    description: 'Servicios especiales de limpieza: post-obra, desinfección y tratamientos de suelos en Valencia.',
    images: ['/og-image.png']
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function ServiciosEspecialesPage() {
  const breadcrumbItems = [
    { name: 'Servicios Especiales de Limpieza' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop&auto=format"
            alt="Servicios especiales de limpieza"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Servicios Especiales de Limpieza Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">Tratamientos especializados y limpieza industrial</p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up animate-delay-500">
              Soluciones específicas para cada necesidad de limpieza profesional
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
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary animate-fade-in">Su socio en servicios especiales de limpieza Valencia</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                Algunas situaciones requieren tratamientos de limpieza especializados que van más allá de la limpieza habitual. En Smart Clean ofrecemos servicios especiales adaptados a cada necesidad: desde limpieza post-obra hasta desinfección profunda y tratamientos de suelos.
              </p>

              <div className="bg-red-50 border-l-4 border-smartclean-primary p-6 mb-8 animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-smartclean-secondary">Cuándo necesita servicios especiales de limpieza</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Después de obras o reformas</li>
                      <li>• Para desinfección y sanitización</li>
                      <li>• Tratamiento de suelos especiales</li>
                      <li>• Limpieza industrial profunda</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary animate-fade-in animate-delay-600">Nuestros servicios especiales</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-700">
                Con más de 10 años de experiencia en Valencia, contamos con la maquinaria y productos especializados necesarios para resolver cualquier tipo de necesidad de limpieza. Todos nuestros tratamientos incluyen garantía de duración.
              </p>
            </div>

            {/* Servicios específicos */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-smartclean-light/30 p-6 rounded-lg animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-smartclean-primary rounded-full p-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-smartclean-secondary">Limpieza Post-Obra</h4>
                    <p className="text-gray-700">Eliminación completa de polvo fino, restos de construcción y preparación del espacio para su ocupación.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-light/30 p-6 rounded-lg animate-fade-in animate-delay-200">
                <div className="flex items-start gap-4">
                  <div className="bg-smartclean-primary rounded-full p-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-smartclean-secondary">Desinfección y Sanitización</h4>
                    <p className="text-gray-700">Tratamientos antimicrobianos para espacios que requieren higiene máxima y eliminación de bacterias.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-light/30 p-6 rounded-lg animate-fade-in animate-delay-400">
                <div className="flex items-start gap-4">
                  <div className="bg-smartclean-primary rounded-full p-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-smartclean-secondary">Limpieza Industrial</h4>
                    <p className="text-gray-700">Servicios especializados para industrias con necesidades específicas de limpieza y maquinaria.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-light/30 p-6 rounded-lg animate-fade-in animate-delay-600">
                <div className="flex items-start gap-4">
                  <div className="bg-smartclean-primary rounded-full p-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-smartclean-secondary">Tratamientos de Suelos</h4>
                    <p className="text-gray-700">Vitrificado de parquet, cristalizado de mármol, impermeabilización y tratamientos antideslizantes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ventajas */}
            <div className="bg-gradient-to-r from-smartclean-light to-smartclean-primary/10 p-8 rounded-lg mb-12 animate-scale-in">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary">Ventajas de nuestros servicios especiales</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Personal Cualificado</h4>
                    <p className="text-gray-700 text-sm">Equipo especializado en limpieza industrial y tratamientos especiales con formación continua.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Maquinaria Especializada</h4>
                    <p className="text-gray-700 text-sm">Equipos y productos específicos para cada tipo de limpieza especial.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Servicio Urgente</h4>
                    <p className="text-gray-700 text-sm">Disponibilidad inmediata para servicios de limpieza urgente y emergencias.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Tratamientos Garantizados</h4>
                    <p className="text-gray-700 text-sm">Todos nuestros tratamientos especiales incluyen garantía de duración.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Proceso */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg mb-12 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary">Nuestro proceso de trabajo</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-smartclean-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">01</span>
                  </div>
                  <h4 className="font-semibold mb-2">Evaluación del Espacio</h4>
                  <p className="text-gray-700 text-sm">Análisis detallado del tipo de suciedad y tratamiento necesario.</p>
                </div>
                <div className="text-center">
                  <div className="bg-smartclean-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">02</span>
                  </div>
                  <h4 className="font-semibold mb-2">Selección de Método</h4>
                  <p className="text-gray-700 text-sm">Elección del tratamiento y productos más adecuados para cada caso.</p>
                </div>
                <div className="text-center">
                  <div className="bg-smartclean-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">03</span>
                  </div>
                  <h4 className="font-semibold mb-2">Aplicación Profesional</h4>
                  <p className="text-gray-700 text-sm">Ejecución del servicio con maquinaria y productos especializados.</p>
                </div>
                <div className="text-center">
                  <div className="bg-smartclean-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">04</span>
                  </div>
                  <h4 className="font-semibold mb-2">Control de Calidad</h4>
                  <p className="text-gray-700 text-sm">Verificación del resultado y entrega del espacio en condiciones óptimas.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary">¿Necesita un servicio de limpieza especial?</h3>
              <p className="text-gray-700 mb-6">Contacte con nosotros y solicite un presupuesto sin compromiso. Tenemos la solución para cualquier necesidad de limpieza especializada.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+34691616465" className="btn-smartclean-primary text-lg px-8 py-3 hover-lift">
                  Llamar Ahora
                </a>
                <a href="#contacto" className="btn-smartclean-secondary text-lg px-8 py-3 hover-lift">
                  Solicitar Presupuesto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-smartclean-secondary animate-fade-in">Solicite Presupuesto Gratis</h2>
            <p className="text-xl text-gray-600 animate-slide-up animate-delay-200">
              Complete el formulario y le enviaremos un presupuesto personalizado para su servicio especial
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

