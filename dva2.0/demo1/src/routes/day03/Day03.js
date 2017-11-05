import React from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
const FormItem = Form.Item;

class Day03 extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      dataSource : [
        {
      name: '小明',
      performance: 100,
      sex: 1,
      ega: 18
       },
        {
          name: '小华',
          performance: 99,
          sex: 0,
          ega: 18
        },
        {
          name: '小周',
          performance: 0,
          sex: 1,
          ega: 18
        },
        {
          name: '小孙',
          performance: 150,
          sex: 0,
          ega: 18
        }
      ]
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }

      let dataSource = this.state.dataSource;
      dataSource.push(values)

      this.setState({
        dataSource,
        visible: false,
      });
    });
  }

  handleCancel = (e) => {

    this.setState({
      visible: false,
    });
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
        title: '年龄',
        dataIndex: 'ega',
        key: 'ega',
      },
      {
        title: '管理',
        dataIndex: 'guanli',
        key: 'guanli',
        render: (val, row) => {
          return(
            <div>
              <Button type="primary" onClick={this.showModal.bind(this)}>修改</Button>
              <Button type="danger" onClick={this.remove.bind(this, row.name)}>删除</Button>
            </div>
          )
        }
      }
    ]
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showModal.bind(this)}>新增</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <FormItem
              {...formItemLayout}
              label="名字"
              hasFeedback
            >
              {getFieldDecorator('name', {
                rules: [{
                  required: true, message: '请输入名字',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="成绩"
              hasFeedback
            >
              {getFieldDecorator('performance', {
                rules: [{
                  required: true, message: '请输入成绩',
                }, {

                }],
              })(
                <Input type="number" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="性别"
              hasFeedback
            >
              {getFieldDecorator('sex', {
                rules: [{
                  required: true, message: '请输入性别',
                }],
              })(
                <Input type="number" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="年龄"
              hasFeedback
            >
              {getFieldDecorator('ega', {
                rules: [{
                  required: true, message: '请输入年龄',
                }, {

                }],
              })(
                <Input type="number" />
              )}
            </FormItem>
          </Form>
        </Modal>
        <Table columns={columns} dataSource={this.state.dataSource} />
      </div>
    )
  }
}
export default Form.create()(Day03);