import React from 'react'
import styles from './Button.module.css'
import { uuidv4 } from '@firebase/util'

interface IButtonProps {
    text: string,
    onClick:()=>void,
    type?: 'submit' | 'button',
    name?: string
}

const Button: React.FC<IButtonProps> = ({ text, onClick, type = 'button', name = uuidv4() }) => {
  return <button className={styles.button} onClick={onClick} type={type} name={name}>
    {text}
    </button>
}

export default Button
