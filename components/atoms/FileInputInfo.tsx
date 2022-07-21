import React from "react";
import styles from "./FileInputInfo.module.css";
import Tooltip from '@mui/material/Tooltip';

const FileInputInfo: React.FC = () => {

  return (
    <div>
      <div>
        <h3>File upload guide</h3>
      </div>
      <div>Expected format: csv (comma separated)</div>
      <div>Encoding: UTF-8 (Excel cannot)</div>
      <h4>
        Example csv file looks
      </h4>
      <table className={styles.exampleTable}>
        <thead></thead>
        <tbody>
          <tr>
          <td>
              <Tooltip title={`No header needed
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
              <Tooltip title={`Question format:
            CARD TEXT, true
            (second column is always true for questions)`}>
                <div>
                  {`"What is needed for the perfect mashed potato?"`}
                </div>
              </Tooltip>
            </td>


            <td>true</td>
          </tr>
          <tr>
            <td>
              <Tooltip title={`Answer format:
            CARD TEXT, false
            (second column is always false for answers)`}>
                <div>
                  {`"Gay lobby"`}
                </div>
              </Tooltip>
            </td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default FileInputInfo;
