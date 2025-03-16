import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Meglit, we believe fashion is more than just clothing—it’s a way to express who you are. Our journey began with a passion for creating stylish, high-quality pieces that make you feel confident and empowered. With a focus on trend-driven designs and timeless essentials, we bring you a collection that blends comfort, elegance, and individuality.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We are dedicated to delivering exceptional quality and craftsmanship in every piece. Our team carefully selects premium fabrics and pays attention to every detail to ensure you get the best. Sustainability is also at the heart of what we do, as we strive to make responsible choices that reduce our impact on the planet. From ethical sourcing to eco-friendly packaging, we are committed to making fashion better for you and the world.</p>
          <b className='text-gray-800'>Join our comunity</b>
          <p>More than just a brand, we are a community of fashion lovers who celebrate self-expression and creativity. Whether you’re looking for the latest trends or timeless staples, we’re here to help you create a wardrobe that reflects your unique style. Follow us on social media, sign up for our newsletter, and be part of our journey as we continue to redefine fashion, one outfit at a time.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas expedita repudiandae sit voluptatem ut hic minus, molestiae dolore minima corrupti earum quaerat dolor cum non assumenda reiciendis rerum nulla delectus.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas expedita repudiandae sit voluptatem ut hic minus, molestiae dolore minima corrupti earum quaerat dolor cum non assumenda reiciendis rerum nulla delectus.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas expedita repudiandae sit voluptatem ut hic minus, molestiae dolore minima corrupti earum quaerat dolor cum non assumenda reiciendis rerum nulla delectus.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About