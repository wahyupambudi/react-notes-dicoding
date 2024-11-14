import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      createdAt: new Date().toISOString(),
    };

    this.limitTitle = 50;
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChange(event) {
    if (event.target.value.length > 50) {
      event.target.value = event.target.value.slice(0, 50);
    }
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState(() => {
      return {
        body: "",
        title: "",
      };
    });
  }
  render() {
    return (
      <>
        <div className="note-input">
          <h2>Buat Catatan</h2>
          <form action="" onSubmit={this.onSubmitEventHandler}>
            <p className="note-input__title__char-limit">
              Sisa karakter : {this.limitTitle - this.state.title.length}
            </p>
            <input
              className="note-input__title"
              type="text"
              placeholder="Ini adalah judul ..."
              required
              value={this.state.title}
              onChange={this.onTitleChange}
            />
            <textarea
              className="note-input__body"
              type="text"
              placeholder="Tuliskan catatanmu di sini ..."
              required
              value={this.state.body}
              onChange={this.onBodyChange}
            />
            <button type="submit">Buat</button>
          </form>
        </div>
      </>
    );
  }
}
export default NotesInput;
