import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Award, Shield, FileText, Users, Calendar } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Certificaciones y Acreditaciones - Smart Clean | Empresa de Limpieza Certificada Valencia',
  description: 'Descubre todas las certificaciones oficiales de Smart Clean: limpieza industrial, higiene profesional, productos químicos, seguridad alimentaria. Equipo certificado en Valencia.',
  keywords: 'certificaciones smart clean, limpieza industrial certificada, higiene profesional valencia, productos químicos certificados, seguridad alimentaria, ISO 9001 limpieza',
  openGraph: {
    title: 'Certificaciones y Acreditaciones - Smart Clean | Empresa de Limpieza Certificada Valencia',
    description: 'Descubre todas las certificaciones oficiales de Smart Clean: limpieza industrial, higiene profesional, productos químicos, seguridad alimentaria. Equipo certificado en Valencia.',
    type: 'website',
    locale: 'es_ES',
  }
}

export default function Certificaciones() {
  const breadcrumbItems = [
    { name: 'Certificaciones' }
  ]
  const certifications = [
    {
      title: "Seguridad y Salud en Limpieza Industrial",
      category: "Seguridad",
      description: "Certificación completa en prevención de riesgos laborales específicos para servicios de limpieza",
      validUntil: "2025",
      authority: "Generalitat Valenciana",
      icon: Shield,
      features: [
        "Manipulación segura de productos químicos",
        "Protocolos de seguridad en alturas",
        "Prevención de riesgos biológicos",
        "Equipos de protección individual (EPI)"
      ]
    },
    {
      title: "Productos Químicos para Limpieza Profesional",
      category: "Productos",
      description: "Certificación para el uso y almacenamiento seguro de productos químicos de limpieza industrial",
      validUntil: "2025",
      authority: "Ministerio de Sanidad",
      icon: Award,
      features: [
        "Registro de productos químicos autorizados",
        "Fichas de seguridad SDS actualizadas",
        "Almacenamiento seguro de productos",
        "Gestión de residuos peligrosos"
      ]
    },
    {
      title: "Higiene y Seguridad Alimentaria",
      category: "Alimentaria",
      description: "Especialización en limpieza de instalaciones con manipulación de alimentos según normativa HACCP",
      validUntil: "2024",
      authority: "AESAN",
      icon: FileText,
      features: [
        "Protocolos HACCP implementados",
        "Zonas de riesgo clasificadas",
        "Desinfección de superficies de contacto",
        "Control de plagas integrado"
      ]
    },
    {
      title: "Gestión de Calidad ISO 9001 - Limpieza",
      category: "Calidad",
      description: "Sistema de gestión de calidad certificado específicamente para servicios de limpieza profesional",
      validUntil: "2025",
      authority: "AENOR",
      icon: CheckCircle,
      features: [
        "Procesos de limpieza estandarizados",
        "Control de calidad por servicio",
        "Seguimiento de satisfacción del cliente",
        "Mejora continua en procesos"
      ]
    }
  ]

  const accreditations = [
    {
      title: "Registro de Empresas de Limpieza Profesional",
      description: "Inscripción oficial en el registro de empresas de limpieza de la Generalitat Valenciana",
      number: "RELP-CV-2024-001234"
    },
    {
      title: "Seguro de Responsabilidad Civil Ampliada",
      description: "Cobertura completa hasta 1.000.000€ para servicios de limpieza",
      number: "RC-LIM-2024-567890"
    },
    {
      title: "Autorización Gestión Residuos Limpieza",
      description: "Gestión autorizada de residuos de limpieza y productos químicos",
      number: "RGL-CV-2024-098765"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 bg-smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&auto=format"
            alt="Certificaciones profesionales de Smart Clean en limpieza"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-bounce-in">
              Certificaciones
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animate-delay-300">
              Acreditaciones oficiales que garantizan la máxima profesionalidad
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

       {/* Certificaciones */}
       <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-smartclean-secondary animate-fade-in">
              Profesionalidad Certificada
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed animate-slide-up animate-delay-200">
              En Smart Clean, la profesionalidad no es solo una promesa, es una garantía respaldada por certificaciones oficiales. 
              Nuestro equipo cuenta con todas las acreditaciones necesarias para ofrecer servicios de limpieza de máxima calidad y seguridad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-smartclean-light rounded-xl animate-scale-in">
              <Shield className="w-12 h-12 text-smartclean-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Seguridad Garantizada</h3>
              <p className="text-gray-600">Todas nuestras certificaciones están vigentes y actualizadas</p>
            </div>
            <div className="text-center p-6 bg-smartclean-light rounded-xl animate-scale-in animate-delay-200">
              <Award className="w-12 h-12 text-smartclean-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Calidad Profesional</h3>
              <p className="text-gray-600">Cumplimos con los más altos estándares del sector</p>
            </div>
            <div className="text-center p-6 bg-smartclean-light rounded-xl animate-scale-in animate-delay-400">
              <FileText className="w-12 h-12 text-smartclean-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-smartclean-secondary">Documentación Completa</h3>
              <p className="text-gray-600">Toda la documentación legal y técnica al día</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones Principales */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-smartclean-secondary animate-fade-in">
              Nuestras Certificaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Certificaciones oficiales que avalan nuestra experiencia y profesionalidad
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover-lift animate-scale-in animate-delay-${(index + 1) * 200}`}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-smartclean-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-smartclean-secondary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-smartclean-primary bg-smartclean-light px-3 py-1 rounded-full">
                          {cert.category}
                        </span>
                        <span className="text-sm text-gray-500">Válido hasta {cert.validUntil}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-smartclean-secondary">{cert.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        <strong>Autoridad emisora:</strong> {cert.authority}
                      </p>
                      
                      <div className="space-y-2">
                        {cert.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-smartclean-primary flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Acreditaciones Adicionales */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-smartclean-secondary animate-fade-in">
              Acreditaciones en Limpieza Profesional
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Registros y autorizaciones específicas para servicios de limpieza industrial y profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {accreditations.map((accred, index) => (
              <div 
                key={index}
                className={`p-6 bg-gray-50 rounded-xl border-l-4 border-smartclean-primary hover-lift animate-slide-up animate-delay-${(index + 1) * 200}`}
              >
                <h3 className="text-lg font-bold mb-3 text-smartclean-secondary">{accred.title}</h3>
                <p className="text-gray-600 mb-4">{accred.description}</p>
                <div className="text-sm font-mono text-smartclean-primary bg-smartclean-light px-3 py-2 rounded">
                  {accred.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formación Continua */}
      <section className="section-padding bg-smartclean-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-smartclean-secondary animate-slide-left">
                Formación Continua
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed animate-fade-in animate-delay-300">
                Nuestro compromiso con la excelencia en limpieza nos lleva a mantener una formación continua y actualizada. 
                Participamos regularmente en cursos especializados en limpieza, seminarios y actualizaciones normativas del sector.
              </p>
              
              <div className="space-y-4 mb-8 animate-slide-up animate-delay-500">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Formación trimestral en limpieza profesional</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Actualización en normativas de limpieza industrial</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Seminarios especializados en productos químicos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Certificaciones en higiene y seguridad alimentaria</span>
                </div>
              </div>

              <Link href="/sobre-nosotros" className="btn-primary hover-lift animate-bounce-in animate-delay-700">
                Conoce Nuestro Equipo
              </Link>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in animate-delay-300">
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop&auto=format"
                alt="Formación continua del equipo de limpieza de Smart Clean"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-smartclean-primary/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso de Calidad */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-smartclean-secondary animate-fade-in">
              Nuestro Compromiso con la Limpieza Profesional
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed animate-slide-up animate-delay-200">
              Todas nuestras certificaciones en limpieza están respaldadas por años de experiencia y un compromiso inquebrantable 
              con la calidad, la seguridad y la satisfacción del cliente en cada servicio de limpieza.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="p-8 bg-gray-50 rounded-xl animate-scale-in animate-delay-300">
                <Shield className="w-12 h-12 text-smartclean-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-smartclean-secondary">Garantía de Seguridad</h3>
                <p className="text-gray-600">
                  Cumplimos con todas las normativas de seguridad laboral y medioambiental vigentes.
                </p>
              </div>
              
              <div className="p-8 bg-gray-50 rounded-xl animate-scale-in animate-delay-500">
                <Award className="w-12 h-12 text-smartclean-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-smartclean-secondary">Excelencia Técnica</h3>
                <p className="text-gray-600">
                  Nuestras certificaciones garantizan el más alto nivel técnico en cada proyecto.
                </p>
              </div>
            </div>

            <div className="mt-12 animate-bounce-in animate-delay-700">
              <Link href="/casos-exito" className="btn-primary hover-lift mr-4">
                Ver Casos de Éxito
              </Link>
              <Link href="/contacto" className="btn-secondary hover-lift">
                Solicitar Información
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

