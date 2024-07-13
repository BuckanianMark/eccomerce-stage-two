import { AiOutlineSafetyCertificate,AiTwotonePropertySafety} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
const BannerTwo = () => {
  return (
    <div>
        <div className="flex items-center md:flex-row flex-col justify-evenly gap-4 mt-6">
            <div className="bg-[whitesmoke] md:w-1/2 min-w-[250px]  w-[100%]  flex items-center justify-center overflow-hidden h-[300px] rounded">
                
                <div className="w-1/2 h-full object-contain">
                    <img src="watch10.jpeg" alt="" className="h-full"  />
                </div>
                <div className="flex w-1/2 flex-col text-center uppercase justify-center items-center px-2 mx-4">
                <h1 className="text-black font-bold text-2xl">TimeLess Series</h1>
                <p className="text-gray-800 font-[300]">HANDCRAFTED LIMITED EDITION</p>
                </div>

            </div>
            <div className="bg-[whitesmoke] md:w-1/2 min-w-[250px]   w-[100%] flex rounded  h-[300px] overflow-hidden items-center justify-center">
            <div className="w-1/2 h-full object-contain">
                <img src="watch11.jpeg" alt="" className="h-full" />
            </div>
                <div className="flex flex-col w-1/2 text-center uppercase justify-center items-center px-2 mx-4">

                <h1 className="text-black font-bold text-2xl">Rolex DAY-DATE</h1>
                <p className="text-gray-800 font-[300]">kingsmen Vii collection</p>
                </div>
            </div>
        </div>
        <div className="flex items justify-center gap-10 flex-wrap mt-6">
            <div className="flex items justify-center gap-4 bg-[whitesmoke] rounded py-3 px-4">
            <AiOutlineSafetyCertificate />
                <div >
                
               <h1 className="font-bold">Quality guaranteed</h1> 
               <p>100% Assurance on all products</p>
                </div>
            </div>
            <div className="flex items justify-center gap-4 bg-[whitesmoke] rounded py-3 px-4">
            <AiTwotonePropertySafety />
                <div >
               <h1 className="font-bold">Secured Payment</h1> 
               <p>100% secure payment option</p>
                </div>
            </div>
            <div className="flex items justify-center gap-4 bg-[whitesmoke] rounded py-3 px-4">
            <TbTruckDelivery />
                <div >
               <h1 className="font-bold">Free Delivery</h1> 
               <p>Free Deliveries across the nation</p>
                </div>
               
            </div>
            <div className="flex items justify-center gap-4 bg-[whitesmoke] rounded py-3 px-4">
                <RiCustomerService2Line />
                <div >
               <h1 className="font-bold">Support Service</h1> 
               <p>Dedicated 24/ online customer Support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerTwo