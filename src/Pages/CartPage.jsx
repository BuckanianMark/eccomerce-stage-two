import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from "../components/CartItem"
import { products } from "../products";
const CartPage = () => {
  const watchCartItem = useSelector((state) => state.watch?.cartItem ?? []);
  const totalPrice = watchCartItem.reduce((acc,curr) => acc + parseInt(curr.total),0)
  const totalQty = watchCartItem.reduce((acc,curr) => acc + parseInt(curr.qty),0)
  return (
    <div className="w-[80vw] h-[100%]">
      <h1 className="text-xl font-semibold">Your Cart</h1>
      <div className="flex items-start flex-col lg:flex-row justify-center gap-[20px] ">
        <div className="lg:w-[60%] w-[100%] max-w-[700px] rounded py-4 px-3">
          {watchCartItem.length > 0 ? 
          <>
          {watchCartItem.map(el =>{
            return (
              <CartItem 
              key={el.id} 
              id={el.id}
              picture={el.picture}
              price={el.price}
              title={el.title}
              total={el.total}
              color={el.color}
              size={el.size} 
              qty={el.qty}/>
            )
          })}
          <div className="flex items-end justify-end">
            Subtotal[{totalQty} Watches] : <span className="font-semibold text-black">${totalPrice}</span> 
          </div>
          <div className="w-[80%] text-sm mt-4">Although the cart is only a temporary place to store a list of your choices and reflects most recent price, you can always trust
            the stability of our prices and avalability of our watches
          </div>
          </> 
          :
          <div className="flex flex-col items-center  gap-6">
            <h1 className="text-lg">No Items in Your Cart</h1>
            <Link to={"/"} className="bg-[coral] py-1 px-3 font-semibold rounded-2xl">Load Products</Link>
          </div>
          }
        </div>
        {watchCartItem.length > 0 &&
        <div className="lg:w-[40%] w-[100%]  max-w-[450px] rounded py-2 px-3 ">
          <div className="bg-[whitesmoke] flex items-center flex-col py-2 mb-3">
          <div className="flex items-end justify-end">
            Subtotal[{totalQty} Watches] : <span className="font-semibold text-black">${totalPrice}</span> 
          </div>
          <Link to='/checkout' className="bg-black text-white rounded-full w-max px-5 py-2">Proceed to Checkout</Link>
          </div>
          <div className="bg-[whitesmoke] relative overflow-hidden flex items-start sm:flex-row flex-col justify-between px-1 py-2 mb-3">
            <div className="font-bold text-black text-sm">
              Doclan <span className="text-[coral]"> Co.</span>
              <h2 >Exclusive Club</h2>
              <button className="bg-black text-white text-sm rounded-full  px-5 py-1">Register Now</button>
            </div>
            <div className="text-sm">
              Join Now to enjoy special offers <br />
              available only to our members
            </div>
            <div className="bg-[coral] absolute h-16 w-16 bottom-0 right-0 rotate-45 mb-[-40px] mr-[-40px]">
            </div>
          </div>
          <div className="bg-[whitesmoke] flex items-center gap-2 flex-col">
            <h1>You may also like this</h1>
              <div className="grid grid-cols-2 column gap-4 mx-auto px-auto">
              {products.slice(2, 8).map((product) => (
                <div key={product.id} className="h-[150px]"> 
                <div className="h-[80%] overflow-hidden">
                  <img src={product.picture} alt={product.title} width={100} className="" />
                </div>
                   <span className="text-sm">
                    {product.title.split(' ')[0]}
                    </span>
                </div>
              ))}
              </div>
            
          </div>
        </div>
        }
      </div> 
    </div>
  )
}

export default CartPage