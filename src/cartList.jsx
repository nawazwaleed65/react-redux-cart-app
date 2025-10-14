import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../Redux/slice";
import { useNavigate } from "react-router-dom";

function CartList() {
  const nag = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.cart.items);
  const [cartItem, setCart] = useState(selector);

  useEffect(() => {
    setCart(selector);
  }, [selector]);
  const quantityMang = (id, q) => {
    console.log(id, q);
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    let cartTemp = selector.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    setCart(cartTemp);
  };

  const handle = () => {
    localStorage.clear();
    dispatch(clearItem());
    nag("/");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <div className="flex justify-between border-b-2 border-gray-200">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Your Cart Items
        </h1>
        <p className="text-center text-gray-600 mb-6">
          {selector.length} items
        </p>
      </div>

      {cartItem.length > 0 ? (
        cartItem.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-center border-b-2 border-gray-200 py-4 px-3 sm:px-0 hover:bg-gray-50 transition"
          >
            <div className="flex items-center space-x-4 w-full sm:w-auto mb-3 sm:mb-0">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg border border-gray-200"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.brand}</p>
              </div>
            </div>

            <div className="flex items-center sm:space-x-6 space-y-2 sm:space-y-0">
              <input
                onChange={(e) => quantityMang(item.id, e.target.value)}
                type="number"
                placeholder="Enter quantity"
                min="1"
                className="w-40 border border-gray-300 rounded-lg px-3 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex flex-col items-center sm:items-end space-y-2">
                <span className="text-lg font-bold text-gray-700">
                  $
                  {(item.quantity
                    ? item.price * item.quantity
                    : item.price
                  ).toFixed(2)}
                </span>
                <button
                  className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                  onClick={() => dispatch(removeItem(item))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 text-lg mt-6">
          Your cart is empty
        </p>
      )}
      <div className="flex justify-end items-center mt-6 pt-4  text-lg font-semibold text-gray-800">
        Total : {""}
        {cartItem
          .reduce(
            (sum, item) =>
              item.quantity
                ? (sum = item.quantity * item.price)
                : sum + item.price,
            0
          )
          .toFixed(2)}
      </div>
      <button
        onClick={handle}
        className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
      >
        Place Where
      </button>
    </div>
  );
}

export default CartList;
