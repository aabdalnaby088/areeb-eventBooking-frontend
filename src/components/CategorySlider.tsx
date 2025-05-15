import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SlidingBtns from './SlidingBtns';
import 'swiper/css';
import 'swiper/css/navigation';
import CategoryCard from './CategoryCard';
export default function CategorySlider() {
  return (
    <div className="flex flex-col justify-center md:items-start items-center relative" >
    <SlidingBtns nav='2' />
    <Swiper
    breakpoints={{
        320: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3.50,
        },
    }}
    spaceBetween={10}
    navigation={{
        nextEl: '.custom-next-2',
        prevEl: '.custom-prev-2',
          }}
          modules={[Navigation]}
          className='w-full'
          >
        <SwiperSlide>
            <CategoryCard category='Music' />
        </SwiperSlide>
        <SwiperSlide>
            <CategoryCard category='Sports'/>
        </SwiperSlide>
        <SwiperSlide>
            <CategoryCard category='Art' />
        </SwiperSlide>
        <SwiperSlide>
            <CategoryCard category='Business' />
        </SwiperSlide>
        <SwiperSlide>
            <CategoryCard category='Tech'/>
        </SwiperSlide>
        
        
    </Swiper>
        </div>
  )
}
