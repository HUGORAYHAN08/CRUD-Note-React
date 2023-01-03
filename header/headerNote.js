import SearchNote from "./SearchNote"

const headerNote = ({ searchNote }) => {
    return (
        <header>
            <h2>Catatan</h2>
            <SearchNote searchNote={searchNote} />
        </header>
    )
}

export default headerNote