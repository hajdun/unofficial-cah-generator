import React from 'react'
import styles from './Button.module.css'
import { uuidv4 } from '@firebase/util'

interface IButtonProps {
    text: string,
    onClick:(_e:React.MouseEvent<HTMLButtonElement>)=>void,
    type?: 'submit' | 'button',
    name?: string,
    id?:string
}

const Button: React.FC<IButtonProps> = ({ text, onClick, type = 'button', name = uuidv4(), id = uuidv4() }) => {
  return <button className={styles.button} onClick={onClick} type={type} name={name} id={id}>
    {text}
    </button>
}

export default Button
