import React from 'react'
import Box from '@mui/material/Box'
import clsx from 'clsx'
import classes from './DragDropFileInput.module.css'
import UploadFile from '@mui/icons-material/UploadFile'

export type IDragDropFileInput = {
    accept: string
    hoverLabel?: string
    dropLabel?: string
    width?: string
    height?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onDrop: (event: React.DragEvent<HTMLElement>) => void

  }

export const DragDropFileInput: React.FC<IDragDropFileInput> = ({
  accept,
  hoverLabel = 'Click or drag to upload file',
  dropLabel = 'Drop file here',
  width = '600px',
  height = '100px',
  onChange,
  onDrop
}) => {
  const [labelText, setLabelText] = React.useState<string>(hoverLabel)
  const [isDragOver, setIsDragOver] = React.useState<boolean>(false)
  const [isMouseOver, setIsMouseOver] = React.useState<boolean>(false)

  const stopDefaults = (e: React.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }
  const dragEvents = {
    onMouseEnter: () => {
      setIsMouseOver(true)
    },
    onMouseLeave: () => {
      setIsMouseOver(false)
    },
    onDragEnter: (e: React.DragEvent) => {
      stopDefaults(e)
      setIsDragOver(true)
      setLabelText(dropLabel)
    },
    onDragLeave: (e: React.DragEvent) => {
      stopDefaults(e)
      setIsDragOver(false)
      setLabelText(hoverLabel)
    },
    onDragOver: stopDefaults,
    onDrop: (e: React.DragEvent<HTMLElement>) => {
      stopDefaults(e)
      setLabelText(hoverLabel)
      setIsDragOver(false)
      onDrop(e)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onChange(event)
    }
  }

  return (
        <>
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
                className={clsx(classes.root, isDragOver && classes.onDragOver)}
            >
                <div
                    width={width}
                    height={height}
                    className={classes.noMouseEvent}
                >
                {(
                        <>
                            <div
                                height={height}
                                width={width}
                            >
                              <div className={classes.uploadArea}>
                              <UploadFile />
                               <div>{labelText}</div>
                               </div>
                            </div>
                        </>
                )}
                </div>
            </label>
        </>
  )
}

export default DragDropFileInput
