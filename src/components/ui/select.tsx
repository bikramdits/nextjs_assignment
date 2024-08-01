import { cn } from "@/utils"
import { DetailedHTMLProps, SelectHTMLAttributes } from "react"
import { UseFormRegister } from "react-hook-form"

type SelectProps = {
  error?: string
  containerStyles?: string
  options: { label: string; value: string }[]
  name: string
  register: UseFormRegister<any>
} & DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>
export function Select(props: SelectProps) {
  const { error, options, containerStyles, name, register, ...other } = props
  const styles = cn(
    "min-w-[12rem] bg-input text-white rounded-lg h-2xl px-4 outline-none border border-transparent active:border-input",
    error ? "border-error text-error" : "",
    props.className
  )
  return (
    <div className={cn("flex flex-col", containerStyles)}>
      <select className={styles} {...other} {...register(name)}>
        {options.map((opt) => {
          return <option value={opt.value}>{opt.label}</option>
        })}
      </select>
      <p className="text-2xs text-error ml-1.5">{error}</p>
    </div>
  )
}
