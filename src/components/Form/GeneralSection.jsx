import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Taginput from "./Taginput";
import Toggle from "../Toggle";
const people = [
  { name: "Women Clothing & fashion " },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
const peoples = [
  { name: "Unit (e.g.KG, Pc etc)" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
const GeneralSection = () => {
  const [selectedCategory, setSelectedCaegory] = useState(people[0]);
  const [selecteds, setSelecteds] = useState(peoples[0]);
  return (
    <div>
      <div className="mb-2  bg-white  rounded">
        <h1 className="font-semibold mb-2 px-6 py-3">Product Information</h1>
        <div className="border border-gray-200 w-full"></div>
        <div className="p-5">
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">
              Product Name <span className="text-red-600 font-bold">*</span>{" "}
            </label>
            <input
              id="product"
              type="text"
              name="name"
              placeholder="Product Name"
              className="w-full md:w-[70%] border mr-8 rounded p-2 focus:outline-none focus:border-secondary focus:ring-orange-600"
            />
          </div>
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">
              Category <span className="text-red-600 font-bold">*</span>
            </label>
            <Listbox value={selectedCategory} onChange={setSelectedCaegory}>
              <div className="relative mt-1 md:w-[70%] w-full mr-8 ">
                <Listbox.Button className="relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left border sm:text-sm focus:outline-none focus:border-secondary focus:ring-orange-600">
                  <span className="block truncate">
                    {selectedCategory.name}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute my-2 w-full overflow-auto rounded-md bg-white py-2 text-base border py-  ring-1 ring-black ring-opacity-5 focus:outline-none  sm:text-sm">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">Brand</label>
            <Listbox value={selecteds} onChange={setSelecteds}>
              <div className="relative mt-1 md:w-[70%] w-full mr-8 ">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm focus:outline-none focus:border-secondary focus:ring-orange-600">
                  <span className="block truncate">{selecteds.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute my-2 w-full overflow-auto rounded-md bg-white py-2 text-base border py-  ring-1 ring-black ring-opacity-5 focus:outline-none  sm:text-sm">
                    {peoples.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">Unit</label>
            <input
              id="product"
              type="text"
              name="Unit"
              placeholder=""
              className="w-full md:w-[70%] border mr-8 rounded p-2 focus:outline-none focus:border-secondary focus:ring-orange-600"
            />
          </div>
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">
              Weight <small>(in kg)</small>
            </label>
            <input
              id="product"
              type="text"
              name="weight"
              placeholder="0.00"
              className="w-full md:w-[70%] border mr-8 rounded p-2 focus:outline-none focus:border-secondary focus:ring-orange-600"
            />
          </div>
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">
              Minimum Purchase Qty{" "}
              <span className="text-red-600 font-bold">*</span>
            </label>
            <input
              id="product"
              type="text"
              name="qty"
              placeholder="1"
              className="w-full md:w-[70%] border mr-8 rounded p-2 focus:outline-none focus:border-secondary focus:ring-orange-600"
            />
          </div>
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">
              Tag <span className="text-red-600 font-bold">*</span>
            </label>
            <Taginput />
          </div>
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">
              Barcode <span className="text-red-600 font-bold">*</span>{" "}
            </label>
            <input
              id="product"
              type="text"
              name="name"
              placeholder="Barcode"
              className="w-full md:w-[70%] border mr-8 rounded p-2 focus:outline-none focus:border-secondary focus:ring-orange-600"
            />
          </div>
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="Product">
              Refundable <span className="text-red-600 font-bold">*</span>{" "}
            </label>
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;
