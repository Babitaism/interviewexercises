import React from "react";

export function ToDO(){
    const [taskList, setTaskList] = useState([]);
    const [taskDetail, setTaskDetail] = useState("");

    function handleChange(e) {
      let additems = e.target.value;
      setTaskDetail(additems);
    }

    function addItems() {
      setTaskList([...taskList, taskDetail]);
      // console.log(taskDetail, "td");
      // console.log(taskList, "tl");
      setTaskDetail("");
    }

    function removeItem(index) {
      const newTaskList = [...taskList];
      console.log(newTaskList, index, "llll");
      newTaskList.splice(index, 1);
      setTaskList(newTaskList);
    }

    return (
      <div>
        <>
          <h3>ToDO List</h3>
          <input
            type="text"
            placeholder="Add task detail here"
            value={taskDetail}
            onChange={handleChange}
          />
          <button style={{ color: "red", marginLeft: 10 }} onClick={addItems}>
            Add{" "}
          </button>
        </>
        <>
          {taskList.map((i, index) => {
            return (
              <div>
                <li key={index}>{i}</li>
                <button
                  style={{ marginTop: -50 }}
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </>
      </div>
    );

}
