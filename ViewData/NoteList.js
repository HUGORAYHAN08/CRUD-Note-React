import ActiveNote from "./ActiveNote"
import ArsipNote from "./ArsipNote"

const NoteList = ({ notes, deleteNote, archiveNote, unArchiveNote, inputSearch }) => {
    return (
        <div className="note-list">
            <ActiveNote notes={notes} deleteNote={deleteNote} archiveNote={archiveNote} inputSearch={inputSearch} />
            <ArsipNote notes={notes} deleteNote={deleteNote} unArchiveNote={unArchiveNote} inputSearch={inputSearch} />
        </div>
    )
}

export default NoteList