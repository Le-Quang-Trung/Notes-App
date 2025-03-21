import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";
import moment from "moment";
import styles from "./NoteCard.module.css"; // Import CSS module

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
  searchQuery,
}) => {
  // Hàm highlight từ khóa tìm kiếm
  const highlightText = (text, query) => {
    if (!query || query.trim() === "") return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(
      regex,
      `<span style="color: #0094EF; font-weight: bold;">$1</span>`
    );
  };

  // Xử lý nội dung để đảm bảo chứa từ khóa và không dài quá 60 ký tự
  const getDisplayContent = (text, query) => {
    if (!text) return "";
    const maxLength = 60;
    const index = query ? text.toLowerCase().indexOf(query.toLowerCase()) : -1;

    if (index !== -1 && index > maxLength) {
      return text.substring(index, index + maxLength - 3);
    } else {
      return text.substring(0, maxLength);
    }
  };

  return (
    <div className={styles["note-card"]}>
      <div className={styles["note-header"]}>
        <div>
          <h6
            className={styles["note-title"]}
            dangerouslySetInnerHTML={{
              __html: highlightText(title, searchQuery),
            }}
          ></h6>
          <span className={styles["note-date"]}>
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>

        <MdOutlinePushPin
          className={`${styles["icon-btn"]} ${
            isPinned ? styles["text-primary"] : styles["text-slate-300"]
          }`}
          onClick={onPinNote}
        />
      </div>

      <p
        className={styles["note-content"]}
        dangerouslySetInnerHTML={{
          __html: highlightText(
            getDisplayContent(content, searchQuery),
            searchQuery
          ),
        }}
      ></p>

      <div className={styles["note-footer"]}>
        <div className={styles["note-tags"]}>
          {tags.map((item) => `#${item} `)}
        </div>

        <div className="flex items-center gap-2">
          <MdCreate
            className={`${styles["icon-btn"]} hover:text-green-600`}
            onClick={onEdit}
          />
          <MdDelete
            className={`${styles["icon-btn"]} hover:text-red-600`}
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
