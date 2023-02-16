import React, { useEffect, useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import Switch from '@mui/material/Switch'
import { Grid, TextField } from '@mui/material'
import Card from '../atoms/Card'
import { ICard } from '../../types/Card'
import Button from '../atoms/Button'
import { addCard } from '../../api/firebase'
import styles from './QuestionOrAnswerForm.module.css'

const QuestionorAnswerForm: React.FC = () => {
  const [textValue, setTextValue] = useState('')
  const [isQuestion, setIsQuestion] = useState(false)
  const [card, setCard] = useState<ICard | null>(null)

  // TODO language
  useEffect(() => {
    setCard({
      isQuestion: isQuestion.toString(),
      text: textValue,
      language: 'en_US'
    })
  }, [isQuestion, textValue])

  const saveCard = () => {
    if (card) { addCard(card) }
  }

  return <>
    <h3>Fill form</h3>
<div className={styles.formContainer}>
    <form>

      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Answer</Grid>
        <Grid item>
          <FormGroup>
            <Switch
              checked={isQuestion} // relevant state for your case
              onChange={() => { setIsQuestion(!isQuestion) }} // relevant method to handle your change
            />
          </FormGroup>
        </Grid>
        <Grid item>Question</Grid>
      </Grid>
      <TextField
      fullWidth
        id="outlined-multiline-flexible"
        label="Your text"
        multiline
        maxRows={4}
        value={textValue}
        onChange={v => setTextValue(v.target.value)}
        placeholder="Your text"
      />
      <div className={styles.button}>
        <Button text="Save" onClick={saveCard}></Button>
        </div>
    </form>
    </div>
    <h3>Preview</h3>
    <Card card={card} />
  </>
}

export default QuestionorAnswerForm
