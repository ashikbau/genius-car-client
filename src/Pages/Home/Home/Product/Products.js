import React, { useState } from 'react';
import { useEffect } from 'react';
import PopularProduct from '../PopularProduct/PopularProduct';

const Products = () => {
    const [products,setProducts]= useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json()
        .then(data=>setProducts(data)))
    },[])
    return (
        <div className='mt-20'>
             <div className='text-center mb-7'>
            <p className='text-2xl font-bold text-orange-600'>Popular Products</p>
            <h2 className="text-5xl font-semibold">Browse Our Products</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
        </div>
        <div  className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-7'>
            { products &&
                products.map(product=> <PopularProduct
                
                key={product._id}
                product = {product}
                ></PopularProduct>)
            }
        </div>
    
        </div>
    );
};

export default Products;