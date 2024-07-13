import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { CiShoppingCart } from "react-icons/ci";
import DOMPurify from "dompurify"
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice";
const fetchProduct = async (productId) => {

  const response = await axios.get(`https://timbu-get-single-product.reavdev.workers.dev/${productId}`, {
      params: {
          organization_id: 'f96ae6587a304fd48610f8f375a810c1',
          Appid: 'Y5E4VX1RFSZX5ND',
          Apikey: '27beb60cd086441f9392257c35ffc2a320240713194919556965',
          // product_id:productId,
      },
  });
  return response.data;
};

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const {id} = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(id)
    const getProduct = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
          const data = await fetchProduct(id);
          console.log(data)
          setProduct(data);
          setIsEmpty(data.total === 0);
      } catch (error) {
          setIsError(true);
      } finally {
          setIsLoading(false);
      }
  };

  getProduct();
  },[id])
  const handleAddCartItem = (product) => {
    dispatch(addCartItem({
      id:product?.id,
      title:product.name,
      price:product?.current_price[0]?.KES[0],
      picture:`https://api.timbu.cloud/images/${product.photos[0].url}`,
      // color:color,
      // size:size
    }))
  }
  if (isLoading) return <div><p>Loading...</p></div>;
  if (isError) return <div>Error fetching products</div>;
  if (isEmpty) return <div>No product found</div>;
  if(product) return (
    <div className="flex items-start md:flex-row flex-col w-[80vw] justify-center">
      <div className="w-1/2 max-w-[400px]">
        <img  
        src={`https://api.timbu.cloud/images/${product.photos[0].url}`}  
        height={160} alt={product.name}                    
        className="w-[100%] object-fill " />
      </div>
      <div className="w-1/2 flex flex-col items-start gap-6">
      <h1 className="text-2xl capitalize font-semibold">{product.name}</h1>
      <div
      className="text-md tracking-wide "
         dangerouslySetInnerHTML={{
          __html:DOMPurify.sanitize(product.description),
          }}> 
      </div>
      {/* <p> KES{product?.current_price[0]?.KES[0]}</p> */}
     
      <div 
      onClick={() => handleAddCartItem(product)}
      className="bg-[coral] px-6 py-2 rounded cursor-pointer font-bold gap-2 flex items-center justify-center t-5 w-max">
        Add to Cart <CiShoppingCart className="text-2xl" />

      </div>
      </div>
    </div>
  )
}

export default ProductDetails