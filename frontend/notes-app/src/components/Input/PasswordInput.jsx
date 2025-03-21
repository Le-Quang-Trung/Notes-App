import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import styles from "./PasswordInput.module.css"; // Import CSS module

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className={styles.passwordContainer}>
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className={styles.passwordInput}
      />

      {isShowPassword ? (
        <FaRegEye
          className={`${styles.icon} ${styles.iconPrimary}`}
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          className={`${styles.icon} ${styles.iconGray}`}
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};

export default PasswordInput;
