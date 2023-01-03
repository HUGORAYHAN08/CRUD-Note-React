import React from "react";
import { showFormattedDate } from "../utils"

const ItemNoteBody = ({ title, body, createdAt }) => {
  return (
    <div className="itemData">
      <h3>{title}</h3>
      <label>{showFormattedDate(createdAt)}</label>
      <p>{body}</p>
    </div>
  )
}
export default ItemNoteBody;