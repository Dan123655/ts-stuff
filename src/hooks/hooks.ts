import { useEffect, useState } from 'react';
import axios from 'axios'
import { IProduct } from '../models';
export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [err,setErr] = useState<string>()
   async function fetchProducts() {
     setLoading(true);setErr('')
     await  axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=7')
       .then(res => { setProducts(res.data); setLoading(false) })
       .catch((e) => { setErr(e.message); setLoading(false) })
    }
  
    
    
  useEffect(() => { fetchProducts() }, []);


  return{products,err,loading}
}