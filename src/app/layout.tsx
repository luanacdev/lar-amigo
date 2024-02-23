import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Lar amigo',
    default: 'Lar amigo',
  },
  description:
    'Há 21 anos, a Associação LAR AMIGO iniciou sua jornada como um projeto de amor e dedicação às crianças. Desde então, temos resistido e crescido, tornando-nos um ponto de referência para pais trabalhadores que buscam um ambiente seguro e educativo para seus filhos.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
