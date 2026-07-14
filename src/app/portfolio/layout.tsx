// * src/app/portfolio/layout.tsx || Portfolio Layout File

export default function Layout({ 
  children
 }: Readonly<{ children: React.ReactNode }>) {
  return (<main className='mt-[3vw] mb-[50px] mx-auto font-montserrat text-[#e8e6e3] min-h-[33vw] w-[85%]'>
    {children}
  </main>);
 }