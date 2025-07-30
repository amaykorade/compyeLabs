import './globals.css'

export const metadata = {
  title: 'Compye Agency - SaaS MVP & Full Product Development',
  description: 'Launch your SaaS MVP in just 15 days with AI-ready features. We build fast, scalable MVPs and full SaaS products for ambitious founders.',
  keywords: 'SaaS MVP, product development, AI integration, startup, founder, web development',
  authors: [{ name: 'Compye Agency' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="animated-bg">
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        {children}
      </body>
    </html>
  )
}
