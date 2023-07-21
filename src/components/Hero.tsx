import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules'

import swiper1 from '../assets/book-cover-1.png'
import swiper2 from '../assets/book-cover-2.png'
import swiper3 from '../assets/book-cover-3.jpg'
import swiper4 from '../assets/book-cover-4.jpg'
import featuredimg from '../assets/hardcover.png'

const Hero = () => {
  return (
    <div className='my-4 mx-2'>
      <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 4500,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src={swiper1} alt="" className='rounded-2xl'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src={swiper2} alt="" className='rounded-2xl'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src={swiper3} alt="" className='rounded-2xl'/>
    </SwiperSlide>
    <SwiperSlide>
      <div className="">
      <img src={swiper4} alt="" className='rounded-2xl' />
      <img src={featuredimg} className='absolute md:top-5 top-2 w-1/4 right-20' />
    </div>
    </SwiperSlide>
  </Swiper>
    </div>
  )
}
export default Hero
