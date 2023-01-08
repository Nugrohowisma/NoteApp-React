import React from "react";
import { showFormattedDate } from "../utils/data";

function NotesItemBody({ title, createdAt, body }) {
  return (
    <>
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </>
  );
}

export default NotesItemBody;
