import type { Metadata } from "next"
import { IBM_Plex_Mono, Syne } from "next/font/google"
import "./globals.css"

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", display: "swap" })
const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Marco Antonio Cardenas Sanchez — Desarrollador .NET y web",
  description:
    "Portafolio profesional de Marco Antonio Cardenas Sanchez: desarrollo .NET, aplicaciones web y sistemas para pequeños negocios.",
  metadataBase: new URL("https://marcoantoniocardenassanchez.github.io/Portafolio/"),
  openGraph: {
    title: "Marco Antonio Cardenas Sanchez — Desarrollador .NET y web",
    description: "Experiencia en desarrollo de software, sitios web y sistemas de punto de venta.",
    type: "website",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${syne.variable} ${plex.variable}`}>
      <body>{children}</body>
    </html>
  )
}
