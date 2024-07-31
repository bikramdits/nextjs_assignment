import Image from "next/image"

export function LogoutAction() {
  return (
    <button className="text-base text-white font-semibold flex gap-sm">
      <span>Logout</span>
      <Image src={"/icons/logout.svg"} alt="logout" height={24} width={24} />
    </button>
  )
}
