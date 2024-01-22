'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const pathname = usePathname()
  const paths = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
  ]
  return (
    <header className="bg-gradient-to-r from-blue-500 to-transparent">
      {/* <header className="bg-emerald-400 sm:bg-orange-500 md:bg-red-400 lg:bg-indigo-700"> */}
      {/* <header className="bg-slate-400"> */}
      {/* border-solid border-white-700 border-2 */}
      {/* max-w-2xl  lg:w-11/12 */}
      <nav className="flex justify-between w-full max-w-screen-xl mx-auto px-2">
        <div>
          <Link href={'/'} className="inline-block">
            <Image src="/dog-footprints.png" width={50} height={50} alt="logo, dog footprint" />
          </Link>
        </div>
        <ul className="flex">
          {paths.map((path) => (
            <li key={path.title} className="self-center">
              <Link
                href={path.link}
                className={`ml-8 font-bold ${
                  pathname === path.link ? 'text-cyan-600' : 'text-cyan-500'
                }`}
              >
                {path.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
