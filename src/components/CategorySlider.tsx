import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SlidingBtns from './SlidingBtns';
import 'swiper/css';
import 'swiper/css/navigation';
import CategoryCard from './CategoryCard';
import musicCategory from '/MusicCategory.jpg';
import sportsCategory from '/sportCategory.jpg';
import techCategory from '/techCategory.jpg';
import artCategory from '/artCategory.jpg';
import businessCategory from '/businessCategory.jpg';
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
            <CategoryCard image= {musicCategory} category='Music'/>
        </SwiperSlide>
        <SwiperSlide>
            <CategoryCard image={sportsCategory} category='Sports'/>
        </SwiperSlide>
        <SwiperSlide>
            <CategoryCard image= {techCategory} category='Tech'/>
        </SwiperSlide>
        <SwiperSlide>
            <CategoryCard image= { artCategory} category='Art'/>
        </SwiperSlide>
        <SwiperSlide>
            <CategoryCard category='Business' image={businessCategory}/>
        </SwiperSlide>
        
        
    </Swiper>
        </div>
  )
}
