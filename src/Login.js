import React from 'react'
import { Input,Form,Button} from 'antd'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const navigate=useNavigate()
const handle_submit=()=>
    {
        navigate('/table')
    }
  return (
    <div ><br/>
        <h2>Login Page</h2>
        
   <Form
   name="login"
   labelCol={{span:24}}
    wrapperCol={{span:24}}
    style={{maxWidth:200, marginTop:'40px', marginLeft:'530px'}}
    autoComplete='off'
    labelAlign='left'
    onFinish={handle_submit}
    
   >
   <Form.Item
   label="Username"
   name="username"
   rules={[
    {
        required:true,
        message:'Enter the username',
    }
   ]}
   
   >
    <Input /></Form.Item>
    <Form.Item
   name="password"
   label="Password"

   rules={[
    {
        required:true,
        message:'Enter the password',
    },
   ]} 
  
   >

    <Input.Password /></Form.Item>
    <a href="#" style={{fontSize:'14px'}}>Forgot Password?</a>
    <Form.Item
    wrapperCol={{
        offset:4,
        span:16
    }}
    >
        <br/>
        <Button type="primary" htmlType="submit">Submit</Button>
    </Form.Item>
    </Form>
    </div>
  )
}

export default Login
