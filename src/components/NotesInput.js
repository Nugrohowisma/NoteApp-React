import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.limit),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa Karakter : {this.state.limit - this.state.title.length} Huruf
          </p>
          <input
            placeholder="Masukkan Judul"
            type="text"
            className="note-input__title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          ></input>
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Masukkan Catatan"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
