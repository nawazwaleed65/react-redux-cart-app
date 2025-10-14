import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

function AddToCart() {

    // const selector = useSelector((state) => state.cart.value);
    const selector = useSelector((state)=>state.cart.items)

    console.log(selector);
    return (
        <div className="relative inline-block">
            <Link to='/cart'>
                <FaShoppingCart className="text-3xl text-blue-600 cursor-pointer hover:text-blue-700 transition-colors duration-300" />

                {/* <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{selector}</span> */}

                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{selector.length?selector.length:0}</span>
            </Link>
        </div>
    );
}

export default AddToCart;
