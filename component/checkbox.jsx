import React, {Component, PropTypes} from 'react';
import { Checkbox, Button } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const CheckboxA = (props) => {
    console.log(props)
    
    return (
        <div>
            {
                props.texts.map((item,index)=>{
                    return <Checkbox key={index} onChange={onChange}>{item}</Checkbox>
                })
            }
        </div>
    );
};

export default CheckboxA;