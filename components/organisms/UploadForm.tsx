import React from 'react'
import styles from './UploadForm.module.css'
import FileInput from '../molecules/FileInput'
import FileInputInfo from '../atoms/FileInputInfo'

const UploadForm: React.FC = () => {
  return (
      <div className={styles.uploadContainer}>
        <div className={styles.uploadOption}>
          <FileInput />
        </div>
        <div className={styles.uploadOption}>
        <FileInputInfo/>
        </div>
      </div>
  )
}

export default UploadForm
