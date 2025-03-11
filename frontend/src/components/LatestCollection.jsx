import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    console.log(products)
    const [ latestProducts, setLatestProducts ] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div>
        <div>
            <Title text1={'LATEST '} text2={'COLLECTION'}/>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quae cupiditate perspiciatis eos rerum, culpa reprehenderit illum nam cumque id numquam voluptas recusandae quasi quam perferendis, aliquid repellat quas ab.</p>
        </div>

        {/* Rendering Products */}
        <div>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection