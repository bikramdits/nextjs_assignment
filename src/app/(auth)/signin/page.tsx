"use client"

import { Button, Checkbox, Input } from "@/components/ui"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

enum Fields {
  EMAIL = "email",
  PASSWORD = "password",
  REMEMBER = "rememberMe",
}
// Form Type
type LoginForm = {
  [Fields.EMAIL]: string
  [Fields.PASSWORD]: string
  [Fields.REMEMBER]?: boolean
}

// Form Schema
const signInSchema = Yup.object().shape({
  [Fields.EMAIL]: Yup.string()
    .email()
    .required("Email is required")
    .min(2, "Title must be at least 2 characters long")
    .max(100, "Title must be at most 100 characters long"),
  [Fields.PASSWORD]: Yup.string()
    .required("Title is required")
    .min(2, "Title must be at least 2 characters long")
    .max(100, "Title must be at most 100 characters long"),
  [Fields.REMEMBER]: Yup.bool(),
})

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(signInSchema),
    reValidateMode: "onBlur",
  })

  const onSubmit = (data: LoginForm) => console.log(data)
  return (
    <div className="flex w-[18.75rem] flex-1 flex-col items-center justify-center gap-8 self-center">
      <h1 className="text-h1 font-semibold text-white">Sign In</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6"
      >
        <Input
          placeholder="Email"
          error={errors?.[Fields.EMAIL]?.message}
          containerStyles="w-full"
          name={Fields.EMAIL}
          register={register}
        />
        <Input
          placeholder="Password"
          error={errors?.[Fields.PASSWORD]?.message}
          name={Fields.PASSWORD}
          register={register}
        />

        <div className="flex items-center justify-center gap-x-2 text-white">
          <Checkbox
            label="Remember me"
            register={register}
            name={Fields.REMEMBER}
          />
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}
