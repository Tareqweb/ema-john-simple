import React, { useState ,useEffect} from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import WhatItem from '../WhatItem/WhatItem';


const Review = () => {
    const[cart, setCart]=useState([]);
    useEffect(()=>{
        const savedCart=getDatabaseCart(); 
        const productKeys=Object.keys(savedCart);

         const cartProducts=productKeys.map(key=> {
             const product=fakeData.find(pd=>pd.key === key);
             product.quantity=savedCart[key];
             return product;
                 });
                setCart(cartProducts);
    },[])
    return (
        <div>
            <h1>Cart items:{cart.length}</h1>
            {
                cart.map(pd => <WhatItem
                key={pd.key}
                 product={pd}></WhatItem>)
            }


           
        </div>
    );
};

export default Review;