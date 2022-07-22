import {
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {  Menu } from 'antd';
import React, {  useState } from 'react';
import {useNavigate} from 'react-router-dom'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('首页', '/home', <HomeOutlined />),
  getItem('设置', '/setting', <SettingOutlined />),
  // getItem('Navigation One', 'sub1', <MailOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Option 7', '7'),
  //   getItem('Option 8', '8'),
  // ]),
  // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  // ]),
];

const LeftMenu = () => {
  const navigate = useNavigate()
  
  const goPage = (e)=>{
    const {key} = e
    navigate(key)
  }

  return (
    <div
      style={{
        width: 156,
      }}
    >
      <Menu
        onClick={goPage}
        defaultSelectedKeys={['/home']}
        defaultOpenKeys={['/home']}
        mode="inline"
        theme="dark"
        // inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default LeftMenu;