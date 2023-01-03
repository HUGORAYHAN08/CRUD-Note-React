import React from "react";

const NoteInput = ({ addNoteInputHandle, data, onTitleHandle, onBodyHandle }) => {
    return (
        <div className="containerInput">
            <h1>Buat catatan baru</h1>
            <form onSubmit={addNoteInputHandle} >
                <div className="formInput">
                    <input type="text" placeholder="judul catatan" value={data.title} onChange={(event) => onTitleHandle(event.target.value)} required />
                    <p className="textP">Sisa karakter : {50 - (data.title).length}</p>
                    <textarea cols="50" rows="10" placeholder="Isi Catatan" value={data.body} onChange={(event) => onBodyHandle(event.target.value)} ></textarea>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NoteInput;