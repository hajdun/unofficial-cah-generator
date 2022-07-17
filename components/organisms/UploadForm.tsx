import React from "react";
import FileInput from "../atoms/FileInputInfo";
import FileInputWithInfo from "../molecules/FileInputWithInfo";
import QuestionorAnswerForm from "../molecules/QuestionOrAnswerForm";
import styles from "./UploadForm.module.css"

const UploadForm: React.FC = () => {
  return (
    <div>
        <div>
            <h2>Upload your stuff</h2>
        </div>
      <div className={styles.uploadOptionColumns}>
        <div className="uploadOption">
          <FileInputWithInfo />
        </div>
        <div className="uploadOption">
          <QuestionorAnswerForm />
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
