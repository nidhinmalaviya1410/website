import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {

    const [img, setImg] = useState('');

    const inputEvent = (event) => {
        const dta = event.target.value;
        setImg(dta);
    };

    return (
        <>
            <div className="search">
                <input type="text" placeholder="Search Anything" value={img} onChange={inputEvent}></input>
            </div>
            <Sresult name={img}></Sresult>
        </>

    )

}
export default Search;