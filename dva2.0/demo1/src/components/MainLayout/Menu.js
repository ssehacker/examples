import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const SubMenu = Menu.SubMenu;
function MyMenu({ location, className }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="inline"
      className={className}
      theme="dark"
    >
      <SubMenu key="sub1" title={<span><Icon type="setting" /><span>第一个菜单</span></span>}>
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" title={<span><Icon type="setting" /><span>第二个菜单</span></span>}>
        <Menu.Item key="/">
          <Link to="/"><Icon type="home" />Home</Link>
        </Menu.Item>
        <Menu.Item key="/users">
          <Link to="/users"><Icon type="bars" />Users</Link>
        </Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default MyMenu;
