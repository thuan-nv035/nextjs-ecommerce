import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Slide from "../../components/Slide";
import ProductItem from "../../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/product";
import { getCategory } from "../../actions/category";

function Index(props) {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.product.data.data);
  const listCategory = useSelector(
    (state) => state.category.category.data.data
  );
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategory());
  }, []);

  const getFilterProduct = (id) => {
      
  };

  return (
    <div className="container mx-auto space-y-4">
      <NavBar />
      <Slide page_type={2} />
      <div>
        <div>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                <form className="hidden lg:block">
                  {(listCategory || []).map(
                    (listCategoryItem, listCategoryIndex) => {
                      return (
                        <ul key={listCategoryIndex}>
                          <li
                            onClick={() =>
                              getFilterProduct(listCategoryItem.id)
                            }
                          >
                            {listCategoryItem.name}
                          </li>
                        </ul>
                      );
                    }
                  )}
                </form>
                <div className="lg:col-span-3">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full">
                    {(listProduct || []).map((item, index) => {
                      return (
                        <div key={index}>
                          <ProductItem product={item} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Index;
