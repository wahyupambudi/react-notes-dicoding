import React from "react";
import NotesSearch from "./NotesSearch";

function NotesHeader() {
  return (
    <>
      <div className="note-app__header">
        <h1>Notes</h1>
        <NotesSearch />
      </div>
    </>
  );
}

export default NotesHeader;
