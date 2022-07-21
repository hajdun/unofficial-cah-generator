import React, { useState } from 'react'
import Papa from 'papaparse'
import { addCard } from '../../api/firebase'
import DragDropFileInput from './DragDropFileInput'
import clsx from 'clsx'
import './FileInput.module.css'

const FileInput = () => {
  // State to store parsed data
  const [_parsedData, setParsedData] = useState([])

  // State to store table Column name
  const [language, setLanguage] = useState([])

  // State to store the values
  const [values, setValues] = useState([])
  const [file, setFile] = useState(null)

  const uploadCards = () => {
    const cardArray = values.map(val => {
      return {
        text: val[0],
        isQuestion: val[1] as boolean,
        language: language[0],
        isFunny: true
      }
    })
    console.log(cardArray)

    for (let i = 0; i < cardArray.length; i++) {
      const currentCard = cardArray[i]
      addCard(currentCard)
    }
  }

  const changeHandler = (event) => {
    setFile(event.target.files[0])
  }

  const handleOnSubmit = (event) => {
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

        // Parsed Data Response in array format
        setParsedData(results.data)

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
            <DragDropFileInput/>

            <form>
                <input
                    type={'file'}
                    id={'csvFileInput'}
                    accept={'.csv'}
                    onChange={changeHandler}
                />

                <button onClick={handleOnSubmit}>
                    Preview
                </button>
            </form>

          <table className={clsx({ hideTable: values.length === 0 })}>
                <thead>
                    <th>Language</th>
                    <th>Text</th>
                    <th>Is question</th>
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
            <button onClick={uploadCards}>Upload</button>
        </div>
  )
}

export default FileInput
