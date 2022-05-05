import React, { useEffect, useState } from "react";

function ProductItem({ product }) {
  const addToCart = () => {
    const cart = localStorage.getItem("cart");
    if (cart === null) {
      localStorage.setItem(
        "cart",
        JSON.stringify([
          {
            product_id: product.id,
            product_name: product.alias,
            product_price: product.price,
            product_image: product.thumb,
            quantity: 1,
          },
        ])
      );
    } else {
      const cartArray = JSON.parse(cart);
      let exist = false;
      for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].product_id === product.id) {
          exist = true;
          cartArray[i].quantity++;
        }
      }
      if (!exist) {
        cartArray.push({
          product_id: product.id,
          product_name: product.alias,
          product_price: product.price,
          product_image: product.thumb,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cartArray));
    }
  };
  return (
    <div className="shadow-lg rounded-2xl  bg-white w-full m-auto p-2">
      <img
        src={process.env.API_URL + "/storage/" + product?.thumb[0]}
        alt="adidas"
        className="w-64 p-4 h-72 m-auto"
      />
      <div className=" m-3 p-4 rounded-lg">
        <p className=" text-xl font-bold ">{product?.alias}</p>
        <p className=" text-xs">{product?.description}</p>
        <div className="flex items-center justify-between ">
          <p className="">{product?.price} vnđ</p>
          <button
            type="button"
            className="w-10 h-10 text-base font-medium rounded-full   "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              className="mx-auto"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
            </svg>
          </button>
        </div>
      </div>
      <button onClick={() => addToCart()}>Add</button>
    </div>
  );
}

export default ProductItem;
