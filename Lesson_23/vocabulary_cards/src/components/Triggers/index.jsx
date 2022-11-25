import React, { useContext } from 'react'
import { Context } from '../../context'
import s from "./index.module.css"

export default function Triggers() {

  const { change_to_rus, change_to_eng } = useContext(Context);

  return (
    <div className={s.triggers}>
        <button onClick={change_to_eng}>Eng</button>
        <button onClick={change_to_rus}>Rus</button>
    </div>
  )
}
