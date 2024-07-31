"use client";

import Image from "next/image"
import { useRef } from "react"

export function DropImage() {
  const inputEl = useRef<HTMLInputElement>(null);

  return (
    <div className="relative h-full flex flex-col items-center justify-center rounded-lg border border-dashed border-white bg-input">
      <input
        ref={inputEl}
        type="file"
        accept="image/*"
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
    </div>
  )
}
