import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <ScrollAnimation animateIn="animate__backInUp" duration={2} delay={1}>
        <div className='overflow-hidden'>
          <img className='hover:scale-110 transition ease-in-out w-72 h-96 object-cover' src={image[0]} alt="" />
        </div>
      </ScrollAnimation>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{price} {currency}</p>
    </Link>
  )
}

export default ProductItem