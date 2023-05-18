import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
const size = [{ name: "M " }, { name: "L" }, { name: "S" }];
const ProductVariation = () => {
  const [sizes, setSizes] = useState(size[0]);
  return (
    <>
      <div className="mb-2 bg-white rounded">
        <h1 className="font-semibold mb-2 px-6 py-3">Product variation</h1>
        <div className="border border-gray-200 w-full"></div>
        <div className="p-5">
          <div className="flex gap-10 ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Colors"
              className="border focus:outline-none px-3 py-2 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductVariation;
