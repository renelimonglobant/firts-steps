'use client'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 via-purple-500 via-40% to-blue-600 pt-5">
      <div className="flex max-w-screen-xl mx-auto">
        <section className="w-1/3">
          {/* <img src="dog-pet-black.png" /> */}
          {/* border-solid border-white-700 border-2 */}
          <Image src="/dog-pet-black.png" width={500} height={500} alt="footer: dog picture" />
        </section>
        <section className="flex flex-column items-center w-2/3">
          <div className="w-full text-white">
            <h2 className="text-center text-4xl md:text-6xl lg:text-9xl uppercase font-bold">
              Support all pets!
            </h2>
            <p className="text-right pr-3 pt-2 text-sm md:text-lg">
              Powered by{' '}
              <a
                href="https://dog.ceo/dog-api/"
                target="_blank"
                className="underline hover:text-cyan-200"
              >
                Dogs API
              </a>
            </p>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
