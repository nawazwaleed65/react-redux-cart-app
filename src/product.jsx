import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/productSlice';
import { addItem, removeItem } from '../Redux/slice';

function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const selector = useSelector((state)=>state.cart.items)

  console.log(selector);

 
  const productSelector = useSelector((state) => state.products.items || []);

  console.log(productSelector);

  return (
    <div>
      
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4'>
          {productSelector.length > 0 ? (
            productSelector.map((item) => (
              <div 
                key={item.id} 
                className="border p-4 rounded flex flex-col hover:shadow-lg hover:scale-105"
                tabIndex={0} 
              >
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-40 object-cover rounded mb-3" 
                />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-1">Brand: {item.brand}</p>
                  <p className="text-gray-800 font-medium mb-1">Price: ${item.price}</p>
                  <p className="text-yellow-500 mb-3">Rating: {item.rating}</p>
                  {
                    selector.find(cartItem=>cartItem.id===item.id)?
                    <button 
                    onClick={()=>dispatch(removeItem(item))}
                    className="bg-red-600 text-white px-4 py-2 rounded mt-auto hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                  >
                    Add To Cart
                  </button>
                  :
                  <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded mt-auto hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    onClick={()=>dispatch(addItem(item))}
                  >
                    Add To Cart
                  </button>
                  }
                  
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center py-8">Loading products...</p>
          )}
       </div>
    </div>

  );
}

export default Product;




{/* <button onClick={()=>dispatch(clearItem())} className="bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700">
          Clear Cart
      </button> */}


      {/* <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl mx-auto mt-10 p-6 space-y-6 md:space-y-0 md:space-x-8 hover:shadow-xl transition-shadow duration-300">
        
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://24hours.pk/cdn/shop/products/cover_-_2020-02-04T170517.506.jpg?v=1581198737"
            alt="product"
            className="rounded-lg object-cover h-60 w-full md:h-64"
          />
        </div>

        <div className="flex flex-col justify-center w-full md:w-2/3 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Wireless Headphone</h1>
          <p className="text-orange-500 text-2xl font-semibold">$129.99</p>
          <p className="text-gray-600 leading-relaxed text-justify">
            At <span className="font-semibold text-blue-700">FarmFresh Market</span>, we believe in delivering
            quality products directly from farms to your doorstep. Our platform connects
            local farmers with customers, ensuring fresh, organic, and affordable goods for everyone.
            We take pride in supporting small farms, promoting sustainability, and enhancing
            community well-being through fair trade practices.
          </p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full w-1/2 md:w-1/3 hover:bg-blue-700 transition-colors duration-300" onClick={()=>dispatch(addItem(1))}>
            Add to Cart
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full w-1/2 md:w-1/3 hover:bg-blue-700 transition-colors duration-300" onClick={()=>dispatch(removeItem(1))}>
            Remove to Cart
          </button>
        </div>
      </div> */}