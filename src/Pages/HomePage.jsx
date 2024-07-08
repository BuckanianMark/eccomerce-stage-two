import Banner from "../components/Banner"
import BannerTwo from "../components/BannerTwo"
import Products from "../components/Products"

const HomePage = () => {
  return (
    <div className=" flex flex-col items-center w-[100vw] h-[100%] " >
        <div className="mx-auto">
            <Banner />
        </div>
        <div className="mx-auto ">
           <Products /> 
        </div>
        <div>
          <BannerTwo />
        </div>
    </div>
  )
}

export default HomePage