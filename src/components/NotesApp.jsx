import React from "react";
import { getInitialData } from "../utils/index";
import NotesHeader from "./header/NotesHeader";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import NotesArchive from "./archive/NotesArchive";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body, createdAt }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <NotesHeader />
        <div className="note-app__body">
          <NotesInput addNotes={this.onAddNotesHandler} />
          <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
          <NotesArchive />
        </div>
      </>
    );
  }
}

export default NotesApp;
