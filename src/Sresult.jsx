import React from 'react';

const Sresult = (props) => {

    const img = `https://source.unsplash.com/user/erondu/400x300/?${props.name}`;
    return (
        <>
            (img === '' ? null : <img src={img} alt="new" ></img>)
        </>
    )

}
export default Sresult;