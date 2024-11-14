import React from "react";
import { getInitialData } from "../utils/index";
import NotesHeader from "./header/NotesHeader";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import NoteMessage from "./message/NoteMessage";
import NotesSearch from "./header/NotesSearch";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onArchivedHandler(id) {
    const notes = this.state.notes.map((notes) =>
      notes.id === id ? { ...notes, archived: !notes.archived } : notes
    );
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
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(title) {
    this.setState(() => {
      return {
        search: title,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const activeNotes = notes.filter((note) => {
      return note.archived === false;
    });
    const archivedNotes = notes.filter((note) => {
      return note.archived === true;
    });

    return (
      <>
        <div className="note-app__header">
          <NotesHeader />
          <NotesSearch onSearch={this.onSearchHandler} />
        </div>
        <div className="note-app__body">
          <NotesInput addNotes={this.onAddNotesHandler} />
          <h2>Catatan Aktif</h2>
          {activeNotes.length > 0 ? (
            <NotesList
              notes={activeNotes}
              onDelete={this.onDeleteHandler}
              onArchived={this.onArchivedHandler}
            />
          ) : (
            <NoteMessage />
          )}
          <h2>Arsip</h2>
          {archivedNotes.length > 0 ? (
            <NotesList
              notes={archivedNotes}
              onDelete={this.onDeleteHandler}
              onArchived={this.onArchivedHandler}
            />
          ) : (
            <NoteMessage />
          )}
        </div>
      </>
    );
  }
}

export default NotesApp;
