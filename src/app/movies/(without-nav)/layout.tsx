export default function WithoutNavLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="container mx-auto flex flex-1 flex-col py-16 w-[1120px] ">
      {children}
    </div>
  )
}
