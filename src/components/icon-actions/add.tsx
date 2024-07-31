import Image from "next/image"
import Link from "next/link"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

type AddIconActionProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  height?: number
  width?: number
  link?: string
}

export function AddIconAction(props: AddIconActionProps) {
  const { height = 32, width = 32, link, ...other } = props

  if (!!link) {
    return (
      <Link href={link} className={other.className}>
        <Image
          src={"/icons/add-icon.svg"}
          height={height}
          width={width}
          alt="add-icon"
        />
      </Link>
    )
  }
  return (
    <button {...other}>
      <Image
        src={"/icons/add-icon.svg"}
        height={height}
        width={width}
        alt="add-icon"
      />
    </button>
  )
}
