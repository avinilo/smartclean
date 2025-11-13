'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle, Search } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'



export default function PreguntasFrecuentes() {
  const breadcrumbItems = [
    { name: 'Preguntas Frecuentes' }
  ]
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Qué servicios de limpieza ofrece Smart Clean?",
      answer: "Smart Clean ofrece limpieza de oficinas, limpieza de comunidades, limpieza industrial, limpieza post-obra, limpieza de cristales, y servicios de mantenimiento de limpieza. Nuestro equipo de más de 15 profesionales certificados garantiza resultados impecables en cada servicio.",
      category: "Servicios"
    },
    {
      question: "¿Dónde está ubicada Smart Clean y qué área cubre?",
      answer: "Smart Clean está ubicada en Calle Josep Meliá Pigmalión 21 C 5, Benaguasil, Valencia. Damos servicio a toda la provincia de Valencia, incluyendo Valencia capital, Xàtiva, Cullera, Sagunto, Torrent y municipios cercanos.",
      category: "Ubicación"
    },
    {
      question: "¿Cómo puedo contactar con Smart Clean?",
      answer: "Puedes contactar con nosotros de varias formas: llamando al +34 691 616 465, enviando un email a info@limpiezassmartclean.com, o visitando nuestras oficinas en Benaguasil. También ofrecemos atención de emergencias las 24 horas.",
      category: "Contacto"
    },
    {
      question: "¿Cuál es el horario de atención de Smart Clean?",
      answer: "Nuestro horario regular es de lunes a viernes de 08:00 a 18:00 horas, y sábados de 09:00 a 14:00 horas. Los domingos permanecemos cerrados, pero mantenemos un servicio de emergencias disponible las 24 horas del día para servicios urgentes.",
      category: "Horarios"
    },
    {
      question: "¿Qué certificaciones tiene el equipo de Smart Clean?",
      answer: "Nuestro equipo cuenta con certificaciones en Seguridad y Salud en Limpieza Industrial, Productos Químicos para Limpieza Profesional, Higiene y Seguridad Alimentaria, y Gestión de Calidad ISO 9001 - Limpieza. Todas nuestras certificaciones están vigentes y actualizadas.",
      category: "Certificaciones"
    },
    {
      question: "¿Smart Clean trabaja con empresas de todos los tamaños?",
      answer: "Sí, trabajamos con empresas de todos los tamaños, desde pequeñas oficinas hasta grandes complejos industriales. Adaptamos nuestros servicios de limpieza a las necesidades específicas de cada cliente, garantizando siempre la máxima calidad y profesionalidad.",
      category: "Clientes"
    },
    {
      question: "¿Cuánto tiempo lleva Smart Clean en el mercado?",
      answer: "Smart Clean cuenta con más de 10 años de experiencia en el sector de la limpieza profesional, durante los cuales hemos completado más de 500 proyectos de limpieza exitosos. Esta experiencia nos permite ofrecer servicios de limpieza probados y eficientes.",
      category: "Experiencia"
    },
    {
      question: "¿Qué productos de limpieza utiliza Smart Clean?",
      answer: "Utilizamos productos de limpieza profesionales certificados y respetuosos con el medio ambiente. Trabajamos con marcas líderes del sector y adaptamos los productos según las necesidades específicas de cada espacio y tipo de suciedad.",
      category: "Productos"
    },
    {
      question: "¿Smart Clean ofrece servicios de emergencia?",
      answer: "Sí, ofrecemos servicio de emergencias las 24 horas del día, los 7 días de la semana para situaciones urgentes que requieran limpieza inmediata. Nuestro equipo está preparado para responder rápidamente a cualquier incidencia.",
      category: "Emergencias"
    },
    {
      question: "¿Cómo solicito un presupuesto para mi servicio de limpieza?",
      answer: "Puede solicitar un presupuesto gratuito contactándonos por teléfono, email, o a través de nuestro formulario web. Realizamos una visita sin compromiso para evaluar sus necesidades específicas y le proporcionamos un presupuesto detallado.",
      category: "Presupuestos"
    },
    {
      question: "¿Qué garantías ofrece Smart Clean en sus servicios?",
      answer: "Ofrecemos garantía completa en todos nuestros servicios de limpieza, con seguimiento post-servicio incluido. Además, contamos con seguro de responsabilidad civil hasta 600.000€ y todas las acreditaciones oficiales necesarias para servicios de limpieza profesional.",
      category: "Garantías"
    },
    {
      question: "¿Smart Clean puede ayudar con limpiezas especiales o únicas?",
      answer: "Absolutamente. Ofrecemos servicios de limpieza para eventos especiales, limpieza post-obra, limpieza de fin de obra, limpieza de cristales en altura, y cualquier otro tipo de limpieza especial que necesite. Adaptamos nuestros servicios a sus necesidades específicas.",
      category: "Especiales"
    }
  ]

  const categories = [...new Set(faqs.map(faq => faq.category))]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 bg-smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop&auto=format"
            alt="Preguntas frecuentes sobre servicios de limpieza de Smart Clean"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-bounce-in">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animate-delay-300">
              Resolvemos todas tus dudas sobre nuestros servicios
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

       {/* Introducción */}
       <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-smartclean-secondary animate-fade-in">
              ¿Tienes Dudas?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed animate-slide-up animate-delay-200">
              Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios de limpieza profesional 
              en Valencia: limpieza de oficinas, comunidades, industrial y servicios especiales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-smartclean-light rounded-xl animate-scale-in">
              <HelpCircle className="w-12 h-12 text-smartclean-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Respuestas Claras</h3>
              <p className="text-gray-600">Información detallada sobre todos nuestros servicios</p>
            </div>
            <div className="text-center p-6 bg-smartclean-light rounded-xl animate-scale-in animate-delay-200">
              <MessageCircle className="w-12 h-12 text-smartclean-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Atención Personalizada</h3>
              <p className="text-gray-600">Si no encuentras tu respuesta, contáctanos directamente</p>
            </div>
            <div className="text-center p-6 bg-smartclean-light rounded-xl animate-scale-in animate-delay-400">
              <Phone className="w-12 h-12 text-smartclean-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Disponibilidad 24/7</h3>
              <p className="text-gray-600">Servicio de emergencias disponible las 24 horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up animate-delay-${(index + 1) * 100}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-smartclean-primary bg-smartclean-light px-2 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-smartclean-secondary">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      {openFaq === index ? (
                        <ChevronUp className="w-6 h-6 text-smartclean-primary" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-smartclean-primary" />
                      )}
                    </div>
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-8 pb-6 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Directo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-smartclean-secondary animate-fade-in">
              ¿No Encuentras tu Respuesta?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed animate-slide-up animate-delay-200">
              Nuestro equipo está disponible para resolver cualquier duda específica sobre nuestros servicios
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-gray-50 rounded-xl animate-scale-in">
                <Phone className="w-12 h-12 text-smartclean-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-smartclean-secondary">Llámanos</h3>
                <p className="text-gray-600 mb-4">Atención inmediata por teléfono</p>
                <a href="tel:+34691616465" className="text-smartclean-primary font-semibold hover:text-smartclean-secondary transition-colors">
                  +34 691 616 465
                </a>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl animate-scale-in animate-delay-200">
                <Mail className="w-12 h-12 text-smartclean-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-smartclean-secondary">Escríbenos</h3>
                <p className="text-gray-600 mb-4">Respuesta en menos de 24h</p>
                <a href="mailto:info@limpiezassmartclean.com" className="text-smartclean-primary font-semibold hover:text-smartclean-secondary transition-colors">
                  info@limpiezassmartclean.com
                </a>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl animate-scale-in animate-delay-400">
                <MessageCircle className="w-12 h-12 text-smartclean-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-smartclean-secondary">Chat Online</h3>
                <p className="text-gray-600 mb-4">Consulta rápida en tiempo real</p>
                <span className="text-smartclean-primary font-semibold">Disponible 24/7</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in animate-delay-600">
              <Link href="/contacto" className="btn-primary hover-lift">
                Contactar Ahora
              </Link>
              <Link href="/casos-exito" className="btn-secondary hover-lift">
                Ver Casos de Éxito
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
