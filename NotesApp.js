import React from "react";
import HeaderNote from "./header/headerNote";
import NoteInput from "./input/NoteInput";
import NoteList from "./ViewData/NoteList";
import { getInitialData } from "./utils";

class NotesApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
            inputSearch: '',
            data: {
                id: '',
                title: '',
                body: '',
                archived: false,
                createdAt: ''
            }
        }

        this.deleteNoteHandle = this.deleteNoteHandle.bind(this)
        this.archiveNoteHandle = this.archiveNoteHandle.bind(this)
        this.unArchiveNoteHandle = this.unArchiveNoteHandle.bind(this)
        this.SearchNoteHandle = this.SearchNoteHandle.bind(this)
        this.addNoteInputHandle = this.addNoteInputHandle.bind(this)

        this.onTitleHandle = this.onTitleHandle.bind(this)
        this.onBodyHandle = this.onBodyHandle.bind(this)
    }

    deleteNoteHandle(id) {
        this.setState((item) => {
            return {
                ...item,
                notes: this.state.notes.filter(item => item.id !== id)
            }
        })
    }

    archiveNoteHandle(id) {
        let note = this.state.notes.filter(note => note.id === id)
        note[0].archived = true

        let NoteInput = this.state.notes.filter(note => note.id !== id)

        this.setState((item) => {
            return {
                ...item,
                notes: [
                    ...NoteInput,
                    note[0]
                ]
            }
        })
    }

    unArchiveNoteHandle(id) {
        let note = this.state.notes.filter(note => note.id === id)
        note[0].archived = false

        let NoteInput = this.state.notes.filter(note => note.id !== id)

        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: [
                    ...NoteInput,
                    note[0]
                ]
            }
        })
    }

    SearchNoteHandle(value) {
        this.setState((item) => {
            return {
                ...item,
                inputSearch: value
            }
        })
    }

    addNoteInputHandle(event) {
        event.preventDefault();

        let newState = this.state.notes
        newState.push({
            id: +new Date(),
            title: this.state.data.title,
            body: this.state.data.body,
            archived: this.state.data.archived,
            createdAt: new Date().toISOString().slice(0, 10)
        })

        this.setState((item) => {
            return {
                ...item,
                notes: newState,
                data: {
                    id: '',
                    title: '',
                    body: '',
                    archived: false,
                    createdAt: ''
                },
            }
        })
    }

    onTitleHandle(value) {
        if (value.length > 50) {
            return false
        }
        this.setState((item) => {
            return {
                ...item,
                data: {
                    ...item.data,
                    title: value
                }
            }
        })
    }

    onBodyHandle(value) {
        this.setState((item) => {
            return {
                ...item,
                data: {
                    ...item.data,
                    body: value
                }
            }
        })
    }

    render() {
        return (
            <div className="main">
                <HeaderNote searchNote={this.SearchNoteHandle} />
                <NoteInput addNoteInputHandle={this.addNoteInputHandle} data={this.state.data} onTitleHandle={this.onTitleHandle} onBodyHandle={this.onBodyHandle} />
                <NoteList notes={this.state.notes} deleteNote={this.deleteNoteHandle} archiveNote={this.archiveNoteHandle} unArchiveNote={this.unArchiveNoteHandle} inputSearch={this.state.inputSearch} />
            </div>
        )
    }
}

export default NotesApp