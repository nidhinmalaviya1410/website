import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { useContext } from 'react';

const ToDoLists = (props) => {

    // const fname = useContext(FirstName);

    const [line, setCut] = useState(false);

    const cutIt = () => {
        setCut(true);
    }

    return (
        <>
            <div className="Todo">
                {/* // <CompC></CompC> */}
                {/* <h1> {fname}</h1> */}
                <Button onClick={cutIt} className="delete"><DeleteIcon /></Button>
                <li style={{ textDecoration: line ? "line-through" : false }}> {props.text} </li>
            </div>
        </>
    )
}

export default ToDoLists
    ;