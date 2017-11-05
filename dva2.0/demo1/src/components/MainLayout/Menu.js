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
      defaultOpenKeys={['sub1', 'sub2']}
      inlineCollapsed={false}
    >
      <SubMenu key="sub1" title={<span><Icon type="setting" /><span>第一个菜单</span></span>}>
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title={<span><Icon type="setting" /><span>第二个菜单</span></span>}>
        <Menu.Item key="/">
          <Link to="/"><Icon type="home" />Home</Link>
        </Menu.Item>
        <Menu.Item key="/users">
          <Link to="/users"><Icon type="bars" />Users</Link>
        </Menu.Item>
        <Menu.Item key="/day1">
          <Link to="/day1"><Icon type="bars" />day1</Link>
        </Menu.Item>
        <Menu.Item key="/day2">
          <Link to="/day2"><Icon type="bars" />day2</Link>
        </Menu.Item>
        <Menu.Item key="/day03">
          <Link to="/day03"><Icon type="bars" />day03</Link>
        </Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default MyMenu;
