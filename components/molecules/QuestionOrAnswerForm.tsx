import React, { useEffect, useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import Switch from '@mui/material/Switch'
import { Grid, TextField } from '@mui/material'
import Card from '../atoms/Card'
import { ICard } from '../../types/Card'

const QuestionorAnswerForm: React.FC = () => {
  const [textValue, setTextValue] = useState('')
  const [isQuestion, setIsQuestion] = useState(false)
  const [card, setCard] = useState<ICard>({})

  // TODO language
  useEffect(() => {
    setCard({
      isQuestion: isQuestion.toString(),
      text: textValue,
      language: 'en_US'
    })
  }, [isQuestion, textValue])

  return <>
    <h3>Fill form</h3>

    <form>
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        value={textValue}
        onChange={v => setTextValue(v.target.value)}
      />

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

    </form>

    <h3>Preview</h3>
    <Card card={card} />
  </>
}

export default QuestionorAnswerForm
