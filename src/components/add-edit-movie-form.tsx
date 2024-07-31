"use client"

import { useRouter } from "next/navigation"
import { Button, DropImage, Input } from "./ui"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

// Fields
enum Fields {
  TITLE = "title",
  YEAR = "year",
  IMAGE = "image",
}

// Form Type
type MovieFormFields = {
  [Fields.TITLE]: string
  [Fields.YEAR]: string
  [Fields.IMAGE]: File
}

// Form Schema
const movieFormSchema = Yup.object().shape({
  [Fields.TITLE]: Yup.string()
    .required("Title is required")
    .min(2, "Title must be at least 2 characters long")
    .max(100, "Title must be at most 100 characters long"),
  [Fields.YEAR]: Yup.string()
    .required("Year is required")
    .matches(/^[0-9]{4}$/, "Year must be a 4-digit number"),
  [Fields.IMAGE]: Yup.mixed<File>()
    .required("Image is required")
    .test(
      "fileSize",
      "File is too large",
      (value) => value && value.size <= 1024 * 1024 // 1MB
    )
    .test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
    ),
})

export function MovieForm({ movie }: any) {
  const isEdit = !!movie
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MovieFormFields>({
    resolver: yupResolver(movieFormSchema),
  })

  const onSubmit = (data: MovieFormFields) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-12 md:grid-cols-2"
    >
      <h2 className="mb-12 text-h2 font-semibold text-white md:col-span-2">
        {isEdit ? "Edit" : "Create a new movie"}
      </h2>

      <div className="hidden min-h-96 md:inline-block">
        <DropImage />
      </div>

      <div className="flex flex-col gap-6 md:items-start">
        <Input
          placeholder="Title"
          containerStyles="w-full"
          error={errors[Fields.TITLE]?.message}
          name={Fields.TITLE}
          register={register}
        />
        <Input
          placeholder="Publish Year"
          type="number"
          containerStyles="w-full md:w-auto"
          error={errors[Fields.YEAR]?.message}
          name={Fields.YEAR}
          register={register}
        />

        <div className="min-h-96 md:hidden">
          <DropImage />
        </div>

        <div className="mt-10 flex gap-4">
          <Button
            type="button"
            variant="secondary"
            className="w-full md:w-48"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button type="submit" className="w-full md:w-48">
            Submit
          </Button>
        </div>
      </div>
    </form>
  )
}
