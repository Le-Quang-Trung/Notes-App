import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import styles from "./TagInput.module.css"; // Import CSS module

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div className={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              # {tag}
              <button onClick={() => handleRemoveTag(tag)}>
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          className={styles.input}
          placeholder="Add tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button className={styles.addButton} onClick={addNewTag}>
          <MdAdd className={styles.addIcon} />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
