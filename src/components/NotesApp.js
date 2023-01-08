import React from "react";
import Header from "./Header";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/data";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toDateString(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="note-app__body">
          <NotesInput addNotes={this.onAddNotesHandler} />
          <NotesList
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
