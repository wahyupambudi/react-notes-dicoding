import React from "react";
import NotesItemBody from "./NotesItemBody";

function NotesItem({ id, title, body, createdAt, archived }) {
  return (
    <>
      <div className="note-item">
        <NotesItemBody
          id={id}
          title={title}
          createdAt={createdAt}
          body={body}
        />
      </div>
    </>
  );
}

export default NotesItem;
