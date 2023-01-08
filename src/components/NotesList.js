import React from "react";
import None from "./None";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
  const NotesList = !notes.length
    ? []
    : notes.filter((notes) => notes.archived === false);
  return (
    <>
      <h2>Catatan Aktif</h2>
      {NotesList.length === 0 ? (
        <None />
      ) : (
        <div className="notes-list">
          {notes.map((notes) => (
            <NotesItem
              key={notes.id}
              onDelete={onDelete}
              {...notes}
              id={notes.id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default NotesList;
