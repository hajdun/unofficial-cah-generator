import React, { useState } from 'react'
import Papa from 'papaparse'
import { addCard } from '../../api/firebase'
import DragDropFileInput from '../atoms/DragDropFileInput'
import './FileInput.module.css'
import Button from '../atoms/Button'
import CardList from './CardList'

const FileInput = () => {
  // State to store table Column name
  const [language, setLanguage] = useState([])
  const [previewClicked, setPreviewClicked] = useState(false)

  // State to store the values
  const [values, setValues] = useState([])
  const [file, setFile] = useState(null)

  // TODO: save values converted when parsed
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

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    setPreviewClicked(true)
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
        <h3>Upload multiple cards from file</h3>
      </div>

      <form>
        {!file && <DragDropFileInput onChange={changeHandler} onDrop={onDrop} accept=".csv" />}
        {file && !previewClicked && <Button text="Preview cards before upload" onClick={handleOnSubmit}></Button>}
        {file && previewClicked && <Button text="Upload cards" onClick={uploadCards}></Button>}
      </form>

      <div>
        {file && previewClicked && `Language: ${language[0]}`}
      </div>
      <CardList cards={values.map((value: string[]) => {
        const text = value[0]
        const isQuestion = value[1]
        const currentLanguage = language[0]
        const isFunny = true

        return { text, isQuestion, language: currentLanguage, isFunny }
      })
      }
      isEdit={false}/>
    </div>
  )
}

export default FileInput
