import { products } from "../products"
import ProductCard from "./ProductCard"

const Products = () => {
  return (
    <div className="w-[80vw] mt-3 ">
        <div className="mb-4 mt-4">
            <ul className="text-gray-800 flex items-start flex-wrap justify-start gap-3">
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
        <div className="w-[100%] flex items-center mt-8 justify-center">

        <button className="bg-black rounded-full py-3 px-8 mx-auto text-white">load more</button>
        </div>
    </div>
  )
}

export default Products