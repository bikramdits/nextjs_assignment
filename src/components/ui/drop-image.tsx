"use client"

import Image from "next/image"
import { ChangeEvent, DragEvent, useRef, useState } from "react"

type DropImageProps = {
  image: string
  onImageChange: (image: File | undefined) => void
}
export function DropImage({ image, onImageChange }: DropImageProps) {
  const inputEl = useRef<HTMLInputElement>(null)

  const onImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 0) {
      return
    }

    onImageChange(e.target.files?.[0])
  }

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      className="relative flex h-full flex-col items-center justify-center rounded-lg border border-dashed border-white bg-input"
    >
      {image && image.length > 0 ? (
        <>
          <Image
            src={image}
            fill
            alt="add-image"
            className="rounded-[inherit]"
          />

          <button
            onClick={() => onImageChange(undefined)}
            className="relative -top-4 left-4 mb-auto h-8 w-8 self-end rounded-full bg-error p-1"
          >
            <Image
              src={"/icons/cancel.svg"}
              fill
              alt="cancel-image"
              className="tint-red"
            />
          </button>
        </>
      ) : (
        <>
          <input
            ref={inputEl}
            type="file"
            accept="image/*"
            onChange={onImageSelect}
            className="absolute inset-0 opacity-0"
          />

          <div className="flex flex-col items-center gap-1">
            <Image
              src={"/icons/file.svg"}
              width={"16"}
              height={"16"}
              alt="add-image"
            />
            <p className="text-sm text-white ">Drop an image here</p>
          </div>
        </>
      )}
    </div>
  )
}
