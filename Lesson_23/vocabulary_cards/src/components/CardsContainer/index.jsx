import React, { useContext } from 'react'
import { words } from '../../data/words'
import CardItem from '../CardItem'
import s from "./index.module.css"
import { Context } from '../../context'

export default function CardsContainer() {

  const { words } = useContext(Context);

  return (
    <div className={s.cards_container}>
        {
          words.map(el => <CardItem key={el.id} {...el} />)
        }
    </div>
  )
}
