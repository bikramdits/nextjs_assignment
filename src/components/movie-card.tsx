import Image from "next/image"

export function MovieCard() {
  return (
    <>
      <div className="group min-h-[31rem] rounded-xl bg-card px-2 pb-4 pt-2 flex flex-col cursor-pointer hover:bg-card/55">
        <div className="relative flex-1 rounded-[inherit]">
          <Image src={"/images/dummy.jpeg"} fill alt="movie-name" className="rounded-[inherit]" />
        </div>

        <div className="flex flex-col gap-2 px-2 mt-4">
          <h6 className="text-h5 font-medium text-white group-hover:font-semibold">Movie Name</h6>
          <p className="text-sm text-white">2021</p>
        </div>
      </div>
    </>
  )
}
