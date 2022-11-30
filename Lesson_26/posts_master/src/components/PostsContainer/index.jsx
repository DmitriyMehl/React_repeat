import React, { useContext   } from 'react'
import { Context } from '../../context';
import Post from '../Post'

export default function PostsContainer() {

    const { posts_data } = useContext(Context);

  return (
    <div>
        {
            posts_data.map(el => <Post key={el.id} {...el} />)
        }
    </div>
  )
}
