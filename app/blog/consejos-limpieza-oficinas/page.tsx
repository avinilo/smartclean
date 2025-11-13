import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, CheckCircle } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5 Consejos Esenciales para Mantener tu Oficina Impecable | Smart Clean',
  description: 'Descubre los mejores trucos y consejos profesionales para mantener tu espacio de trabajo limpio y productivo durante todo el año.',
  keywords: ['consejos limpieza oficina', 'mantenimiento oficina', 'limpieza profesional', 'oficina limpia', 'productividad'],
  openGraph: {
    title: '5 Consejos Esenciales para Mantener tu Oficina Impecable',
    description: 'Descubre los mejores trucos y consejos profesionales para mantener tu espacio de trabajo limpio y productivo.',
    type: 'article',
    locale: 'es_ES',
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=630&fit=crop&auto=format'],
  },
}

export default function BlogPost1() {
  const postDate = new Date('2024-01-15')
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 bg-smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&auto=format"
            alt="Consejos de limpieza para oficinas - Smart Clean"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white animate-bounce-in">
              5 Consejos Esenciales para Mantener tu Oficina Impecable
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animate-delay-300">
              Mantén tu espacio de trabajo limpio y productivo con estos trucos profesionales
            </p>
            
            <div className="flex items-center justify-center gap-6 text-white/80 animate-slide-up animate-delay-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{postDate.toLocaleDateString('es-ES')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 min de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Mantener una oficina limpia y organizada no solo mejora la estética del espacio, sino que también aumenta la productividad y crea un ambiente más saludable para todos. En Smart Clean, con más de 10 años de experiencia en limpieza profesional, queremos compartir contigo estos 5 consejos esenciales.
            </p>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              1. Establece una Rutina de Limpieza Diaria
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La limpieza diaria es fundamental para mantener un espacio de trabajo saludable. Dedica 10-15 minutos al final de cada jornada para:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Limpiar y desinfectar la superficie del escritorio</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Organizar documentos y suministros</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Vaciar la papelera y reciclar apropiadamente</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Limpiar el teclado y ratón con productos adecuados</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              2. Organiza por Zonas de Trabajo
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Divide tu oficina en zonas específicas y asigna responsabilidades de limpieza para cada área. Esto asegura que ningún espacio se olvide y mantiene la coherencia en la limpieza.
            </p>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              3. Usa los Productos de Limpieza Correctos
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              No todos los productos de limpieza son adecuados para todas las superficies. Usa productos específicos para:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Madera: Productos que no dañen el acabado</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Cristal: Limpiadores sin marcas y paños de microfibra</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Electrónica: Productos antisépticos específicos</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              4. Ventila Regularmente el Espacio
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La ventilación adecuada es crucial para mantener el aire fresco y eliminar olores. Abre las ventanas durante 10-15 minutos cada mañana para renovar el aire y crear un ambiente más saludable.
            </p>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              5. Contrata Servicios Profesionales Periódicamente
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Aunque el mantenimiento diario es importante, contratar servicios de limpieza profesional al menos una vez al mes garantiza una limpieza profunda y exhaustiva que mantendrá tu oficina en condiciones óptimas.
            </p>

            <div className="bg-smartclean-light rounded-xl p-8 my-12">
              <h3 className="text-2xl font-bold text-smartclean-secondary mb-4">
                Beneficios de una Oficina Limpia
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Mayor productividad</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Ambiente más saludable</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Mejor imagen corporativa</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Reducción de enfermedades</span>
                </li>
              </ul>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Implementar estos 5 consejos te ayudará a mantener una oficina impecable que beneficiará tanto a los empleados como a los visitantes. Recuerda que la limpieza no es solo estética, sino una inversión en salud y productividad.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-smartclean-primary rounded-xl text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas Ayuda Profesional?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              En Smart Clean ofrecemos servicios de limpieza profesional adaptados a las necesidades de tu oficina.
            </p>
            <Link 
              href="/contacto"
              className="btn-secondary hover-lift inline-block"
            >
              Solicitar Presupuesto
            </Link>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-smartclean-primary hover:text-smartclean-secondary font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
