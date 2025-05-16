import HoteventSlider from '../components/HoteventSlider'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function EventsSection() {
  return (
    <section className="mx-auto flex flex-col gap-5 py-10">
        <div>
          <h1 className="max-md:text-[30px]  text-[50px] font-extrabold text-primary">Upcoming Events</h1>
        </div>
        <div className="py-10"> 
          <HoteventSlider/>
        </div>
        <div className="w-full border-b-2">
<Link
    to="/events"
    className="group bg-primary text-bg max-md:text-[15px] text-[18px] font-bold max-md:py-2 max-md:px-5 py-4 px-10 rounded-2xl shadow-md border border-primary flex items-center justify-center w-fit mb-5 gap-2 hover:gap-5 transition-all duration-300"
  >
    <span>Show All Events</span>
    <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
      <ChevronRight  size={20} />
    </span>
  </Link>
        </div>
      </section>
  )
}
