import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Next.Js Tutorial - Code evolution",
    template: "%s | code evolution",
  },
  description: "Generate by Next.js" 
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>Header</header>

        {children}

        <footer>Footer</footer>
      </body>
    </html>
  )
}
