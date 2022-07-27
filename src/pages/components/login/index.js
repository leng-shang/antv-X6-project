import React, { useState, useEffect } from "react";
import { Form, Input, Button } from 'antd'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.formRef = React.createRef();
    }
    goLogin = async ()=>{
       let data = await this.formRef.current.validateFields()
       console.log(data,'data')
    }
    render() {
        return <div>
            <Form ref={this.formRef}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
            </Form>
            <Button type="primary" onClick={this.goLogin}>
                登录
            </Button>
        </div>
    }
}

export default Login