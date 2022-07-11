import React, { useEffect } from "react";
import styles from "./FileInput.module.css";
import { getCards, addCard } from "../../api/firebase";

interface ICard {
  text: string;
  isFunny?: boolean;
  isQuestion: boolean;
  language: string;
}

const FileInput: React.FC = () => {
  useEffect(() => {
    getCards().then((cards) => {
      console.log(cards);
    });
  }, []);

  const addFixCard = () => {
    addCard("What is needed for the perfect mashed potato?", true);
  };

  return (
    <div>
      <button onClick={addFixCard}>Add card</button>
      <div>Upload file</div>
      <div>
        <input type="file" />
      </div>
      <div>Expected format: csv (comma separated)</div>
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
            <td>"What is needed for the perfect mashed potato?"</td>
            <td>true</td>
          </tr>
          <tr>
            <td>"Gay lobby"</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <div>First row: language ISO code</div>
      <div>Question format:</div>
      <div>CARD TEXT, true</div>
      <div>Example:</div>
      <div>"What is needed for the perfect mashed potato?", true</div>
      <div>Answer format:</div>
      <div>CARD TEXT, false</div>
      <div>Example:</div>
      <div>"Gay lobby", false</div>
    </div>
  );
};

export default FileInput;
