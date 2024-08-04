// components/Cart.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { 
  toggleCheck, 
  toggleCheckAll, 
  deleteProduct, 
  deleteAll, 
  incrementQuantity, 
  decrementQuantity, 
  calculateTotal 
} from '../../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, total } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [data, dispatch]);

  return (
    <>
      <div className="absolute left-44 top-32">
        <h1 className="text-3xl font-bold">My Cart</h1>
      </div>
      <div className="flex">
        <div className="">
          <div className="w-[900px] h-[70px] ml-40 mt-24 rounded-lg border-black border">
            <input
              className="ml-5 mt-4"
              type="checkbox"
              onChange={() => dispatch(toggleCheckAll())}
            />
            <label className="ml-5 mt-4">Select All</label>
            <button
              className="absolute left-[64%] p-2 mt-3 bg-black text-white rounded-3xl border-black border"
              onClick={() => dispatch(deleteAll())}
            >
              Delete
            </button>
          </div>
          {data.map((product) => (
            <div
              key={product.id}
              className="flex w-[900px] h-[120px] ml-40 mt-5 rounded-lg border-black border"
            >
              <input
                className="ml-5"
                type="checkbox"
                checked={product.isChecked}
                onChange={() => dispatch(toggleCheck(product.id))}
              />
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-[70px] h-[70px] ml-5 mt-5 rounded-sm object-cover"
              />
              <h1 className="ml-5 mt-10">{product.name}</h1>
              <div className="absolute left-[63%] mt-10 text-red-500">
                {product.price.toLocaleString("vi-VN")}đ
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute left-[60%] mt-10 "
                onClick={() => dispatch(deleteProduct(product.id))}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
              <div className="absolute left-[60%] mt-[80px] flex justify-center rounded-md border-black border">
                <button
                  className="w-10 h-5"
                  onClick={() => dispatch(incrementQuantity(product.id))}
                >
                  +
                </button>
                <span className="">{product.quantity}</span>
                <button
                  className="w-10 h-5"
                  onClick={() => dispatch(decrementQuantity(product.id))}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[250px] h-[150px] ml-20 mt-24 rounded-lg border-black border">
          <h3 className="ml-5 mt-4 font-bold">Summary Order</h3>
          <div className="flex">
            <p className="ml-5 mt-4">Subtotals:</p>
            <p className="ml-10 mt-4 text-red-500">
              {total.toLocaleString("vi-VN")}đ
            </p>
          </div>
          <button className="w-[97%] m-1 mt-4 bg-black text-white p-2 rounded-3xl border-black border">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
