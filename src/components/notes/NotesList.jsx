import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchived }) {
  return (
    <>
      <div className="notes-list">
        {notes.map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchived={onArchived}
            isArchived={note.archived}
            {...note}
          />
        ))}
      </div>
    </>
  );
}

export default NotesList;
