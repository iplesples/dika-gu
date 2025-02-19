import { useEffect, useState } from "react";
import axios from "axios";
import CheckoutModal from "../components/container/CheckoutModal";


const Card = ({product, onClick}) => {
  return (
    <div onClick={onClick}>
        <div className='w-[50vw] h-[50vw] bg-gradient-to-t from-neutral-200 via-neutral-50 to-neutral-200'>
        <img src={product.photoDisplay} alt="gambar" className='w-full h-full object-contain'/>
        </div>
        <div className='w-[50vw] h-[30.9vw] contain-layout p-3'>
            <p className='text-neutral-600 '>Size: XS M L</p>
            <h2 className='text-neutral-600 '>{product.title}</h2>
            <h1 className='italic text-neutral-600'>{product.brand}</h1>
            <p className='text-neutral-800 text-xl'>{product.price}</p>
        </div>       
    </div>
  )
}

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const API_URL = "https://dika-server.vercel.app/api/products";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleCheckout = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div>
    <h1>happy shopping</h1>
    <div className='grid grid-cols-2'>
      {products.map((product) => (
        <Card key={product._id} product={product} onClick={() => handleCheckout(product)}/>
      ))}    
    </div>
    {isModalOpen && <CheckoutModal product={selectedProduct} onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default ProductList;