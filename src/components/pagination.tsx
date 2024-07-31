"use client"

import { cn } from "@/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

type PaginationProps = {
  numberOfPages: number
}
const PAGE_PARAM = "pageNum"
export function Pagination(props: PaginationProps) {
  const { numberOfPages } = props
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const pageNum = params.get(PAGE_PARAM) || 1

  const onPageChange = (pageNum: number) => {
    const newPage = pageNum > 0 ? pageNum.toString() : "1"
    router.push(pathname + "?" + createQueryString(PAGE_PARAM, newPage))
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const newParams = new URLSearchParams(params.toString())
      newParams.set(name, value)

      return newParams.toString()
    },
    [params]
  )

  return (
    <div className="flex items-center justify-start gap-4">
      <button
        className="font-base font-semibold text-white disabled:cursor-not-allowed disabled:bg-opacity-60"
        disabled={+pageNum === 1}
        onClick={() => {
          onPageChange(+pageNum - 1)
        }}
      >
        Prev
      </button>

      <div className="flex gap-2">
        {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((num) => {
          return (
            <PageBlock
              pageNum={num}
              onClick={(num) => {
                onPageChange(num)
              }}
              isSelected={num === +pageNum}
              key={`${num}`}
            />
          )
        })}
      </div>

      <button
        disabled={+pageNum === numberOfPages}
        onClick={() => {
          onPageChange(+pageNum + 1)
        }}
        className="font-base font-semibold text-white disabled:cursor-not-allowed disabled:bg-opacity-60"
      >
        Next
      </button>
    </div>
  )
}

function PageBlock({
  pageNum,
  onClick,
  isSelected,
}: {
  pageNum: number
  isSelected: boolean
  onClick: (pageNum: number) => void
}) {
  const clsnm = cn(
    "h-8 w-8 rounded-sm text-white font-bold",
    isSelected ? "bg-primary" : "bg-card"
  )
  return (
    <button className={clsnm} onClick={() => onClick(pageNum)}>
      {pageNum}
    </button>
  )
}
