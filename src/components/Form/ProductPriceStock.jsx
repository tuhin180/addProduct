const ProductPriceStock = () => {
  return (
    <>
      <div className="mb-2 bg-white rounded">
        <h1 className="font-semibold mb-2 px-6 py-3">Product Price + stock</h1>
        <div className="border border-gray-200 w-full"></div>
        <div className="p-5">
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">
              Unit Price <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              id="product"
              type="number"
              name="name"
              placeholder="0"
              className="w-full md:w-[70%] border mr-8 rounded p-2 focus:outline-none focus:border-secondary focus:ring-orange-600"
            />
          </div>
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">
              Discount <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              id="product"
              type="date"
              name="date"
              placeholder="0"
              className="w-full md:w-[70%] border mr-8 rounded p-2 focus:outline-none focus:border-secondary focus:ring-orange-600"
            />
          </div>
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">
              Discount <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              id="product"
              type="date"
              name="date"
              placeholder="0"
              className="w-full md:w-[70%] border mr-8 rounded p-2 focus:outline-none focus:border-secondary focus:ring-orange-600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPriceStock;
