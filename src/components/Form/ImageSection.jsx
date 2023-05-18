const ImageSection = () => {
  return (
    <>
      <div className="mb-2 bg-white rounded">
        <h1 className="font-semibold mb-2 px-6 py-3">Product Image</h1>
        <div className="border border-gray-200 w-full"></div>
        <div className="p-5">
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="input">
              Gallery Image <small className="text-sxs">(600x600)</small>
            </label>
            <input
              id="input"
              type="file"
              name="GalleryImage"
              placeholder="Browse"
              className="w-full md:w-[70%] border mr-8 rounded p-2 focus:outline-none focus:border-secondary focus:ring-orange-600"
            />
          </div>
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="input">
              Thumbnail Image <small className="text-sxs">(300x300)</small>
            </label>
            <input
              id="input"
              type="file"
              name="GalleryImage"
              placeholder="Browse"
              className="w-full md:w-[70%] border mr-8 rounded p-2 focus:outline-none focus:border-secondary focus:ring-orange-600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
