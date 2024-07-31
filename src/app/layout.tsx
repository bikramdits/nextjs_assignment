import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "@/styles/globals.css"
import Image from "next/image"

const font = Montserrat({ subsets: ["latin"], weight: ["400", "600", "800"] })

export const metadata: Metadata = {
  title: "Movies List",
  description: "My List of Movies",
  icons: "/icons/favicon.ico",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${font.className} relative bg-bg min-h-screen flex flex-col`}>
        {children}

        <Image priority src={"/svg/bg.svg"} alt="background" fill className="top-[unset!important] bottom-0 left-0 right-0 h-[auto_!important] z-[-1]" />
      </body>
    </html>
  )
}
