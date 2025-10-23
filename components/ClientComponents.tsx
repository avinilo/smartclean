'use client'

import dynamic from 'next/dynamic'

// Lazy loading para componentes no críticos (mejora Core Web Vitals)
export const CookieBanner = dynamic(() => import('@/components/CookieBanner'), {
  ssr: false,
  loading: () => null
})

export const ChatBot = dynamic(() => import('@/components/ChatBot'), {
  ssr: false,
  loading: () => null
})