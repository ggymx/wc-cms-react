//引入组件类
import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
//引入antDesign的组件
import { Form, Input, Button, message } from 'antd';
//引入字体图标
import IconFont from '../../components/IconFont';
//引入私有样式表
import styles from './index.module.css';
import axios from '../../request';
class Login extends Component{
    //渲染DOM
    constructor(props){
        super(props);
        // this.onSubmit=this.onSubmit.bind(this);
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.loginWrap}>
                <div className={styles.msLogin}>
                    <div className={styles.msTitle}>后台管理系统</div>
                    <Form className={styles.msContent}>                       
                        <Form.Item>
                            {
                                //表单控件
                                getFieldDecorator('username', {
                                    initialValue: 'admin',
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input addonBefore={<IconFont type="anticon-lx-people" />} />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    initialValue: 'admin',
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input type="password" addonBefore={<IconFont type="anticon-lx-lock" />} />
                                )
                            }
                        </Form.Item>
                        <div className={styles.loginBtn}>
                            <Button type="primary" onClick={this.onSubmit.bind(this)}>登录</Button>
                        </div>
                        <p className={styles.loginTips}>Tips : 用户名和密码随便填。</p>
                    </Form>
                </div>
            </div>
        )
    }
    //提交
    onSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('登录数据----',values);
                localStorage.setItem('ms_username', values.username);
                axios.post('http://rap2api.taobao.org/app/mock/225049/login',{
                  username:values.username,
                  password:values.password
                }).then((res)=>{
                    console.log('登录返回的数据-----',res);
                    message.success('登录成功！');
                    res.msg==='ok' && this.props.history.push('/main/dashboard');
                    // this.props.history.push('/main/dashboard');
                }).catch((err)=>{
                    console.log('失败----',err);
                });          //路由
               
            } else {
                message.error('登录失败!');
                return false;
            }
        });
    }
}

export default Form.create({ name: 'login' })(withRouter(Login));