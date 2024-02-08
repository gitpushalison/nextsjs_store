import React, { useState ,memo} from 'react'
import { Item } from './item'
const List = memo(({list}:any) => {
  console.log('render lkist')
  // console.log('render list',props)
  // const [list,setList] = useState(props.list)
  return (
    <div>
      {
        list.map((item:any) => <Item key={item} name={item} />)
      }
    </div>
  )
})

export default List