import '../styles/globals.scss'

export const metadata = {
  title: 'SujeitoPizza - Faça seu login',
  description: 'pizzaria sujeito',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
