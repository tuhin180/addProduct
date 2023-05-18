import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
const provider = [{ name: "Youtube " }, { name: "vimeo" }];
const ProductVideos = () => {
  const [selectedProvider, setSelectedProvider] = useState(provider[0]);
  return (
    <>
      <div className="mb-2 bg-white rounded">
        <h1 className="font-semibold mb-2 px-6 py-3">Product videos</h1>
        <div className="border border-gray-200 w-full"></div>
        <div className="p-5">
          <div className=" md:flex md:justify-between my-4 ">
            <label htmlFor="input">Video Provider</label>
            <Listbox value={selectedProvider} onChange={setSelectedProvider}>
              <div className="relative mt-1 md:w-[70%] w-full mr-8 ">
                <Listbox.Button className="relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left border sm:text-sm focus:outline-none focus:border-secondary focus:ring-orange-600">
                  <span className="block truncate">
                    {selectedProvider.name}
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
                    {provider.map((person, personIdx) => (
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
                        {({ selectedProvider }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selectedProvider ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selectedProvider ? (
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
            <label htmlFor="input">
              Video Link <small className="text-sxs"></small>
            </label>
            <input
              id="text"
              type="text"
              name="GalleryImage"
              placeholder="Video Link"
              className="w-full md:w-[70%] border mr-8 rounded p-2 focus:outline-none focus:border-secondary focus:ring-orange-600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductVideos;
