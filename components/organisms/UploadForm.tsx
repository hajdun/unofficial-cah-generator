import React from "react";
import FileInput from "../atoms/FileInput";
import QuestionorAnswerForm from "../molecules/QuestionOrAnswerForm";

const UploadForm: React.FC = () => {
  return (
    <div>
        <div>
            <h2>Upload your stuff</h2>
        </div>
      <div className="uploadOptionColumns">
        <div className="uploadOption">
          <FileInput />
        </div>
        <div className="uploadOption">
          <QuestionorAnswerForm />
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
