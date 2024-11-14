import React from "react";

function NotesSearch({ onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan ..."
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default NotesSearch;
