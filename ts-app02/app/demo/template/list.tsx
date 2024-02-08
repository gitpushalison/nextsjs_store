import React, { useState } from 'react'
import { Item } from './item'
function List() {
  const [list ,setList] = useState([1,2,3,4])
  return (
    <div>
      {
        list.map(item => <Item key={item} name={item} />)
      }
    </div>
  )
}

export default List