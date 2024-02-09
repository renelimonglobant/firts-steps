import { Carousel } from '@/components'
async function getBreedData(breed: string) {
  const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
  if (!res.ok) return []
  return res.json()
}

export default async function Specie({ params }: { params: { specie: string } }) {
  const breedData = await getBreedData(params.specie)
  return (
    <main className="flex flex-col pt-8">
      {breedData.message && <h2 className="text-center">This is a {params.specie}</h2>}
      <section>
        <div className="flex justify-center py-4">
          <div className={`${breedData.message && 'w-2/4'}`}>
            <Carousel images={breedData.message} />
          </div>
        </div>
      </section>
    </main>
  )
}
