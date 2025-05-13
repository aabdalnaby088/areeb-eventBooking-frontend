import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import EventTicketCard from './EventTicketCard';
import SlidingBtns from './SlidingBtns';
import 'swiper/css';
import 'swiper/css/navigation';
export default function HoteventSlider() {
  return (
    <div className="flex flex-col justify-center md:items-start items-center relative" >
    <SlidingBtns nav='3' />
    <Swiper
    breakpoints={{
        320: {
            slidesPerView: 0.90,
        },
        1024: {
            slidesPerView: 1.75,
        },
    }}
    spaceBetween={10}
    navigation={{
        nextEl: '.custom-next-3',
        prevEl: '.custom-prev-3',
          }}
          modules={[Navigation]}
          className='w-full'
          >
        <SwiperSlide>
            <EventTicketCard/>
        </SwiperSlide>
        <SwiperSlide>
            <EventTicketCard/>
        </SwiperSlide>
        <SwiperSlide>
            <EventTicketCard/>
        </SwiperSlide>
        <SwiperSlide>
            <EventTicketCard/>
        </SwiperSlide>
        <SwiperSlide>
            <EventTicketCard/>
        </SwiperSlide>
        <SwiperSlide>
            <EventTicketCard/>
        </SwiperSlide>
    </Swiper>
        </div>
  )
}
