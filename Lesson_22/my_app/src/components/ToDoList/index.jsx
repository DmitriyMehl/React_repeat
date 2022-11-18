import React from 'react'
import ToDoItem from '../ToDoItem'

export default function ToDoList({ tasks }) {
  return (
    <div>
        <p>Tasks: </p>
        {
            tasks 
            ? tasks.map(el => <ToDoItem key={el.id} {...el} />)
            : <p>Дел нет</p>
        }
    </div>
  )
}
