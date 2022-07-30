import React from 'react'
import styles from './FileInputInfo.module.css'
import Tooltip from '@mui/material/Tooltip'

const FileInputInfo: React.FC = () => {
  return (
    <div>
      <div>
        <h3>File upload guide</h3>
      </div>
      <div>Expected format: csv (comma separated)</div>
      <div>Encoding: UTF-8 (Excel cannot)</div>
      <div>
        <h4>
          Example csv file looks
        </h4>  </div>
      <table className={styles.exampleTable}>
        <thead style={{ visibility: 'hidden' }}></thead>
        <tbody>
        <tr>
          <td>
            <Tooltip title={`No header needed\n
            First row: card language ISO code`}>
              <div>
                en_US
              </div>
            </Tooltip>
          </td>
          <td></td>
        </tr>
        <tr className={styles.question}>
          <td>
            <Tooltip title={`Question format:\n
            CARD TEXT, true\n
            (second column is always true for questions)`}>
              <div>
                {'What is needed for the perfect mashed potato?'}
              </div>
            </Tooltip>
          </td>

          <td>true</td>
        </tr>
        <tr>
          <td>
            <Tooltip title={`Answer format:\n
            CARD TEXT, false\n
            (second column is always false for answers)`}>
              <div>
                {'Gay lobby'}
              </div>
            </Tooltip>
          </td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FileInputInfo
