import React from "react";

function ActionNotes({ id, onDelete, onArchived, isArchived }) {
  return (
    <>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => onArchived(id)}
        >
          {isArchived ? "Pindahkan" : "Arsipkan"}
          {console.log(isArchived)}
        </button>
      </div>
    </>
  );
}
export default ActionNotes;
