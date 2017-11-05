import React from 'react';
import { Table, Button } from 'antd';

class Day03 extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      dataSource : [
        {
      name: '小明',
      performance: 100,
      sex: 1
       },
        {
          name: '小华',
          performance: 99,
          sex: 0
        },
        {
          name: '小周',
          performance: 0,
          sex: 1
        },
        {
          name: '小孙',
          performance: 150,
          sex: 0
        }
      ]
    };
  }
  add(){
    let dataSource = this.state.dataSource;
    dataSource.push(
      {
        name: '小明',
        performance: 100,
        sex: 1
      }
    )
    this.setState({
      dataSource
    })
  }
  remove(name){
    let dataSource = this.state.dataSource.filter( (item) => {
      if(item.name === name){
        return false
      }else {
        return true
      }
    })
    this.setState({
      dataSource
    })
  }
  render(){
    const columns = [
      {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
     },
      {
        title: '成绩',
        dataIndex: 'performance',
        key: 'performance',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render:(val) => {
          if(val === 1){
            return '男'
          }else {
            return '女'
          }
        }
      },
      {
        title: '管理',
        dataIndex: 'guanli',
        key: 'guanli',
        render: (val, row) => {
          return(
            <div>
              <Button type="primary">修改</Button>
              <Button type="danger" onClick={this.remove.bind(this, row.name)}>删除</Button>
            </div>
          )
        }
      }
    ]
    return(
      <div>
        <Button type="primary" onClick={this.add.bind(this)}>新增</Button>
        <Table columns={columns} dataSource={this.state.dataSource} />
      </div>
    )
  }
}
export default Day03;