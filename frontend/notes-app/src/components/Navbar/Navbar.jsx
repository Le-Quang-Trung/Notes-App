import React, { useState } from "react";
import styles from "./Navbar.module.css";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({ userInfo, searchQuery, onSearchNote, handleClearSearch, isLoginPage, }) => {

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };



  return (
    <div className={styles.navbar}>
      <h2 className={styles.title}>BomNote</h2>

      {!isLoginPage && (
        <>
          <SearchBar
            value={searchQuery} // Truyền từ Home.jsx
            onChange={onSearchNote} // Gọi API tìm kiếm khi nhập
            onClearSearch={handleClearSearch} // Xóa tìm kiếm khi bấm "X"
          />
          <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </>
      )}
    </div>
  );
};

export default Navbar;

