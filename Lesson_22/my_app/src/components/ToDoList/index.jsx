import React from 'react'
import ToDoItem from '../ToDoItem'

export default function ToDoList({ tasks }) {
  return (
    <div>
        <p>Tasks: </p>
        {
            tasks 
            ? tasks
              .sort((a, b) => a.done - b.done)
              .map(el => <ToDoItem key={el.id} {...el} />)
              : <p>Дел нет</p>
        }
    </div>
  )
}
