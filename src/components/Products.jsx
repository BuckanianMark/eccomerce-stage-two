import { useEffect,useState } from "react"
//import { products } from "../products"
//import ProductCard from "./ProductCard"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios"
import { Card, Image, Text, Group, Loader, Container, Badge, Button, Center } from '@mantine/core';
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/cartSlice";


const fetchProducts = async (page) => {
  const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/', {
      params: {
          organization_id: 'f96ae6587a304fd48610f8f375a810c1',
          reverse_sort: false,
          page: page,
          size: 5,
          Appid: 'Y5E4VX1RFSZX5ND',
          Apikey: '27beb60cd086441f9392257c35ffc2a320240713194919556965',
      },
  });
  return response.data;
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const data = await fetchProducts(page);
            setProducts(data.items);
            console.log(data.items)
            setIsEmpty(data.total === 0);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    getProducts();
}, [page]);
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
if (isLoading) return <Center><Loader /></Center>;
if (isError) return <div>Error fetching products</div>;
if (isEmpty) return <div>No products found</div>;

  return (
    <div className="w-[80vw] mt-3 relative">
        <div className="mb-4 mt-4">
            <ul className="text-gray-800 flex items-start flex-wrap justify-start gap-3">
                <li className="text-black font-semibold">Full catalogue</li>
                <li>Leather</li>
                <li>Mechanical</li>
                <li>Limited Edition</li>
            </ul>
        </div>
        <Container className="flex items-center gap-[20px] flex-wrap justify-center">
            <Group>
                {products.map((product) => (
                    <Card 
                    className="md:w-[317px] h-[384px] w-[200px]   rounded-[8px] relative object-fit bg-[whitesmoke]"
                     key={product.id}
                     shadow="sm" padding="lg" 
                     radius="md" 
                     withBorder>
                        <Card.Section>
                          <Link to={product?.id}>
                          <div className="h-[80%] overflow-hidden">

                            <Image 
                            src={`https://api.timbu.cloud/images/${product.photos[0].url}`} 
                            height={160} alt={product.name} 
                            className="w-[100%] object-fill "/>
                          </div>
                          </Link>
                        </Card.Section>
                        <Group position="apart" mt="md" mb="xs">
                          <div className="ml-4 mt-2">
                            <Text className="font-bold text-black">{product.name}</Text>
                            <Badge color="pink" variant="light">
                                KES{product?.current_price[0]?.KES[0]}
                            </Badge>
                            </div>
                            <span 
                             onClick={() => handleAddCartItem(product)}
                             className="absolute bottom-0 right-0 cursor-pointer mr-2 mb-2 bg-gray-200 rounded w-10 h-10 flex items-center justify-center">
                            <BiShoppingBag />
                             </span>
                        </Group>
                        {/* <Text size="sm">{product?.description}</Text> */}
                    </Card>
                ))}
            </Group>
            <Group position="center" mt="md" className=" absolute top-0 right-0 flex items-center gap-4 justify-center">
                <Button onClick={() => setPage(page > 1 ? page - 1 : 1)} className="bg-[whitesmoke] py-1 px-3 rounded font-semibold flex items-center justify-center"><FaChevronLeft /></Button>
                <Button onClick={() => setPage(page + 1)} className="bg-[whitesmoke] py-1 px-3 rounded font-semibold"> <FaChevronRight /></Button>
            </Group>
        </Container>
    </div>
  )
}

export default Products