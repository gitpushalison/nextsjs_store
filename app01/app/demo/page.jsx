"use client";
import { useState  ,useEffect} from 'react';
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
    useEffect(() => {
        console.log('useEffect')
    })
    const [resourcetype , setResourceType] = useState('posts')
    return (
        <>
        <h1>{resourcetype}</h1>
          <button onClick={() => setResourceType('Posts')}>Posts</button>
          <button  onClick={() => setResourceType('Users')}>Users</button>
          <button  onClick={() => setResourceType('comments')}>comments</button>
        </>
    )
}

const DemoPage = () => {
   
    return (
        <div className={styles.container}>
           <h1>测试用例</h1> 
           <DemoWatchEffect />
        </div>
    )
}

export default DemoPage