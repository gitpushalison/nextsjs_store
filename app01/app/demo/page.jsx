"use client";
import { useState  ,useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './demo.module.css'
// use state
const DemoUseState = () => {
    const [count ,setCount ] = useState(4)
    const [theme , setTheme] = useState('blue')

    function decrementCount (){
        setCount(count => count - 1)
    }
    function incrementCount (){
        setCount(count => count + 1)
        setTheme('black')
    }
    return (
        <>
          <button className={styles.btn} onClick={ decrementCount}>-</button>
           <span>{count}</span>
           <span>{theme}</span>
           <button  className={styles.btn} onClick={incrementCount}>+</button>
        </>
    )
}
const DemoWatchEffect = () => {
  console.log('render change ')
    const [resourcetype , setResourceType] = useState('posts')
    const [items , setItems] = useState([])
    useEffect(() => {
        console.log('amounted')
        fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
      .then(response => response.json())
      .then(json => setItems(json))
      return () => {
        console.log('watch clear')
      }
    },[resourcetype])
    return (
        <>
        <h1>{resourcetype}</h1>
          <button onClick={() => setResourceType('Posts')}>Posts</button>
          <button  onClick={() => setResourceType('Users')}>Users</button>
          <button  onClick={() => setResourceType('comments')}>comments</button>
          {items.map(item => {
            return (
                <pre>{JSON.stringify(item)}</pre>
            )
          })}
        </>
    )
}
const DemoMemo = () => {
    return (
        <div>
            memo
        </div>
    )
}
const DemoRefs = () => {
    const [name,setName] = useState('')
    const renderCount = useRef(0)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
        console.log('useEffect')
    })
    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            my name is 
            <div>{renderCount.current}</div>
        </div>
    )
}
const DemoPage = () => {
    
    return (
        <div className={styles.container}>
           <h1>测试用例</h1> 
           <DemoRefs />
        </div>
    )
}

export default DemoPage