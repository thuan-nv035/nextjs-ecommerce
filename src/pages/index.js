import React, { useEffect } from "react";
import Slide from "../components/Slide";
import Selling from "../components/Selling";
import ProductItem from "../components/ProductItem";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getHotProducts, getSellingProducts } from "../actions/product";
import { getArticle } from "../actions/article";


const Index = () => {
  const sellingProducts = useSelector(
    (state) => state.product.productSelling.data.data
  );
  const hotProducts = useSelector(
    (state) => state.product.productHot.data.data
  );
  const article = useSelector((state) => state.article.article.data.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSellingProducts());
    dispatch(getHotProducts());
    dispatch(getArticle());
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <NavBar />

        <div className="mt-8">
          <Slide pape_type={0} />
        </div>

        <div className="mt-8">
          <div className="text-3xl  w-full ml-4 pt-8 pb-4 uppercase">
            {" "}
            San pham ban chay{" "}
          </div>
          <Selling sellingProducts={sellingProducts} />
        </div>

        <div className="mt-8 ">
          <div className="text-3xl  w-full ml-4 pt-8 pb-4 uppercase">
            san pham hot
          </div>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {(hotProducts || []).map((item, index) => {
              return (
                
                  <div key={index}>
                    <ProductItem product={item} />
                  </div>

              );
            })}
          </div>
        </div>

        <div className="mt-8 relative">
          <div className="text-3xl w-full ml-4 pt-8 pb-4 uppercase">
            Bai viet
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {(article || []).map((item, index) => (
            <ProductItem product={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
