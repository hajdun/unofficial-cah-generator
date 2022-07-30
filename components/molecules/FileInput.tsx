import React, { useState } from 'react'
import Papa from 'papaparse'
import { addCard } from '../../api/firebase'
import DragDropFileInput from '../atoms/DragDropFileInput'
import clsx from 'clsx'
import './FileInput.module.css'
import Button from '../atoms/Button'

const FileInput = () => {
  // State to store table Column name
  const [language, setLanguage] = useState([])

  // State to store the values
  const [values, setValues] = useState([])
  const [file, setFile] = useState(null)

  const uploadCards = () => {
    const cardArray = values.map(val => {
      return {
        text: val[0],
        isQuestion: val[1],
        language: language[0],
        isFunny: true
      }
    })

    for (let i = 0; i < cardArray.length; i++) {
      const currentCard = cardArray[i]
      addCard(currentCard)
    }
  }

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0]
    if (file) { setFile(file) }
  }

  const onDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()
    const file = event.dataTransfer.files[0]
    if (file) { setFile(file) }
  }

  const handleOnSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      encoding: 'UTF-8',
      complete: (results) => {
        const rowsArray = []
        const valuesArray = []

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d))
          valuesArray.push(Object.values(d))
        })

        // Filtered Column Names
        setLanguage(rowsArray[0])

        // Filtered Values
        setValues(valuesArray)
      }
    })
  }

  return (
    <div>
      <div>
        <h3>Upload file</h3>
      </div>

      <form>
        <DragDropFileInput onChange={changeHandler} onDrop={onDrop} accept=".csv" />
       {file && <Button text="Preview cards" onClick={handleOnSubmit}></Button>}
      </form>

      <table className={clsx({ hideTable: values.length === 0 })}>
        <thead>
          <tr>
            <td>Language</td>
            <td>Text</td>
            <td>Is question</td>
          </tr>

        </thead>
        <tbody>
          {values.map((value: string[], index) => {
            return (
              <tr key={index}>
                <td>
                  {language.map((rows, index) => {
                    return <td key={index}>{rows}</td>
                  })}
                </td>
                {value.map((val: string, i: number) => {
                  return <td key={i}>{val}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {file && <Button text="Upload cards" onClick={uploadCards}></Button>}
    </div>
  )
}

export default FileInput
