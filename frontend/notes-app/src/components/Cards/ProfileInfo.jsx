import React from "react";
import { getInitials } from "../../utils/helper";
import styles from "./ProfileInfo.module.css"; // Import CSS module

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-avatar"]}>
        {getInitials(userInfo?.fullName)}
      </div>

      <div>
        <p className={styles["profile-name"]}>{userInfo?.fullName}</p>
        <button className={styles["logout-button"]} onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
