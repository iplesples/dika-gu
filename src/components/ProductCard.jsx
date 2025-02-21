
function ProductCard({ product, onClick }) {
  return (
    <div className=" backdrop-blur-sm shadow-black shadow-sm p-5 rounded-2xl cursor-pointer hover:shadow-lg transition w-full h-auto">
      <img src={product.photoDisplay} alt={product.title} className="w-80% h-auto object-cover rounded-2xl shadow-black shadow-sm" />
      <div className="flex justify-around">
        <div>
          <h2 className="mt-2 font-bold text-slate-100">{product.title}</h2>
          <p className="text-gray-600">{product.brand}</p>
          <p className="mt-1 text-black text-lg">Rp {product.price}</p>
        </div>
        <button onClick={onClick} className="bg-red-800 text-slate-100 p-2 box-content">Buy now</button>
      </div>
      
    </div>
  );
}

export default ProductCard;
