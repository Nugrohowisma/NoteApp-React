import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";

function NotesItem({ title, createdAt, body, id, onDelete }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NotesItemBody title={title} createdAt={createdAt} body={body} />
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NotesItem;
