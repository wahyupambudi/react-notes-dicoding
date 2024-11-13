import React from "react";

function ActionNotes() {
  return (
    <>
      <div className="note-item__action">
        <button className="note-item__delete-button">Delete</button>
        <button className="note-item__archive-button">Arsipkan</button>
      </div>
    </>
  );
}
export default ActionNotes;
