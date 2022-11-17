import React from 'react'
import s from "./index.module.css"

export default function User({ id, firstname, lastname, active, avatar }) {

    const status = active ? "active" : "not active";

    const img_erl = avatar ?? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"

    const card_style = {
        backgroundColor: active ? "lightgreen": "lightgray"
    }

  return (
    <div className={s.card} style={card_style}>
        <p>{id}</p>
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{status}</p>
        <img src={img_erl} alt="avatar" classNam={s.avatar} />
    </div>
  )
}