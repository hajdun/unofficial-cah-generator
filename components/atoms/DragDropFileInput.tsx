import React from 'react'
import classes from './DragDropFileInput.module.css'
import UploadFile from '@mui/icons-material/UploadFile'
import { Grid } from '@mui/material'

export type IDragDropFileInput = {
  accept: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onDrop: (event: React.DragEvent<HTMLElement>) => void
}

export const DragDropFileInput: React.FC<IDragDropFileInput> = ({
  accept,
  onChange,
  onDrop
}) => {
  const stopDefaults = (e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }
  const dragEvents = {
    onDragOver: stopDefaults,
    onDrop: (e: React.DragEvent<HTMLElement>) => {
      stopDefaults(e)
      onDrop(e)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onChange(event)
    }
  }

  return (
    <div>
      <input
        onChange={handleChange}
        accept={accept}
        className={classes.hidden}
        id="file-upload"
        type="file"
        style={{ display: 'none' }}
      />

      <label
        htmlFor="file-upload"
        {...dragEvents}
      >
        <div className={classes.noMouseEvent}>
          {(
            <Grid
              className={classes.root}
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              minWidth={400}
              minHeight={300}
            >
              <Grid item xs={3}>
                <div className={classes.uploadArea}>
                  <div>
                    <UploadFile /></div>
                  <div>Click or drag to upload file</div>
                </div>
              </Grid>
            </Grid>
          )}
        </div>
      </label>
    </div>
  )
}

export default DragDropFileInput
