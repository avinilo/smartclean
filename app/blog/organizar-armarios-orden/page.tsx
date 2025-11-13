import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, CheckCircle, Package, Sparkles } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cómo Organizar tus Armarios: Guía Paso a Paso | Smart Clean',
  description: 'Transforma tus armarios desordenados en espacios organizados y funcionales con nuestra guía completa de organización y orden.',
  keywords: ['organizar armarios', 'orden en casa', 'organización', 'limpieza de armarios', 'consejos organización'],
  openGraph: {
    title: 'Cómo Organizar tus Armarios: Guía Paso a Paso',
    description: 'Transforma tus armarios desordenados en espacios organizados y funcionales.',
    type: 'article',
    locale: 'es_ES',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&auto=format'],
  },
}

export default function BlogPost3() {
  const postDate = new Date('2024-01-05')
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero-smartclean overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 bg-smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&auto=format"
            alt="Organización de armarios - Smart Clean consejos de orden"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white animate-bounce-in">
              Cómo Organizar tus Armarios: Guía Paso a Paso
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animate-delay-300">
              Transforma tus espacios desordenados en armarios funcionales y organizados
            </p>
            
            <div className="flex items-center justify-center gap-6 text-white/80 animate-slide-up animate-delay-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{postDate.toLocaleDateString('es-ES')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>6 min de lectura</span>
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
              Un armario bien organizado no solo ahorra tiempo por la mañana, sino que también reduce el estrés y maximiza el espacio disponible. En Smart Clean, entendemos que la organización es parte fundamental de un hogar limpio y funcional.
            </p>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              Paso 1: Vacía y Limpia Completamente
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              El primer paso crucial es vaciar completamente el armario. Esto te permitirá:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Evaluar todo lo que tienes realmente</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Limpiar a fondo todos los estantes y superficies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Identificar artículos que ya no usas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Planificar mejor la distribución del espacio</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              Paso 2: Clasifica y Decide qué Mantener
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Crea tres montones diferentes para tomar decisiones claras:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Mantener
                </h3>
                <p className="text-gray-700">Artículos que usas regularmente y que están en buen estado.</p>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-700 mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Donar
                </h3>
                <p className="text-gray-700">Artículos en buen estado que ya no usas pero pueden servir a otros.</p>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Eliminar
                </h3>
                <p className="text-gray-700">Artículos dañados, vencidos o que no han sido usados en años.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              Paso 3: Utiliza Sistemas de Organización Inteligentes
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Invierte en organizadores que maximicen el espacio y faciliten el mantenimiento:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Cajas organizadoras transparentes para ver el contenido</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Separadores para mantener categorías diferenciadas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Ganchos para aprovechar el espacio vertical</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Estanterías adicionales para maximizar el espacio</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              Paso 4: Organiza por Frecuencia de Uso
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Coloca los artículos que usas más frecuentemente a la altura de los ojos y dentro de fácil alcance. Los artículos estacionales o de uso ocasional pueden ir en estantes más altos o bajos.
            </p>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              Paso 5: Mantén el Sistema
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La organización no es un evento único, sino un hábito continuo. Establece estas rutinas:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Revisa el contenido mensualmente</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Devuelve los artículos a su lugar después de usarlos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Haz limpieza de temporada cada 3 meses</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-smartclean-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">Ajusta el sistema según tus necesidades cambiantes</span>
              </li>
            </ul>

            <div className="bg-smartclean-light rounded-xl p-8 my-12">
              <h3 className="text-2xl font-bold text-smartclean-secondary mb-4">
                Beneficios de Armarios Organizados
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Ahorro de tiempo al buscar cosas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Reducción del estrés diario</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Mayor duración de la ropa y accesorios</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-smartclean-primary" />
                  <span className="text-gray-700">Aprovechamiento máximo del espacio</span>
                </li>
              </ul>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Organizar tus armarios no tiene por qué ser una tarea abrumadora. Con estos pasos y un poco de constancia, puedes transformar cualquier espacio desordenado en un armario funcional que te hará la vida más fácil todos los días.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-smartclean-primary rounded-xl text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas Ayuda con la Organización?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              En Smart Clean también ofrecemos servicios de organización y orden para tu hogar u oficina.
            </p>
            <Link 
              href="/contacto"
              className="btn-secondary hover-lift inline-block"
            >
              Solicitar Información
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
