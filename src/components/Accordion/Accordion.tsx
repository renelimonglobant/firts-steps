'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AccordionProps, AccordionItem } from './Accordion.types'

const Accordion = ({ list }: AccordionProps) => {
  // const [itemlist, setItemList] = useState(list)
  const [checked, setChecked] = useState('')

  return (
    <section className="pt-5">
      {list.map((item) => (
        <div key={item.name} className="relative mb-1">
          <h6 className="mb-0">
            <button
              className="relative flex items-center w-full py-1.5 px-2 rounded-tl-lg rounded-tr-md font-semibold text-left transition-all ease-in  cursor-pointer text-white text-dark-500 bg-gradient-to-t from-slate-600 to-slate-700"
              data-collapse-target="collapse-2"
              onClick={() => setChecked(checked === item.name ? '' : item.name)}
            >
              <span>{item.name}</span>
              <i
                className={`absolute right-0 pt-1 pr-3 text-xs opacity-${
                  checked === item.name ? '0' : '1'
                }`}
              >
                +
              </i>
              <i
                className={`absolute right-0 pt-1 pr-3 text-xs opacity-${
                  checked === item.name ? '1' : '0'
                } transition-all`}
              >
                -
              </i>
            </button>
          </h6>
          <div
            data-collapse="collapse-2"
            className={`overflow-hidden transform transition-[height] duration-500 ease-in-out  ${
              checked === item.name ? 'h-32 border-solid border-slate-200 border' : 'h-0'
            }`}
          >
            <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
              <ul>
                {item.species.length ? (
                  item.species.map((specie) => (
                    <li key={specie}>
                      <Link href={`species/${specie}`}>{specie}</Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link href={`species/${item.name}`}>{item.name}</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export { type AccordionItem }
export default Accordion
