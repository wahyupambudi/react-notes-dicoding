import React from "react";
import { getInitialData } from "../utils/index";
import NotesHeader from "./header/NotesHeader";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    return (
      <>
        <NotesHeader />
        <div className="note-app__body">
          <NotesInput />
          <NotesList notes={this.state.notes} />
        </div>
      </>
    );
  }
}

export default NotesApp;
