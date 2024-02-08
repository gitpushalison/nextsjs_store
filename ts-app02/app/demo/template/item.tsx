import React from 'react'
import style from './list.module.scss'
interface propsType {
    name:string | number
}
export const Item = ({name}:propsType) => {
  return (
    <p className={style.item1}>item == {name}</p>
  )
}
