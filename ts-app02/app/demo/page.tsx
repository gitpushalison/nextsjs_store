'use client';
import React , {useState , useCallback ,memo}from 'react'
import List from './template/list'
// import style from './container.module.scss'
const Child1 = memo(()  => {
    console.log('rander child!!')
    return (
        <div>child 渲染</div>
    )
})
// const Child2 = () => { 
//     const [list , setList] = useState([1,2,3,4,5])
//     return (
//         <div>
//            {
//                 list.map(item => (<p key={item} className={style.item1}>{item}</p>))
//            }
//         </div>
//     )
// }
const Demo = () => {
    const [ count , setCount] = useState(0)
  return (
    <div className='py-20 px-20'>
        <h1>react hooks</h1>
        <button className='btn-primary btn' onClick={() => setCount(count + 1)}>点击</button>
        <div>render:{count}</div>
        {/* <Child1 /> */}
       <List />
    </div>
  )
}

export default Demo