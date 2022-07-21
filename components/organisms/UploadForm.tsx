import React from 'react'
import styles from './UploadForm.module.css'
import FileInput from '../atoms/FileInput'
import FileInputInfo from '../atoms/FileInputInfo'

const UploadForm: React.FC = () => {
  return (
    <div>
      <div className={styles.uploadOptionColumns}>
        <div className="uploadOption">
          <FileInput />
        </div>
        <div className="uploadOption">
        <FileInputInfo/>
        </div>
      </div>
    </div>
  )
}

export default UploadForm
