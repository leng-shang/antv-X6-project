import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Menu } from "antd"
import {HomeOutlined,MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons'
const SubMenu = Menu.SubMenu;
const defaultselectedKey = "/";

// 递归渲染menu
function renderMenu (menuList) {
  return menuList.map(({ name, route, child, icon, active_icon }) =>
  child&&child.length > 0 ?
  <SubMenu
    key={route}
    title={
      <span>
         {icon && <icon />}
        <span style={{color: "#fff", width: "140px", display: "inline-block"}}>{name}</span>
      </span>
    }>{renderMenu(child)}
  </SubMenu>
  :
  <Menu.Item key={route}>
    <Link to={route}>
      {icon && <icon/>}
      <span  style={{color: "#fff",width: "140px"}}>{name}</span>
    </Link>
  </Menu.Item>
)
}

class LeftSlide extends Component {

  state = {
    openKeys: [], // 展开 SubMenu 值为 key
    selectedKeys: [], // 选中的 Menu.Item 的 key
  }

  componentWillMount () {
    this.regPath()
  }

  componentWillReceiveProps () {
    this.regPath()
  }

  regPath = () => {
    let { hash } = window.location
    hash = hash.slice(2);
    hash = hash || defaultselectedKey;
    let [mainMenu, sonMenu] = hash.split("/");
    let openKey = `/${mainMenu}`;
    let selectKey = `${openKey}${sonMenu ? "/" + sonMenu : ""}`;
    this.setState({
      openKeys: [openKey],
      selectedKeys: [selectKey]
    });
  }
  // SubMenu 点击触发
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render () {
    let menuList = [
      {
        name: "首页",
        route: "/home",
        icon: HomeOutlined,
        child: []
      },
      
    ]


    return (
      <div>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          inlineIndent={20}
        >
          {renderMenu(menuList)}
        </Menu>
        <div className="menu_box">
         {/* <Icon type= {this.state.collapsed? "menu-unfold":"menu-fold"} onClick={this.toggleCollapsed} className="point" style={{color: "#fff", fontSize: "20px", marginLeft: "20px"}}/> */}
         {this.state.collapsed&&<MenuUnfoldOutlined onClick={this.toggleCollapsed} className="point" style={{color: "#fff", fontSize: "20px", marginLeft: "20px"}}/>}
         {!this.state.collapsed&&<MenuFoldOutlined onClick={this.toggleCollapsed} className="point" style={{color: "#fff", fontSize: "20px", marginLeft: "20px"}}/>}
        </div>
      </div>
    );
  }
}
export default LeftSlide
