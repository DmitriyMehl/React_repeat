import React from 'react'
import ToDoList from '../ToDoList';
import s from "./index.module.css"

export default function User({ id, firstname, lastname, active, avatar, todo }) {

    const status = active ? "active" : "not active";

    const img_erl = avatar ?? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"

    const card_style = {
        backgroundColor: active ? "lightgreen": "lightgray"
    }

  return (
    <div className={s.card} style={card_style}>
        <p>ID: {id}</p>
        <p>First name: {firstname}</p>
        <p>Last name: {lastname}</p>
        <p>Status: {status}</p>
        <ToDoList tasks={todo} />
        <img src={img_erl} alt="avatar" className={s.avatar} />
    </div>
  )
}