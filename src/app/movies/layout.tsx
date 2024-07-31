export default function MoviesLayout({ children }: React.PropsWithChildren) {  
    return (
      <div className="flex-1 py-16 container mx-auto flex flex-col">
        {children}
      </div>
    )
  }
  