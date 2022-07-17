import React from "react";
import styles from "./FileInput.module.css";


const FileInputInfo: React.FC = () => {

  return (
    <div>
      <div>Expected format: csv (comma separated)</div>
      <div>Encoding: UTF-8 (Excel cannot)</div>
      <div>No header needed</div>
      <div>Rows go like this:</div>
      <table className={styles.exampleTable}>
        <thead></thead>
        <tbody>
          <tr>
            <td>en_US</td>
            <td></td>
          </tr>
          <tr>
            <td>{`"What is needed for the perfect mashed potato?""`}</td>
            <td>true</td>
          </tr>
          <tr>
            <td>{`"Gay lobby"`}</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <div>First row: language ISO code</div>
      <div>Question format:</div>
      <div>CARD TEXT, true</div>
      <div>Example:</div>
      <div>{`"What is needed for the perfect mashed potato?", true`}</div>
      <div>Answer format:</div>
      <div>CARD TEXT, false</div>
      <div>Example:</div>
      <div>{`"Gay lobby", false`}</div>
    </div>
  );
};

export default FileInputInfo;
