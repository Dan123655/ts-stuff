import axios from 'axios';
import React, { useState } from 'react'
import { IProduct } from '../models';
import Error from './Error';


const productData:IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsomething lalala',
    image: 'https://i.pravatar.cc',
    category: 'electronics',
    rating: {
        rate: 12,
        count:15
    }
}



interface CreateProductProps{
    onCreate:(product:IProduct)=>void
}






function CreateProduct({onCreate}:CreateProductProps) {

const[value,setValue]=useState('')
const[error,setError]=useState('')


    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
       setError('')





        if (value.trim().length === 0){
            setError('enter valid title')
            return
        }




        productData.title=value
        await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
            .then((res) => onCreate(res.data))
            .catch(e=>console.log(e))
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
  return (
      <form onSubmit={handleSubmit}>
          <input type="text"
              className='border py-2 px-4 mb-2  w-full outline-0'
              placeholder='enter product title'
              value={value}
              onChange={handleChange} />
          {error&&<Error err={error} />}
          <button type='submit' className='py-2 px-4 border bg-yellow-400 active:bg-yellow-500'>Create</button>
    </form>
  )
}

export default CreateProduct