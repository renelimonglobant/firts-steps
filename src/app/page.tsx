// import Image from 'next/image'
// import Link from 'next/link'
import { Accordion, AccordionItem } from '@/components'
async function getBreedsData() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all')
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Home() {
  const beedsData = await getBreedsData()

  return (
    <main className="flex">
      <section className="w-2/5">
        <div className=" max-h-[600px] overflow-y-scroll">
          <Accordion
            list={
              Object.entries(beedsData?.message).map((breed) => ({
                name: breed[0],
                species: breed[1],
              })) as AccordionItem[]
            }
          />
        </div>
      </section>
      <section className="w-full">hol</section>
      {/* <section className="w-full border-solid border-white-700 border-2">hol</section> */}
    </main>
  )
}
