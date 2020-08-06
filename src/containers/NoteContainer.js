import React, { Component } from "react";
import { connect } from "react-redux";
import InsertForm from "../components/notes/InsertForm";
import * as noteActions from "../store/modules/notes";

export class NoteContainer extends Component {

  handleChange = ({ value }) => {
    this.props.setInputValue({ value });
  };

  addNote = (note) => {
    this.props.addNote(note);
  }

  render() {
    const { inputValue } = this.props;
    const { handleChange, addNote } = this;
    return(
      <div>
        <InsertForm inputValue={inputValue} onChangeInput={handleChange} onAdd={addNote} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inputValue: state.inputValue,
  note: state.note
});

const mapDispatchToProps = dispatch => ({
  setInputValue: ({ value }) => dispatch(noteActions.setInputValue({value})),
  addNote: (note) => dispatch(noteActions.addNote(note)),
  }
);

export default connect(
  mapStateToProps, mapDispatchToProps
)(NoteContainer);
