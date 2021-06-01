import React, { useState } from "react";
import { Simulate } from "react-dom/test-utils";
import ToDoLists from "./ToDoLists";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const [input, setinput] = useState("");

  const [items, setitems] = useState([]);

  const itemEvent = (event) => {

    setinput(event.target.value);

  }

  const listOFItems = () => {
    setitems((olditems) => {

      return [...olditems, input];
    });
    setinput("");
  }

  const deleteItem = (id) => {
    console.log("deltedf");

    setitems((olditems) => {

      return olditems.filter((arrElem, index) => {
        return index !== id;

      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br></br>
          <h1>TODO List</h1>
          <br></br>
          <input type="text" placeholder="ADD A Item" onChange={itemEvent} value={input}></input>
          <Button className="btn btn-success" onClick={listOFItems}><AddIcon /></Button>

          <ol>
            {
              items.map((itemvalue, index) => {
                return <ToDoLists
                  key={index}
                  id={index}
                  text={itemvalue}
                  onSelect={deleteItem} />
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
};

export default App;