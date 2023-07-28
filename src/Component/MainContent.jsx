import React from "react";
import "../index.css";

const MainContent = ({ products }) => {
  console.log(products);
  return (
    <div className="p-10 flex flex-wrap justify-evenly mb-20">
      {products.map((product) => (
        <section
          key={product.index}
          className="h-[auto] w-52 m-5 p-3 bg-white rounded-md shadow-sm "
        >
          <img src={product.image} alt="" className="p-3 w-fit h-fit"/>
          <h1 title={product.title} className="text-center font-bold">
            {product.title?.slice(0, 20)}
          </h1>
          <h3 className=" font-extrabold">NGN{product.price}</h3>
          
        </section>
      ))}
    </div>
  );
};

export default MainContent;
