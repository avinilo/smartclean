import { Sparkles, CheckCircle, AlertCircle, Clock, Shield, Users } from 'lucide-react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Limpieza de Instalaciones Deportivas Valencia - Servicio Profesional | Smart Clean',
  description: 'Especialistas en limpieza de instalaciones deportivas, gimnasios, polideportivos y clubs en Valencia. Servicio profesional con productos certificados.',
  keywords: [
    'limpieza instalaciones deportivas Valencia',
    'limpieza gimnasios',
    'limpieza polideportivos',
    'limpieza clubs deportivos',
    'limpieza vestuarios deportivos',
    'desinfección instalaciones deportivas',
    'limpieza pistas deportivas',
    'servicio limpieza deportiva Valencia'
  ],
  openGraph: {
    title: 'Limpieza de Instalaciones Deportivas Valencia - Servicio Profesional | Smart Clean',
    description: 'Especialistas en limpieza de instalaciones deportivas, gimnasios y polideportivos en Valencia.',
    type: 'website',
    locale: 'es_ES',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Limpieza de instalaciones deportivas Valencia'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limpieza de Instalaciones Deportivas Valencia - Servicio Profesional',
    description: 'Especialistas en limpieza de instalaciones deportivas y gimnasios en Valencia.',
    images: ['/og-image.png']
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function InstalacionesDeportivasPage() {
  const breadcrumbItems = [
    { name: 'Limpieza de Instalaciones Deportivas' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&auto=format"
            alt="Instalaciones deportivas limpias"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-bounce-in">Limpieza de Instalaciones Deportivas Valencia</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 animate-fade-in animate-delay-300">Servicio especializado para gimnasios y polideportivos</p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up animate-delay-500">
              Mantenemos sus instalaciones deportivas en condiciones óptimas de higiene y seguridad
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
              <h2 className="text-3xl font-bold mb-6 text-smartclean-secondary animate-fade-in">Su socio en limpieza de instalaciones deportivas Valencia</h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-200">
                La limpieza de instalaciones deportivas requiere especial atención y cuidado debido al alto tráfico de usuarios y las necesidades específicas de higiene. En Smart Clean entendemos que cada gimnasio, polideportivo o club deportivo tiene necesidades únicas y requiere un servicio adaptado.
              </p>

              <div className="bg-red-50 border-l-4 border-smartclean-primary p-6 mb-8 animate-scale-in animate-delay-400">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-smartclean-secondary">Los riesgos de una limpieza deficiente en instalaciones deportivas</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Proliferación de bacterias y hongos en vestuarios</li>
                      <li>• Malos olores y ambiente poco saludable</li>
                      <li>• Desgaste prematuro de equipos y superficies</li>
                      <li>• Quejas de usuarios y posibles sanciones</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary animate-fade-in animate-delay-600">Nuestro servicio de limpieza deportiva</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6 animate-slide-up animate-delay-700">
                Con más de 10 años de experiencia en Valencia, garantizamos un servicio profesional y confiable para todo tipo de instalaciones deportivas. Utilizamos productos certificados y específicos para cada área, desde vestuarios hasta zonas de entrenamiento.
              </p>
            </div>

            {/* Servicios específicos */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-smartclean-light/30 p-6 rounded-lg animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-smartclean-primary rounded-full p-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-smartclean-secondary">Limpieza de Vestuarios</h4>
                    <p className="text-gray-700">Desinfección completa de duchas, taquillas y zonas húmedas con productos bactericidas específicos.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-light/30 p-6 rounded-lg animate-fade-in animate-delay-200">
                <div className="flex items-start gap-4">
                  <div className="bg-smartclean-primary rounded-full p-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-smartclean-secondary">Zonas de Entrenamiento</h4>
                    <p className="text-gray-700">Mantenimiento de máquinas, colchonetas y equipos con productos que no dañan los materiales.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-light/30 p-6 rounded-lg animate-fade-in animate-delay-400">
                <div className="flex items-start gap-4">
                  <div className="bg-smartclean-primary rounded-full p-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-smartclean-secondary">Pistas y Campos</h4>
                    <p className="text-gray-700">Limpieza de pistas deportivas, campos de fútbol y zonas de competición con maquinaria especializada.</p>
                  </div>
                </div>
              </div>

              <div className="bg-smartclean-light/30 p-6 rounded-lg animate-fade-in animate-delay-600">
                <div className="flex items-start gap-4">
                  <div className="bg-smartclean-primary rounded-full p-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-smartclean-secondary">Horarios Flexibles</h4>
                    <p className="text-gray-700">Trabajamos en horarios nocturnos o entre sesiones para no interferir en la actividad deportiva.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ventajas */}
            <div className="bg-gradient-to-r from-smartclean-light to-smartclean-primary/10 p-8 rounded-lg mb-12 animate-scale-in">
              <h3 className="text-2xl font-bold mb-6 text-smartclean-secondary">Ventajas de nuestro servicio</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Personal Especializado</h4>
                    <p className="text-gray-700 text-sm">Equipo formado en limpieza deportiva y manejo de productos específicos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Productos Certificados</h4>
                    <p className="text-gray-700 text-sm">Utilizamos productos homologados para instalaciones deportivas, respetuosos con el medio ambiente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Servicio 24/7</h4>
                    <p className="text-gray-700 text-sm">Disponibilidad para emergencias y limpiezas urgentes en instalaciones deportivas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Garantía de Calidad</h4>
                    <p className="text-gray-700 text-sm">Todos nuestros servicios incluyen garantía de calidad y seguimiento continuo.</p>
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
                  <h4 className="font-semibold mb-2">Evaluación Inicial</h4>
                  <p className="text-gray-700 text-sm">Análisis detallado de las instalaciones deportivas y necesidades específicas.</p>
                </div>
                <div className="text-center">
                  <div className="bg-smartclean-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">02</span>
                  </div>
                  <h4 className="font-semibold mb-2">Planificación</h4>
                  <p className="text-gray-700 text-sm">Diseño de un plan de limpieza adaptado a los horarios y actividades deportivas.</p>
                </div>
                <div className="text-center">
                  <div className="bg-smartclean-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">03</span>
                  </div>
                  <h4 className="font-semibold mb-2">Ejecución</h4>
                  <p className="text-gray-700 text-sm">Limpieza profesional con productos y técnicas específicas para instalaciones deportivas.</p>
                </div>
                <div className="text-center">
                  <div className="bg-smartclean-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">04</span>
                  </div>
                  <h4 className="font-semibold mb-2">Seguimiento</h4>
                  <p className="text-gray-700 text-sm">Control de calidad y ajustes en el servicio según necesidades del cliente.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 text-smartclean-secondary">¿Necesita limpieza para su instalación deportiva?</h3>
              <p className="text-gray-700 mb-6">Contacte con nosotros y solicite un presupuesto sin compromiso. Garantizamos espacios deportivos limpios, seguros y acogedores.</p>
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
              Complete el formulario y le enviaremos un presupuesto personalizado para su instalación deportiva
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

