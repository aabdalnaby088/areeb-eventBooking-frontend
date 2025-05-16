
import CategorySlider from '../components/CategorySlider'

export default function CategorySection() {
  return (
    <section className="mx-auto flex flex-col gap-5 py-10">
        <div>
          <h1 className="max-md:text-[30px] text-[50px] font-extrabold text-primary ">Explore All Categories</h1>
        </div>
        <div className="py-10 border-b-2"> 
          <CategorySlider/>
        </div>
      </section>
  )
}
