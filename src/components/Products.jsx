import { products } from "../products"
import ProductCard from "./ProductCard"

const Products = () => {
  return (
    <div className="w-[80vw] mt-3 mb-[50%]">
        <div className="mb-4 mt-4">
            <ul className="text-gray-800 flex items-start justify-start gap-3">
                <li className="text-black font-semibold">Full catalogue</li>
                <li>Leather</li>
                <li>Mechanical</li>
                <li>Limited Edition</li>
            </ul>
        </div>
        <div className="flex items-center gap-[20px] flex-wrap justify-center">
        {products.map(product => (   
            <ProductCard key={product.id} picture={product.picture} price={product.price} title={product.title} id={product.id} color={product.color} size={product.size} />
           
        ))}
        </div>
    </div>
  )
}

export default Products