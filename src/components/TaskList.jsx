import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExp } from "../redux/expSlice";

function TaskList() {
  const dispatch = useDispatch();
  const expenditure = useSelector((state) => state.myExpenditure.expenditure);

  console.log("expenditure",expenditure);

  function deleteExpenditure(id) {
    dispatch(deleteExp(id));
  }

  return (
    <div>
      <h4>Your Expenditure</h4>
      <ul>
        {expenditure.map((exp) => (
          <li key={exp.id}>
            {exp.category}
            <button onClick={() => deleteExpenditure(exp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
