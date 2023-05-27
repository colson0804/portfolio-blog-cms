import { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase/config.js";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [value, setValue] = useState("");

  const onSubmit = async () => {
    console.log(value);
    try {
      const createdAt = new Date();

      const postRef = await addDoc(collection(firestore, "posts"), {
        title: "Title!",
        body: value,
        createdAt: createdAt,
      });
      console.log("post uploaded successfully with ID: ", postRef.id);
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };

  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default Editor;
