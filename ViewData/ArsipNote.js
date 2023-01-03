import CardNote from "../data/NoteItem"

const ArsipNote = ({ notes, deleteNote, unArchiveNote, inputSearch }) => {
    return (
        <div className="arsip-note">
            <h2>Catatan Diarsipkan</h2>
            <div className="container-note">
                {
                    notes.length ?

                        notes.filter((note) => {
                            if (inputSearch === '') {
                                return note
                            } else if (note.title.toLowerCase().includes(inputSearch.toLowerCase())) {
                                return note
                            }
                            return false
                        }).map((note, key) =>
                            note.archived && <CardNote key={key} deleteNote={deleteNote} unArchiveNote={unArchiveNote} {...note} />
                        )
                        :
                        <p>Belum ada catatan</p>
                }
                {
                    notes.length ? notes.filter(note => note.archived).length <= 0 && <p>Belum ada catatan</p> : false
                }
            </div>
        </div>
    )
}

export default ArsipNote;