import React, { useState,useMemo } from 'react'
import {usefetch } from './hooks'
const UseFetch:React.FC = () => {
  const [url , setUrl] = useState('')
  const queryOptions = useMemo(() => ({url}),[url])
    const {data} = usefetch({url})
    console.log('usefecth rendering....')
  return (
    <div>
        <h1>useFetch333</h1>
        <div>{JSON.stringify(data)}===</div>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos/1')}>change url 1</button>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos/2')}>change url 2</button>
    </div>
  )
}

export default UseFetch