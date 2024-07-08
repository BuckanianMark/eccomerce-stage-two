import Banner from "../components/Banner"
import Products from "../components/Products"

const HomePage = () => {
  return (
    <div className=" flex flex-col items-center w-[100vw] h-[150vh] " >
        <div className="mx-auto">
            <Banner />
        </div>
        <div className="mx-auto ">
           <Products /> 
        </div>
    </div>
  )
}

export default HomePage