import React, {Component, PropTypes} from 'react';
import ReactHighcharts from 'react-highcharts';
import Chart from '../component/chart';
import './scss/main';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            config:{
                    title: {
                        text: 'Monthly Average Temperature',
                        x: -20 //center
                    },
                    subtitle: {
                        text: 'Source: WorldClimate.com',
                        x: -20
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    credits: {
                        enabled: false
                    },                    
                    yAxis: {
                        title: {
                            text: 'Temperature (°C)'
                        },
                        categories: ['1', '2', '3', '4', '5', '6',
                                    '7', '8', '9', '10', '11', '12'],                        
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }]
                    },
                    tooltip: {
                        // valueSuffix: '°C'
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },
                    series: [{
                        name: 'Tokyo',
                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                    }, {
                        name: 'New York',
                        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                    }, {
                        name: 'Berlin',
                        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                    }, {
                        name: 'Berlin11111',
                        data: [-0.19, 0.16, 3.15, 8.14, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 2.0]
                    }, {
                        name: 'London',
                        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                    }]
                }            
        }
    }
    
    render() {
        return (         
            <div>
                <Chart config = {this.props.config}></Chart>
                <Chart config = {this.state.config}></Chart>
            </div>
        );
    }
}

App.defaultProps = {
    config:{
        chart: {
            type: 'line'
        },
        title: {
            text: 'xietian图表组件'
        },
        subtitle: {
            text: 'Source: http://xietiansmile.com/'
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        },
        yAxis: {
            title: {
                text: '图标的x轴'
            }
            // categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'name1',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'name2',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    }    
};

export default App;

