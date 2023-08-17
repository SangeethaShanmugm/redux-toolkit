import React, { useRef } from "react";
import { addExp } from "../redux/expSlice";
import { useDispatch } from "react-redux";

function Task() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const addNewExp = () => {
    const newexp = inputRef.current.value;
    console.log("newexp", newexp);
    if (newexp !== "") {
      dispatch(addExp(newexp));
      inputRef.current.value = "";
    }
    // console.log(inputRef.current.value);
  };
  return (
    <div>
      <input type="text" placeholder="Add your expenditure..." ref={inputRef} />
      <button onClick={addNewExp}>Add Expenditure</button>
    </div>
  );
}

export default Task;
