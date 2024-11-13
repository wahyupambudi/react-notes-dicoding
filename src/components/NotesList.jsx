import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes }) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <NotesItem key={note.id} id={note.id} {...note} />
        ))}
      </div>
    </>
  );
}

export default NotesList;
