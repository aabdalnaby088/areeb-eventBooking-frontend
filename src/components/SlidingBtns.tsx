import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SlidingBtns({ nav }: { nav: string }) {
  return (
    <>
       {/* Custom Navigation Buttons */}
        <p  className={` p-2 custom-prev-${nav} absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full shadow hover:scale-110 transition`}>
          <ChevronLeft className="text-[#1D2134]" size={20} />
        </p>

        <p  className={`p-2 custom-next-${nav} absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white text-primary rounded-full shadow hover:scale-110 transition `}>
          <ChevronRight className="text-[#1D2134]" size={20} />
        </p>
    </>
  )
}
