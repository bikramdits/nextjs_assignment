import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "@/styles/globals.css"
import Image from "next/image"
import { Toaster } from 'react-hot-toast';

const font = Montserrat({ subsets: ["latin"], weight: ["400", "600", "800"] })

export const metadata: Metadata = {
  title: "Movies List",
  description: "My List of Movies",
  icons: "/icons/favicon.ico",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${font.className} relative bg-bg min-h-screen flex flex-col px-4 md:px-0`}>
        {children}

        <Image priority src={"/images/bg.png"} alt="background" fill className="h-[8rem_!important] md:h-[15rem_!important] top-[unset!important] bottom-0 left-0 right-0 -z-10" />
        <Toaster/>
      </body>
    </html>
  )
}
