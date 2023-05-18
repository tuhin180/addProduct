import ImageSection from "./Form/ImageSection";
import GeneralSection from "./Form/GeneralSection";
import ProductVideos from "./Form/ProductVideos";
import ProductVariation from "./Form/ProductVariation";
import ProductPriceStock from "./Form/ProductPriceStock";

const AddProduct = () => {
  return (
    <div className="bg-gray-200  p-6">
      <h1 className="  py-3 "> Add New product </h1>
      <div className=" md:flex md:gap-2">
        <div className="md:flex-initial  md:w-[70%]">
          <div className="flex flex-col">
            <form className="">
              {/* general info section  */}
              <GeneralSection />
              {/* image sectio  */}
              <ImageSection />

              {/* videos section  */}
              <ProductVideos />

              {/* product variation  */}
              <ProductVariation />

              {/* product price and stock  */}
              <ProductPriceStock />
              <input
                className="bg-secondary px-3 py-3 rounded-md text-white"
                type="submit"
                value="save & unpublish"
              />
              <button className=" ml-2  bg-primary  px-3 py-3 rounded-md text-white">
                save & publish
              </button>
            </form>
          </div>
        </div>
        <div className="md:flex-initial  md:w-[30%] bg-white p-4 rounded">
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
