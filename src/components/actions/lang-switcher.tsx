"use client"
import { useRouter } from "next/navigation"
import { appConstants, setCookie } from "@/utils"
import Image from "next/image"

const languages = [
  {
    label: "icons/british.svg",
    value: "en",
  },
  {
    label: "icons/france.svg",
    value: "fr",
  },
  {
    label: "icons/spanish.svg",
    value: "sp",
  },
]

export function LanguageSwitcher() {
  const router = useRouter()
  return (
    <div className="absolute right-6 top-6 flex gap-6">
      {languages.map((l) => {
        return (
          <Image
            key={l.value}
            onClick={(e) => {
              setCookie(appConstants.LOCALE_COOKIE, l.value)
              router.refresh()
            }}
            src={l.label}
            height={24}
            width={24}
            alt={l.value}
            className="cursor-pointer"
          />
        )
      })}
    </div>
  )
}
