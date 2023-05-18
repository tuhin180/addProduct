import { useState } from "react";

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && inputValue) {
      event.preventDefault();
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleTagRemove = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <div className="flex flex-wrap gap-2 p-2 border rounded-md w-[70%] mr-8">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="bg-gray-200 px-2 py-1 rounded-md flex items-center"
        >
          <span>{tag}</span>
          <button
            className="ml-2 text-red-600 focus:outline-none"
            onClick={() => handleTagRemove(index)}
          >
            &times;
          </button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder={tags.length === 0 ? "Type and hit enter to add a tag" : ""}
        className="flex-grow border-none focus:outline-none"
      />
    </div>
  );
};

export default TagInput;
