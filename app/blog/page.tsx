import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import { getSEOConfig } from '@/lib/seo-config'

const seoConfig = getSEOConfig('blog')

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords.join(', '),
  openGraph: {
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    type: seoConfig.openGraph.type as any,
    locale: 'es_ES',
    images: seoConfig.openGraph.images,
  },
  twitter: {
    card: seoConfig.twitter.card as any,
    title: seoConfig.twitter.title,
    description: seoConfig.twitter.description,
    images: seoConfig.twitter.images,
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

const blogPosts = [
  {
    id: 'consejos-limpieza-oficinas',
    title: '5 Consejos Esenciales para Mantener tu Oficina Impecable',
    excerpt: 'Descubre los mejores trucos y consejos profesionales para mantener tu espacio de trabajo limpio y productivo durante todo el año.',
    date: '2024-01-15',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format',
    category: 'Consejos de Limpieza',
    slug: 'consejos-limpieza-oficinas'
  },
  {
    id: 'limpieza-verde-ecologica',
    title: 'Limpieza Verde: Productos Ecológicos para un Hogar Saludable',
    excerpt: 'Aprende sobre los mejores productos de limpieza ecológicos y cómo implementar prácticas sostenibles en tu rutina de limpieza diaria.',
    date: '2024-01-10',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop&auto=format',
    category: 'Limpieza Ecológica',
    slug: 'limpieza-verde-ecologica'
  },
  {
    id: 'organizar-armarios-orden',
    title: 'Cómo Organizar tus Armarios: Guía Paso a Paso',
    excerpt: 'Transforma tus armarios desordenados en espacios organizados y funcionales con nuestra guía completa de organización y orden.',
    date: '2024-01-05',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format',
    category: 'Organización',
    slug: 'organizar-armarios-orden'
  }
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-mantexia overflow-hidden relative -mt-20 pt-20">
        <div className="absolute inset-0 bg-smartclean-overlay"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&auto=format"
            alt="Blog de limpieza profesional - Smart Clean consejos y guías"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="container-custom relative z-10 w-full py-32 md:py-40 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white animate-bounce-in">
              Blog de Limpieza Profesional
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 animate-fade-in animate-delay-300">
              Consejos, trucos y guías expertas para mantener tus espacios impecables
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-smartclean-secondary animate-fade-in">
              Últimas Publicaciones
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Descubre los mejores consejos y guías de limpieza profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift group animate-scale-in"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-smartclean-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-smartclean-secondary group-hover:text-smartclean-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-smartclean-primary font-semibold group-hover:gap-3 transition-all"
                  >
                    Leer más <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-smartclean-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in">
            ¿Necesitas Servicios de Limpieza Profesional?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90 animate-slide-up animate-delay-200">
            Contacta con nosotros para un presupuesto personalizado
          </p>
          <Link 
            href="/contacto" 
            className="btn-secondary hover-lift hover-scale inline-block"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </section>
    </>
  )
}
