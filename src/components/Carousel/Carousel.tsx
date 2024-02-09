'use client'
import { useState } from 'react'
import Image from 'next/image'
import { CarouselProps } from './Carousel.types'

const Carousel = ({ images }: CarouselProps) => {
  const [active, setActive] = useState(1)

  return (
    <section className="pt-5">
      <div id="controls-carousel" className="relative w-full" data-carousel="static">
        {images ? (
          <>
            <div className="relative h-80 overflow-hidden rounded-lg md:h-[33rem]">
              {images.map((image, i) => (
                <div
                  className={`${
                    active === i ? ' opacity-100' : 'opacity-0'
                  }  transform transition-[opacity] duration-700 ease-in-out`}
                  data-carousel-item={active === i ? 'active' : ''}
                  key={image + i}
                >
                  <Image
                    src={image}
                    width={1000}
                    height={1000}
                    className="absolute block w-full h-auto"
                    // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none bg-gradient-to-r from-black/50 to-slate-50/5"
              data-carousel-prev
              onClick={() => setActive(active === 1 ? images.length : active - 1)}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none  bg-gradient-to-r from-slate-50/5 to-black/50"
              data-carousel-next
              onClick={() => setActive(active === images.length ? 1 : active + 1)}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </>
        ) : (
          <h2 className="pb-10 font-bold text-4xl">
            Oops, it seems there is not available photos. Try another one!
          </h2>
        )}
      </div>
    </section>
  )
}

export default Carousel
