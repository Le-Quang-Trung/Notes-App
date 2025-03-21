import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";
import moment from "moment";

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
    if (!query || query.trim() === "") return text; // Nếu không có từ khóa, trả về text gốc
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
      // Nếu từ khóa xuất hiện sau 60 ký tự đầu, cắt từ vị trí từ khóa
      return text.substring(index, index + maxLength - 3); // -3 vì có dấu "..."
    } else {
      // Nếu từ khóa nằm trong 60 ký tự đầu hoặc không tìm thấy, hiển thị bình thường
      return text.substring(0, maxLength);
    }
  };

  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          {/* Hiển thị title có highlight */}
          <h6
            className="text-sm font-medium"
            dangerouslySetInnerHTML={{
              __html: highlightText(title, searchQuery),
            }}
          ></h6>
          <span className="text-xs text-slate-500">
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>

        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-primary" : "text-slate-300"}`}
          onClick={onPinNote}
        />
      </div>

      {/* Hiển thị nội dung với từ khóa tô màu đúng */}
      <p
        className="text-xs text-slate-600 mt-2"
        dangerouslySetInnerHTML={{
          __html: highlightText(
            getDisplayContent(content, searchQuery),
            searchQuery
          ),
        }}
      ></p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">
          {tags.map((item) => `#${item} `)}
        </div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-600"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
