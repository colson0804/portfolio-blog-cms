import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [value, setValue] = useState("");

  const onSubmit = () => {
    console.log(value);
  };

  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default Editor;
