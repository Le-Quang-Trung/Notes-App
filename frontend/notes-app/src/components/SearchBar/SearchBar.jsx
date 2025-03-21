import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import styles from "./SearchBar.module.css"; // Import CSS module

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className={styles.searchBar}>
      <FaMagnifyingGlass className={styles.icon} />
      <input
        type="text"
        placeholder="Search Notes"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)} // Gọi tìm kiếm realtime
      />
      {value && (
        <IoMdClose className={styles.clearIcon} onClick={onClearSearch} />
      )}
    </div>
  );
};

export default SearchBar;
