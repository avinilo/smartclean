'use client'

import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Phone, FileText } from 'lucide-react'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Bot responses database - Ampliada y mejorada para Smart Clean
  const botResponses = React.useMemo(() => ({
    greeting: [
      "¡Hola! 👋 Soy el asistente virtual de Smart Clean. Somos especialistas en limpieza profesional para oficinas, comunidades e instalaciones industriales. ¿En qué puedo asistirte hoy?",
      "¡Bienvenido a Smart Clean! 🧹 Somos expertos en servicios de limpieza integral con más de 10 años de experiencia. ¿Qué necesitas saber sobre nuestros servicios?",
      "¡Hola! ✨ Soy tu asistente en Smart Clean. Trabajamos con empresas, comunidades y particulares en Valencia y alrededores. ¿Cómo puedo ayudarte con tu proyecto de limpieza?"
    ],
    services: [
      "🏢 **Servicios Smart Clean - Limpieza Profesional:**\n\n🧹 **Limpieza de Oficinas** (Servicio #1)\n• Limpieza diaria y mantenimiento\n• Horarios flexibles (24/7 disponibles)\n• Productos ecológicos certificados\n\n🏢 **Limpieza de Comunidades**\n• Zonas comunes, portales y ascensores\n• Limpieza de cristales y fachadas\n• Mantenimiento de jardines y zonas exteriores\n\n🏭 **Limpieza Industrial**\n• Naves, almacenes y fábricas\n• Maquinaria y equipos industriales\n• Tratamiento de residuos especiales\n\n🏠 **Limpieza a Domicilio**\n• Limpieza profunda y general\n• Limpieza post-obra\n• Servicios personalizados\n\n¿Qué servicio te interesa más? 💼",
      "Nuestros **servicios de limpieza integral** están diseñados para diferentes necesidades:\n\n🎯 **¿Oficina o negocio?** → Limpieza diaria profesional\n🎯 **¿Comunidad de vecinos?** → Mantenimiento completo\n🎯 **¿Industria o almacén?** → Limpieza especializada\n🎯 **¿Hogar particular?** → Servicio a domicilio\n\n**Cobertura:** Valencia y área metropolitana\n**Productos:** Ecológicos y certificados\n**Horarios:** 24/7 según necesidades\n\n¿Cuál se adapta mejor a tus necesidades?"
    ],
    prices: [
      "💰 **Información de Precios y Presupuestos:**\n\n**Limpieza de Oficinas:**\n• Desde 15€/hora (mínimo 2 horas)\n• Contratos mensuales desde 200€/mes\n• Productos ecológicos incluidos\n\n**Limpieza de Comunidades:**\n• Desde 0,50€/m² mensual\n• Portales: desde 30€/mes\n• Cristalería: desde 2€/m²\n\n**Limpieza Industrial:**\n• Desde 18€/hora especializada\n• Tratamiento residuos: consultar\n• Maquinaria: desde 50€/unidad\n\n**Limpieza a Domicilio:**\n• Desde 20€/hora (mínimo 3 horas)\n• Limpieza profunda: desde 80€\n• Post-obra: desde 150€\n\n📞 **Presupuesto personalizado: +34 960 123 456**\n*Precios orientativos, consulta condiciones específicas*",
      "🎯 **Tarifas Competitivas - Calidad Garantizada:**\n\n**¿Servicio puntual?** Desde 15€/hora\n**¿Contrato mensual?** Desde 200€/mes\n**¿Limpieza profunda?** Desde 80€\n\n**Ventajas incluidas:**\n✅ Productos ecológicos certificados\n✅ Personal uniformado y formado\n✅ Seguro de responsabilidad civil\n✅ Flexibilidad horaria (24/7)\n\n📱 **Llama para tu presupuesto exacto: +34 960 123 456**"
    ],
    urgency: [
      "🚨 **Servicio de Emergencias 24/7:**\n\n**Disponibilidad inmediata:**\n• Equipo de limpieza disponible 24 horas\n• Respuesta en menos de 2 horas\n• Cobertura: Valencia y área metropolitana\n\n**Situaciones de emergencia que atendemos:**\n🧹 Derrames accidentales en oficinas\n🏢 Incidentes en comunidades (roturas, suciedad)\n🏭 Limpieza urgente en instalaciones\n🏠 Limpieza post-incidente en hogares\n\n**Tarifa emergencia:** 25€ suplemento + servicio\n\n📞 **Llama AHORA: +34 960 123 456**\n*Equipo de limpieza en camino*",
      "⏰ **¿Necesitas limpieza URGENTE?**\n\nNuestro equipo de limpieza está preparado para emergencias:\n\n🎯 **Respuesta garantizada en 2 horas**\n🎯 **Personal uniformado disponible 24/7**\n🎯 **Productos ecológicos y seguros**\n\n**Casos de emergencia recientes:**\n• Oficina - Derrame de café en alfombras\n• Comunidad - Rotura de tubo en portal\n• Hogar - Fiesta con limpieza urgente\n• Almacén - Incidente con mercancía\n\n📱 **EMERGENCIAS: +34 960 123 456**"
    ],
    certifications: [
      "🏅 **Certificaciones y Garantías de Calidad:**\n\n**Nuestras Certificaciones:**\n✅ Productos de limpieza ecológicos certificados\n✅ Personal formado en normativas de higiene\n✅ Seguro de responsabilidad civil\n✅ Certificación ISO 14001 (medio ambiente)\n✅ Protocolos COVID-19 implementados\n\n**Garantías que ofrecemos:**\n🛡️ Satisfacción 100% garantizada\n🛡️ Revisión gratuita si no quedas satisfecho\n🛡️ Cumplimiento de normativas locales\n🛡️ Personal uniformado y acreditado\n\n**Compromiso con el medio ambiente:**\n• Productos biodegradables\n• Reducción de residuos químicos\n• Tecnologías de bajo consumo\n\n📞 **Consulta certificaciones: +34 960 123 456**",
      "🔒 **Calidad y Seguridad - Nuestro Compromiso:**\n\n**¿Por qué elegir Smart Clean?**\n• Personal uniformado y formado\n• Productos ecológicos certificados\n• Más de 10 años de experiencia\n• Seguro de responsabilidad civil\n\n**Documentación que proporcionamos:**\n📋 Certificados de productos ecológicos\n📋 Protocolos de higiene y seguridad\n📋 Informes de servicio detallados\n📋 Garantías por escrito\n\n**Sectores especializados:**\n🏢 Oficinas • 🏢 Comunidades • 🏭 Industrias • 🏠 Hogares\n\n¿Necesitas certificación específica? ¡Consúltanos!"
    ],
    coverage: [
      "🗺️ **Cobertura Geográfica - Valencia y Área Metropolitana:**\n\n**Zonas que cubrimos:**\n📍 **Valencia capital** - Toda la ciudad\n📍 **Alrededores** - Paterna, Burjassot, Mislata\n📍 **Área metropolitana** - Torrent, Aldaia, Manises\n📍 **Costa** - Pinedo, El Saler, El Perelló\n\n**Poblaciones principales:**\n• Valencia, Mislata, Burjassot, Paterna\n• Torrent, Aldaia, Xirivella, Alaquàs\n• Manises, Quart de Poblet, Silla\n• Sedaví, Catarroja, Albal, Massanassa\n\n**Ventajas por zonas:**\n✅ Sin coste de desplazamiento en Valencia\n✅ Personal local en cada zona\n✅ Conocimiento de normativas municipales\n✅ Respuesta rápida (menos de 2 horas)\n\n**Servicios por zonas:**\n• Valencia: Oficinas, comunidades, hogares\n• Pueblos: Comunidades, industrias locales\n• Costa: Segundas residencias\n\n📞 **Consulta cobertura: +34 960 123 456**"
    ],
    experience: [
      "🏆 **Experiencia y Referencias Verificables:**\n\n**Clientes Destacados:**\n🏢 **Oficinas Corporativas Valencia**\n• Servicio: Limpieza diaria integral\n• Frecuencia: 5 días/semana\n• Resultado: Ambiente impecable y saludable\n\n🏢 **Comunidades Residenciales**\n• Servicio: Mantenimiento zonas comunes\n• Frecuencia: Semanal y mensual\n• Resultado: Satisfacción vecinal 95%\n\n🏭 **Industrias Locales**\n• Servicio: Limpieza de naves industriales\n• Frecuencia: Quincenal\n• Resultado: Cumplimiento normativas de higiene\n\n🏠 **Hogares Particulares**\n• Servicio: Limpieza profunda mensual\n• Frecuencia: Mensual y ocasional\n• Resultado: Clientes fieles y recomendaciones\n\n🏨 **Hoteles Boutique**\n• Servicio: Limpieza de habitaciones\n• Frecuencia: Diaria\n• Resultado: Puntuación Google 4.8/5\n\n📞 **¿Quieres ser nuestro próximo caso de éxito? +34 960 123 456**",
      "💼 **Casos de Éxito - Más de 10 Años de Experiencia:**\n\n**¿Por qué nos eligen nuestros clientes?**\n🎯 Personal uniformado y formado\n🎯 Productos ecológicos certificados\n🎯 Más de 10 años de experiencia\n🎯 Satisfacción 100% garantizada\n\n**Testimonios de clientes:**\n• \"Smart Clean mantiene nuestras oficinas impecables\"\n• \"Los vecinos están encantados con el servicio\"\n• \"Profesionales y puntuales siempre\"\n\n**Números que nos avalan:**\n📊 500+ clientes satisfechos\n📊 10+ años de experiencia\n📊 4.8/5 valoración media\n📊 95% clientes fieles\n\n¿Quieres ser nuestro próximo caso de éxito?"
    ],
    contact: [
      "📞 **¡Perfecto! Contacta con Nuestro Equipo:**\n\n**Información de Contacto:**\n📱 **Teléfono: +34 960 123 456**\n📧 **Email: info@smartcleanvalencia.com**\n📍 **Oficina: C/ Colón, 15, bajo**\n    **46004 Valencia**\n\n**Horarios de Atención:**\n🕐 Lunes a Viernes: 08:00 - 20:00\n🕐 Sábados: 09:00 - 14:00\n🚨 Emergencias: 24/7 disponible\n\n**¿Qué necesitas?**\n• Presupuesto personalizado gratuito\n• Consulta sobre tipos de limpieza\n• Planificación de servicio\n• Servicio de emergencia\n\n**Respuesta garantizada en menos de 2 horas** ⏰\n\n¡Nuestro equipo de limpieza está listo para ayudarte! 💪",
      "🎯 **¡Excelente Decisión! Te Esperamos:**\n\n**Contacto Directo:**\n📞 **+34 960 123 456** (Respuesta inmediata)\n📧 **info@smartcleanvalencia.com**\n\n**¿Qué puedes esperar?**\n✅ Presupuesto detallado en 24h\n✅ Visita de evaluación gratuita\n✅ Propuesta adaptada a tus necesidades\n✅ Garantías por escrito\n\n**Información que nos ayuda:**\n• Tipo de espacio a limpiar\n• Ubicación (Valencia y alrededores)\n• Frecuencia del servicio\n• Presupuesto orientativo\n\n**Casos similares al tuyo:**\n• Oficinas, comunidades, hogares\n• Industrias, hoteles, locales\n\n📱 **¡Llama ahora y hablemos de tu proyecto de limpieza!**"
    ],
    maintenance: [
      "🔧 **Mantenimiento de Limpieza - Servicio Integral:**\n\n**Tipos de Servicios de Mantenimiento:**\n🛠️ **Limpieza Regular** - Planificada y sistemática\n🚨 **Limpieza Intensiva** - Cuando necesitas más profundidad\n⚡ **Limpieza Express** - Respuesta rápida\n🔍 **Limpieza Detallada** - Rastros y rincones\n\n**Sectores Especializados:**\n🏢 Oficinas y despachos profesionales\n🏢 Comunidades de propietarios\n🏭 Naves industriales y almacenes\n🏠 Hogares y segundas residencias\n🏨 Hoteles y apartamentos turísticos\n\n**Servicios Incluidos:**\n✅ Limpieza de suelos y alfombras\n✅ Limpieza de cristales y ventanas\n✅ Desinfección de zonas comunes\n✅ Gestión de residuos y reciclaje\n✅ Productos ecológicos certificados\n\n**Frecuencias:**\n• Diaria, semanal, quincenal o mensual\n• Servicios personalizados según necesidades\n\n📞 **Consulta tu caso: +34 960 123 456**",
      "🏭 **Mantenimiento de Limpieza - Casos de Éxito:**\n\n**¿Por qué Smart Clean para tu mantenimiento?**\n• Personal uniformado y formado\n• Productos ecológicos certificados\n• Más de 10 años de experiencia\n• Flexibilidad total de horarios\n\n**Metodología de trabajo:**\n📋 Evaluación inicial gratuita\n📋 Plan de limpieza personalizado\n📋 Calendario de servicios\n📋 Revisiones de calidad\n📋 Informes de servicio detallados\n\n**Ventajas competitivas:**\n🎯 Ambiente limpio y saludable\n🎯 Reducción de alérgenos y bacterias\n🎯 Mejora de la imagen de tu espacio\n🎯 Personal de confianza\n\n**Sectores de confianza:**\n• Oficinas • Comunidades • Industrias • Hogares\n\n¿Necesitas un mantenimiento de limpieza sin preocupaciones?"
    ],
    workforce: [
      "👷 **Equipo de Limpieza Profesional - Nuestro Servicio Principal:**\n\n**Nuestro Equipo:**\n🧹 Personal uniformado y formado\n🧹 Especialistas en limpieza de oficinas\n🧹 Expertos en limpieza de comunidades\n🧹 Profesionales en limpieza industrial\n\n**Especializaciones:**\n✨ Limpieza de oficinas y despachos\n✨ Mantenimiento de comunidades\n✨ Limpieza de instalaciones industriales\n✨ Limpieza profunda y detallada\n✨ Productos ecológicos y seguros\n\n**Casos de Referencia:**\n🏢 **Oficinas Corporativas** - Limpieza diaria\n🏢 **Comunidades Residenciales** - Mantenimiento semanal\n🏭 **Industrias Locales** - Limpieza quincenal\n🏠 **Hogares** - Limpieza profunda mensual\n\n**Tarifas:**\n• Desde 15€/hora personal de limpieza\n• Contratos mensuales: tarifas especiales\n• Sin coste desplazamiento Valencia\n\n**Cobertura:** Valencia y área metropolitana\n\n📞 **Solicita tu equipo: +34 960 123 456**",
      "🎯 **Personal de Limpieza Profesional - Servicios de Confianza:**\n\n**¿Para quién trabajamos?**\n• Empresas y oficinas\n• Comunidades de propietarios\n• Industrias y almacenes\n• Hogares y particulares\n\n**Ventajas de nuestro personal:**\n✅ Uniformado y acreditado\n✅ Formado en técnicas de limpieza\n✅ Uso de productos ecológicos\n✅ Herramientas y equipos incluidos\n✅ Seguro de responsabilidad civil\n\n**Casos donde destacamos:**\n• Oficinas: Limpieza sin interrupciones\n• Comunidades: Satisfacción vecinal\n• Industrias: Cumplimiento normativas\n• Hogares: Confianza y discreción\n\n**Proceso de contratación:**\n📞 Llamada → 📋 Evaluación → 🧹 Servicio\n\n**Respuesta en menos de 24 horas**\n\n¿Necesitas personal de limpieza de confianza?"
    ],
    documents: [
      "📋 **Limpieza de Documentación y Archivos:**\n\n**Servicio Especializado:**\n🎯 **Limpieza de archivos y documentación**\n🎯 **Organización de espacios de trabajo**\n🎯 **Digitalización de documentos**\n\n**Servicios Incluidos:**\n📄 Organización y clasificación de documentos\n📄 Limpieza de estanterías y archivadores\n📄 Digitalización de documentos importantes\n📄 Gestión de documentos obsoletos\n📄 Limpieza de equipos informáticos\n📄 Organización de espacios de trabajo\n\n**Sectores Especializados:**\n• Oficinas con archivo documental\n• Despachos profesionales\n• Bibliotecas y hemerotecas\n• Archivos municipales\n\n**Tarifas Competitivas:**\n• Por hora: desde 20€/hora\n• Por proyecto: desde 150€\n• Digitalización: 0,50€/página\n\n**Ventajas:**\n✅ Organización eficiente del espacio\n✅ Mejora de la productividad\n✅ Conservación de documentos importantes\n✅ Ambiente de trabajo más ordenado\n\n📞 **¿Necesitas organizar tu documentación? ¡Llámanos! +34 960 123 456**",
      "💼 **Organización y Limpieza de Espacios de Trabajo:**\n\n**¿Por qué organizar tu espacio de trabajo?**\n• Mejora de la productividad\n• Reducción del estrés laboral\n• Conservación de documentos\n• Imagen profesional mejorada\n\n**Proceso de trabajo:**\n📊 Evaluación inicial del espacio\n📊 Clasificación de documentos\n📊 Limpieza profunda del área\n📊 Implementación de sistemas de organización\n📊 Mantenimiento periódico\n\n**Casos de éxito:**\n• Despacho legal (archivo histórico) - Organización completa\n• Consultora (oficina abierta) - Digitalización documentos\n• Clínica (historiales médicos) - Sistema organizativo\n\n**Incluye:**\n🎯 Limpieza de muebles y equipos\n🎯 Organización de documentos\n🎯 Digitalización de archivos\n🎯 Recomendaciones de mantenimiento\n\n**¿Tu oficina necesita organización y limpieza?**"
    ],
    location: [
      "📍 **Ubicación y Cobertura - Cerca de Ti:**\n\n**Sede Principal:**\n🏢 **C/ Colón, 15, bajo**\n🏢 **46004 Valencia**\n🏢 **Zona: Centro de Valencia**\n\n**Cobertura Completa:**\n🗺️ **Valencia capital** - Cobertura total\n🗺️ **Alrededores** - Personal desplazado\n🗺️ **Área metropolitana** - Servicio integral\n\n**Zonas Principales:**\n• Centro, Ensanche, Benicalap, Campanar\n• Poblados Marítimos, Algirós, Camins al Grau\n• Quatre Carreres, Paternina, Benimaclet\n• Alboraya, Mislata, Burjassot, Godella\n\n**Horarios de Oficina:**\n🕐 **Lunes a Viernes:** 08:00 - 20:00\n🕐 **Sábados:** 09:00 - 14:00\n🚨 **Emergencias:** 24/7 disponible\n\n**Ventajas por ubicación:**\n✅ Sin coste desplazamiento en Valencia capital\n✅ Respuesta rápida (menos de 2h)\n✅ Conocimiento del territorio\n✅ Personal local en cada zona\n\n**Transporte y logística:**\n• Vehículos equipados con productos y herramientas\n• Personal móvil por toda el área\n• Rutas optimizadas por barrios\n\n📞 **¿Estamos cerca de ti? +34 960 123 456**"
    ],
    projects: [
      "🏆 **Casos de Éxito - Portfolio de Referencias:**\n\n⚽ **Nou Mestalla - Valencia CF**\n• Proyecto: Instalaciones eléctricas estadio\n• Equipo: 15+ técnicos especializados\n• Duración: Proyecto de gran envergadura\n• Resultado: Cumplimiento plazos y calidad\n\n🏀 **Roig Arena - Pabellón Deportivo**\n• Servicio: Mantenimiento integral 24/7\n• Sistemas: Climatización, eléctrico, seguridad\n• Eventos: Sin interrupciones durante competiciones\n• Resultado: Funcionamiento perfecto continuo\n\n🏥 **Hospitales Privados Valencia**\n• Gestión: PRL para 200+ trabajadores\n• Mantenimiento: Sistemas críticos sin paradas\n• Certificaciones: Normativas sanitarias estrictas\n• Resultado: Cumplimiento 100% normativo\n\n🏨 **Hoteles Costa Valenciana**\n• Temporada alta: Mantenimiento preventivo\n• Servicios: Climatización, piscinas, eléctrico\n• Respuesta: Inmediata para huéspedes\n• Resultado: Satisfacción cliente garantizada\n\n🏭 **Industrias Castellón**\n• Automatización: Sistemas de control\n• Mantenimiento: Preventivo y correctivo\n• Certificaciones: PRL industrial\n• Resultado: Optimización producción\n\n📞 **¿Quieres ser nuestro próximo caso de éxito? +34 663 423 034**"
    ],
    followup: [
      "🤔 **¿Necesitas más información específica?**\n\nPuedo ayudarte con:\n• Detalles de tipos de limpieza\n• Presupuestos orientativos\n• Casos similares a tu espacio\n• Disponibilidad de personal\n• Productos ecológicos que usamos\n\n¿Qué te gustaría saber exactamente?",
      "💡 **¿Te puedo ayudar con algo más concreto?**\n\nTemas que puedo resolver:\n🧹 Tipos de limpieza específicos\n💰 Información de precios\n📅 Disponibilidad y horarios\n🏆 Referencias de clientes similares\n🌿 Productos ecológicos y certificados\n\n¿Hay algo específico que te preocupe sobre la limpieza?"
    ],
    default: [
      "Entiendo tu consulta. Para darte la mejor respuesta personalizada sobre nuestros servicios de limpieza (oficinas, comunidades, industrias o hogares), te recomiendo que nos llames al **+34 960 123 456** 📞\n\nNuestro equipo de limpieza profesional podrá ayudarte con cualquier duda específica. ¿Hay algo concreto que te gustaría saber mientras tanto?",
      "¡Gracias por tu interés en Smart Clean! 🧹\n\nCon más de 10 años de experiencia en limpieza profesional, estamos preparados para ayudarte con:\n🧹 Limpieza de oficinas\n🏢 Mantenimiento de comunidades\n🏭 Limpieza industrial\n🏠 Servicio a domicilio\n\n📞 **+34 960 123 456** | 📧 **info@smartcleanvalencia.com**\n\n¿Te gustaría que profundice en algún servicio específico?",
      "Perfecto, estoy aquí para resolver tus dudas sobre Smart Clean. ✨\n\nCon personal uniformado y productos ecológicos certificados en Valencia y alrededores, podemos ayudarte con cualquier necesidad de limpieza.\n\n¿Prefieres que hablemos de:\n• Servicios de limpieza y precios\n• Casos de clientes similares al tuyo\n• Disponibilidad y horarios\n• Productos ecológicos que usamos\n\nO si lo prefieres, **llama directamente: +34 960 123 456** 📱"
    ]
  }), [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const getRandomResponse = React.useCallback((category: keyof typeof botResponses): string => {
    const responses = botResponses[category]
    return responses[Math.floor(Math.random() * responses.length)]
  }, [botResponses])

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(getRandomResponse('greeting'))
      }, 500)
    }
  }, [isOpen, messages.length, getRandomResponse])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle viewport changes for mobile keyboard
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && inputRef.current) {
        setTimeout(() => {
          scrollToBottom()
        }, 100)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const analyzeMessage = (text: string): keyof typeof botResponses => {
    const lowerText = text.toLowerCase()
    
    // Saludos y presentaciones
    if (lowerText.includes('hola') || lowerText.includes('buenos') || lowerText.includes('buenas') || 
        lowerText.includes('saludos') || lowerText.includes('hey')) {
      return 'greeting'
    }
    
    // Precios y presupuestos (alta prioridad)
    if (lowerText.includes('precio') || lowerText.includes('presupuesto') || lowerText.includes('coste') || 
        lowerText.includes('cuesta') || lowerText.includes('tarifa') || lowerText.includes('€') ||
        lowerText.includes('euro') || lowerText.includes('dinero') || lowerText.includes('pagar') ||
        lowerText.includes('factura') || lowerText.includes('cobrar')) {
      return 'prices'
    }
    
    // Urgencias y emergencias
    if (lowerText.includes('urgente') || lowerText.includes('emergencia') || lowerText.includes('rápido') ||
        lowerText.includes('inmediato') || lowerText.includes('ya') || lowerText.includes('ahora') ||
        lowerText.includes('24/7') || lowerText.includes('24 horas') || lowerText.includes('avería') ||
        lowerText.includes('fallo') || lowerText.includes('parado') || lowerText.includes('no funciona')) {
      return 'urgency'
    }
    
    // Certificaciones PRL y garantías
    if (lowerText.includes('certificacion') || lowerText.includes('certificado') || lowerText.includes('prl') ||
        lowerText.includes('prevención') || lowerText.includes('riesgos') || lowerText.includes('seguridad') ||
        lowerText.includes('garantía') || lowerText.includes('garantia') || lowerText.includes('seguro') ||
        lowerText.includes('normativa') || lowerText.includes('legal')) {
      return 'certifications'
    }
    
    // Cobertura geográfica
    if (lowerText.includes('valencia') || lowerText.includes('alicante') || lowerText.includes('castellón') ||
        lowerText.includes('castellon') || lowerText.includes('donde') || lowerText.includes('ubicación') ||
        lowerText.includes('ubicacion') || lowerText.includes('zona') || lowerText.includes('cobertura') ||
        lowerText.includes('desplazamiento') || lowerText.includes('vienen') || lowerText.includes('cerca')) {
      return 'coverage'
    }
    
    // Experiencia y referencias
    if (lowerText.includes('experiencia') || lowerText.includes('referencia') || lowerText.includes('caso') ||
        lowerText.includes('proyecto') || lowerText.includes('nou mestalla') || lowerText.includes('roig arena') ||
        lowerText.includes('hospital') || lowerText.includes('hotel') || lowerText.includes('cliente') ||
        lowerText.includes('trabajo') || lowerText.includes('han hecho')) {
      return 'experience'
    }
    
    // Servicios generales
    if (lowerText.includes('servicio') || lowerText.includes('qué hacen') || lowerText.includes('que hacen') ||
        lowerText.includes('ofrecen') || lowerText.includes('especialidad') || lowerText.includes('actividad')) {
      return 'services'
    }
    
    // Mantenimiento específico
    if (lowerText.includes('mantenimiento') || lowerText.includes('reparar') || lowerText.includes('gestora') ||
        lowerText.includes('preventivo') || lowerText.includes('correctivo') || lowerText.includes('revisar') ||
        lowerText.includes('climatización') || lowerText.includes('aire acondicionado')) {
      return 'maintenance'
    }
    
    // Mano de obra
    if (lowerText.includes('mano de obra') || lowerText.includes('personal') || lowerText.includes('trabajador') ||
        lowerText.includes('técnico') || lowerText.includes('tecnico') || lowerText.includes('electricista') ||
        lowerText.includes('instalador') || lowerText.includes('equipo') || lowerText.includes('subcontrata')) {
      return 'workforce'
    }
    
    // Gestión documental
    if (lowerText.includes('document') || lowerText.includes('papel') || lowerText.includes('archivo') ||
        lowerText.includes('gestión') || lowerText.includes('gestion') || lowerText.includes('administrativa') ||
        lowerText.includes('nómina') || lowerText.includes('nomina') || lowerText.includes('contrato') ||
        lowerText.includes('autónomo') || lowerText.includes('autonomo') || lowerText.includes('pyme')) {
      return 'documents'
    }
    
    // Ubicación y contacto
    if (lowerText.includes('ubicación') || lowerText.includes('ubicacion') || lowerText.includes('dirección') ||
        lowerText.includes('direccion') || lowerText.includes('oficina') || lowerText.includes('horario')) {
      return 'location'
    }
    
    // Contacto directo
    if (lowerText.includes('llamar') || lowerText.includes('contacto') || lowerText.includes('teléfono') ||
        lowerText.includes('telefono') || lowerText.includes('email') || lowerText.includes('correo') ||
        lowerText.includes('hablar') || lowerText.includes('consulta')) {
      return 'contact'
    }
    
    // Casos específicos de proyectos
    if (lowerText.includes('nou mestalla') || lowerText.includes('roig arena') || lowerText.includes('valencia cf') ||
        lowerText.includes('estadio') || lowerText.includes('pabellón') || lowerText.includes('pabellon')) {
      return 'projects'
    }
    
    return 'default'
  }

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage = inputText.trim()
    addUserMessage(userMessage)
    setInputText('')
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const responseCategory = analyzeMessage(userMessage)
      let botResponse = getRandomResponse(responseCategory)
      
      // Añadir contexto conversacional y seguimiento
      if (responseCategory === 'services' || responseCategory === 'default') {
        // Añadir pregunta de seguimiento para servicios generales
        botResponse += "\n\n" + getRandomResponse('followup')
      } else if (responseCategory === 'prices') {
        // Para precios, sugerir contacto directo
        botResponse += "\n\n💡 **¿Te interesa algún servicio específico?** Puedo darte más detalles técnicos o conectarte directamente con nuestro equipo."
      } else if (responseCategory === 'workforce' || responseCategory === 'maintenance' || responseCategory === 'documents') {
        // Para servicios específicos, ofrecer información adicional
        botResponse += "\n\n🔍 **¿Quieres saber más sobre:**\n• Casos similares a tu proyecto\n• Disponibilidad y plazos\n• Proceso de trabajo específico"
      }
      
      addBotMessage(botResponse)
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const openChat = () => {
    setIsOpen(true)
    // Focus input after animation completes
    setTimeout(() => {
      inputRef.current?.focus()
    }, 300)
  }

  const closeChat = () => {
    setIsOpen(false)
    // Clear focus to hide mobile keyboard
    inputRef.current?.blur()
  }

  const formatMessage = (text: string) => {
    // Convert markdown-like formatting to JSX
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.includes('**') ? (
          <span dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
        ) : (
          line
        )}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <>
      {/* Chat Bubble - Optimizado para PC y móvil */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 w-16 h-16 md:w-[70px] md:h-[70px] bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-[998] animate-bounce-in group"
          aria-label="Abrir chat de ayuda"
        >
          <MessageCircle className="w-8 h-8 md:w-9 md:h-9 mx-auto transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window - Responsive: Full-screen en móvil, flotante en PC */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-4 md:right-4 md:w-[400px] md:h-[600px] bg-white z-[998] flex flex-col animate-slide-up md:rounded-2xl md:shadow-2xl md:border md:border-gray-200 overflow-hidden">
          {/* Header con colores corporativos */}
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between shadow-lg md:rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Asistente Smart Clean</h3>
                <p className="text-blue-100 text-sm opacity-90">En línea • Respuesta inmediata</p>
              </div>
            </div>
            <button
              onClick={closeChat}
              className="w-10 h-10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Cerrar chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Container con scrollbar personalizada */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200"
            style={{ height: 'calc(100dvh - 140px)' }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
                    message.isBot
                      ? 'bg-blue-50 text-blue-900 rounded-bl-md border border-blue-100'
                      : 'bg-blue-600 text-white rounded-br-md hover:bg-blue-700'
                  }`}
                >
                  <div className="text-sm leading-relaxed">
                    {formatMessage(message.text)}
                  </div>
                  <div className={`text-xs mt-1 ${message.isBot ? 'text-blue-600/70' : 'text-white/70'}`}>
                    {message.timestamp.toLocaleTimeString('es-ES', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator mejorado */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-blue-50 p-3 rounded-2xl rounded-bl-md shadow-sm border border-blue-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area con colores corporativos */}
          <div className="p-4 bg-white border-t border-gray-200 md:rounded-b-2xl">
            <div className="flex items-center space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-200"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
                aria-label="Enviar mensaje"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Estilos CSS personalizados para scrollbar */}
      <style jsx>{`
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-blue-600::-webkit-scrollbar-thumb {
          background-color: #2563eb;
          border-radius: 9999px;
        }
        .scrollbar-track-gray-200::-webkit-scrollbar-track {
          background-color: #E5E7EB;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
      `}</style>
    </>
  )
}

export default ChatBot