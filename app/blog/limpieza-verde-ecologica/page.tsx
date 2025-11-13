import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, CheckCircle, Leaf } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Limpieza Verde: Productos Ecológicos para un Hogar Saludable | Smart Clean',
  description: 'Aprende sobre los mejores productos de limpieza ecológicos y cómo implementar prácticas sostenibles en tu rutina de limpieza diaria.',
  keywords: ['limpieza ecológica', 'productos verdes', 'limpieza sostenible', 'hogar saludable', 'productos naturales'],
  openGraph: {
    title: 'Limpieza Verde: Productos Ecológicos para un Hogar Saludable',
    description: 'Aprende sobre los mejores productos de limpieza ecológicos y cómo implementar prácticas sostenibles.',
    type: 'article',
    locale: 'es_ES',
    images: ['https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=630&fit=crop&auto=format'],
  },
}

export default function BlogPost2() {
  const postDate = new Date('2024-01-10')
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 bg-smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop&auto=format"
            alt="Limpieza ecológica - Smart Clean productos verdes"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
              <Leaf className="w-8 h-8 text-green-400" />
              <span className="text-lg font-semibold text-green-400 uppercase tracking-wide">Limpieza Ecológica</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white animate-bounce-in">
              Limpieza Verde: Productos Ecológicos para un Hogar Saludable
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animate-delay-300">
              Descubre cómo limpiar tu hogar de forma sostenible y saludable
            </p>
            
            <div className="flex items-center justify-center gap-6 text-white/80 animate-slide-up animate-delay-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{postDate.toLocaleDateString('es-ES')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>7 min de lectura</span>
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
              En un mundo cada vez más consciente del medio ambiente, la limpieza ecológica se ha convertido en una prioridad para muchos hogares. En Smart Clean, creemos firmemente en la importancia de cuidar nuestro planeta mientras mantenemos nuestros espacios limpios y saludables.
            </p>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              ¿Por Qué Elegir Productos de Limpieza Ecológicos?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Los productos de limpieza convencionales a menudo contienen químicos agresivos que pueden ser perjudiciales para tu salud y el medio ambiente. Los productos ecológicos ofrecen numerosos beneficios:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Son más seguros para tu familia y mascotas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Reducen la contaminación del aire interior</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Son biodegradables y no contaminan el agua</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">A menudo son más económicos a largo plazo</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              Ingredientes Naturales que Puedes Usar
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Muchos ingredientes naturales que ya tienes en casa pueden ser excelentes limpiadores:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Vinagre Blanco
                </h3>
                <p className="text-gray-700">Excelente desinfectante natural y removedor de grasa. Perfecto para limpiar cristales y superficies.</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Bicarbonato de Sodio
                </h3>
                <p className="text-gray-700">Elimina olores y es excelente para limpiar superficies difíciles.</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Limón
                </h3>
                <p className="text-gray-700">Desinfecta naturalmente y deja un aroma fresco y limpio.</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Aceites Esenciales
                </h3>
                <p className="text-gray-700">Añaden propiedades antibacterianas y aromas agradables.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              Recetas Caseras para Limpieza Ecológica
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Aquí te compartimos algunas recetas sencillas que puedes preparar en casa:
            </p>

            <div className="bg-smartclean-light rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-smartclean-secondary mb-4">
                Limpiador Multiusos
              </h3>
              <p className="text-gray-700 mb-4">Mezcla en un spray de 500ml:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-smartclean-primary" />
                  <span className="text-gray-700">250ml de vinagre blanco</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-smartclean-primary" />
                  <span className="text-gray-700">250ml de agua</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-smartclean-primary" />
                  <span className="text-gray-700">10 gotas de aceite esencial de limón</span>
                </li>
              </ul>
              <p className="text-gray-700">¡Agita y listo para usar!</p>
            </div>

            <h2 className="text-3xl font-bold text-smartclean-secondary mb-6 mt-12">
              Consejos para Implementar la Limpieza Verde
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Comienza poco a poco, sustituyendo un producto a la vez</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Etiqueta correctamente tus productos caseros</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Almacena los productos en recipientes de vidrio reutilizables</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Comparte tus experiencias con amigos y familia</span>
              </li>
            </ul>

            <div className="bg-green-100 rounded-xl p-8 my-12">
              <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <Leaf className="w-6 h-6" />
                Impacto Ambiental
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Al elegir productos de limpieza ecológicos, estás contribuyendo a reducir la contaminación del agua, disminuir los residuos químicos y crear un ambiente más saludable para todos. Cada pequeño cambio cuenta y juntos podemos hacer una gran diferencia.
              </p>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              La limpieza ecológica no es solo una tendencia, es una forma responsable de cuidar nuestro hogar y nuestro planeta. Con estos consejos y recetas, puedes comenzar tu viaje hacia una limpieza más sostenible hoy mismo.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-smartclean-primary rounded-xl text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres Servicios de Limpieza Ecológica?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              En Smart Clean ofrecemos servicios de limpieza con productos ecológicos certificados.
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
