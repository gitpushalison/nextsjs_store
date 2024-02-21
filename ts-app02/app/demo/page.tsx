'use client';
import React , {useState , useCallback ,memo}from 'react'
import FetchTemp from './FetchTemp';
const Demo = () => {
  return (
    <div className='py-20 px-20'>
        <div>
            <FetchTemp />
        </div>
    </div>
  )
}

export default Demo