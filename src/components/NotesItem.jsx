import React from "react";
import NotesItemBody from "./NotesItemBody";
import { showFormattedDate } from "../utils";
import ActionNotes from "./button/ActionNotes";

function NotesItem({ id, title, body, createdAt, onDelete, onArchived, isArchived }) {
  return (
    <>
      <div className="note-item">
        <NotesItemBody
          id={id}
          title={title}
          createdAt={showFormattedDate(createdAt)}
          body={body}
        />
        <ActionNotes id={id} onDelete={onDelete} onArchived={onArchived} isArchived={isArchived} />
      </div>
    </>
  );
}

export default NotesItem;
