import React from 'react';
import { Table, Button } from 'antd';
class Day2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          name: '周勇',
          age: 28,
          sex: 1,
        },
        {
          name: '孙冯艳',
          age: 18,
          sex: 0,
        },
        {
          name: '周依',
          age: 1,
          sex: 0,
        },
        {
          name: '周贰',
          age: 3,
          sex: 1,
        }
      ],
    }
  }

  add() {
    // 解构
    let dataSource = this.state.dataSource;
    dataSource.push(
      {
        name: '临时',
        age: 1,
        sex: 1,
      }
    );
    this.setState({
      dataSource,
    });
  }

  remove(name) {
    console.log(name);
    let dataSource = this.state.dataSource.filter((item) => {
      if (item.name === name) {
        return false;
      } else {
        return true;
      }
    });

    this.setState({
      dataSource,
    });
  }

  render(){

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render: (val) => {
          if (val === 0) {
            return '女';
          } else {
            return '男';
          }
        }
      },
      {
        title: '操作',
        dataIndex: 'option',
        key: 'option',
        render: (val, row) => {
          return (
            <div>
              <Button>修改</Button>
              <Button
                onClick={this.remove.bind(this, row.name)}
              >删除</Button>
            </div>
          )
        }
      }
    ]
    return(
      <div>
        <Button
          type="primary"
          onClick={this.add.bind(this)}
        >新增</Button>
        <Table dataSource={this.state.dataSource} columns={columns} />
      </div>
    )
  }
}
export default Day2;