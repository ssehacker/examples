import React from 'react';
import { Button, Input } from 'antd';

class day1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     num: 0,
    };

  }
  add(){
    let num = this.state.num + 1;
    this.setState({
      num: num,
    });
  }

  jian(){
    let num = this.state.num - 1;
    this.setState({
      num: num,
    })
  }
  onChange(e){
    let value = e.target.value;

    if(typeof value === 'string'){
      value = parseInt(value);
    }
    this.setState({
      num: value,
    })
  }

  render(){
    return(
      <div>
        <Input type="number" placeholder="Basic usage" value={this.state.num} onChange={this.onChange.bind(this)}/>
        <Button type="primary" onClick={this.add.bind(this)}>加一</Button>
        <Button type="primary" onClick={this.jian.bind(this)}>减一</Button>
      </div>
    )
  }
}
export default day1;