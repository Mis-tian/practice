import React, {Component, PropTypes} from 'react';
import {createStore} from 'redux';
import DatePicker from 'antd/lib/date-picker';
import SiderDemo from '../component/Layout';
import {add} from './add';
import './scss/main';
import 'antd/dist/antd.less';  // or 'antd/dist/antd.less'

class App1 extends Component {
    constructor(props, context) {
        super(props, context);
        // console.log(SiderDemo)
        this.v = 300900;
    }

    backPromise (){
       let Promise = new Promise((resolve, reject)=>{
                setTimeout(()=> {
                    this.v = this.v++;
                    if( this.v == 3009001 ){
                        resolve(this.v);
                    }else{
                        reject(this.v);
                    }
                    
                }, 2000);
        })
        return Promise
    }
    componentDidMount() {
        // let value = await this.backPromise();
        // console.log('value',value)
    }
    
    render() {
        console.log('add',add);
        return (
            <div id="components-layout-demo-custom-trigger">
                <SiderDemo/>
            </div>
        );
    }
}

App1.propTypes = {

};

export default App1;