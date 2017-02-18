import React, {Component, PropTypes} from 'react';
import ReactHighcharts from 'react-highcharts';


const Chart = (props) => {
    return (
        <ReactHighcharts config={props.config}></ReactHighcharts>
    );
};

export default Chart;


