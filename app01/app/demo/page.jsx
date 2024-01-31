"use client";
import { createContext,useState ,use ,Suspense} from 'react';
import styles from './demo.module.css'
const DemoPage = () => {
    return (
        <div className={styles.container}>
           <h1>测试用例</h1> 
        </div>
    )
}

export default DemoPage