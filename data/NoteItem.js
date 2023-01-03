import React from "react"
import ItemNoteBody from "./itemNoteBody"

const NoteItem = ({ deleteNote, archiveNote, id, title, body, createdAt, archived, unArchiveNote }) => {
    return (
        <div className="container-Data-Note">
            <div className="container-Item">
                <ItemNoteBody title={title} body={body} createdAt={createdAt} />
                <div className="btn-container">
                    <button className="btn-delete" onClick={() => deleteNote(id)} >Hapus</button>
                    <button className="btn-move" onClick={() => archived ? unArchiveNote(id) : archiveNote(id)}  >{archived ? 'Aktif' : 'Arsip'}</button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;