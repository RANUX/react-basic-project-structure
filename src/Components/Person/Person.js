import React from 'react';
import './Person.css';

export default (props) => {
    return (
        <div className="Person">
            <p>I'm {props.name} and i'am {props.age} old persoon!</p>
            <p>{props.children}</p>
            <input className="Person__button-edit" type="text" onChange={props.onChangeName.bind(this, props.pid)} value={props.name}/>
        </div>
    );
}
