import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps{
    product:IProduct
}

// export const Product = (props: ProductProps) => {
export const Product = ({ product }: ProductProps) => {
    

    const [details,setDetails]=useState(false)
    const btnClassName = details ? "bg-gray-400" : "bg-yellow-400";
    const btnClasses =["py-2 px-4 border",btnClassName]
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} alt={product.title} className="w-1/6" />
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button
                className={btnClasses.join(" ")}
                onClick={() => setDetails(!details)}>
                {details?'show less':'details'}
            </button>
            <div>
                {details && <p>{product.description}</p>}
                <p>rate:<span style={{fontWeight:'bold'}}>{product.rating?.rate}</span>
                </p>
            </div>
    </div>
)
}