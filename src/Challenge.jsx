import React, { useEffect, useState } from "react";

const Challenge = () => {

    const [set, useset] = useState();

    return (
        <>
            <h1> Yopu have Cliked {set} </h1>
            <select value={set} onChange={(event) => {
                useset(event.target.value);
            }}>
                <option value='2'>2</option>
                <option value='4'>4</option>
                <option value='6'>6</option>
                <option value='10'>10</option>
            </select>
        </>
    )
}

export default Challenge;
