import React from 'react'

export default function ToDoItem({ title, done }) {
  return (
    <div>
        <p>Title: {title}</p>
        <p>Done: {done}</p>
    </div>
  )
}
