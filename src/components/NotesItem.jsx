import React from "react";
import NotesItemBody from "./NotesItemBody";
import { showFormattedDate } from "../utils";
import ActionNotes from "./ActionNotes";

function NotesItem({ id, title, body, createdAt, archived, onDelete }) {
  return (
    <>
      <div className="note-item">
        <NotesItemBody
          id={id}
          title={title}
          createdAt={showFormattedDate(createdAt)}
          body={body}
        />
        <ActionNotes id={id} onDelete={onDelete} />
      </div>
    </>
  );
}

export default NotesItem;
