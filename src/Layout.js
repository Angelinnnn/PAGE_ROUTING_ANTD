
import { Dropdown, Layout,Menu } from 'antd'
import { CommentOutlined, HomeOutlined, LoginOutlined, LogoutOutlined, MenuOutlined, PhoneOutlined, SearchOutlined, TableOutlined, TrophyOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './Layout.css'

const {Header,Content,Sider,Footer}=Layout

const Layoutt = ({children}) => {
    
    const nav=useNavigate();

    const handle_logout=(e)=>{
       if(e.key=="logout")
        {
            nav('/');
        }
    }
    const menu=(
    <Menu onClick={handle_logout}>
        <Menu.Item key="logout" icon={<LoginOutlined/>}>Logout</Menu.Item>
    </Menu>
    )
  return (
    <div style={{color:'#DBECF4',backgroundColor:'pink'}}>
      <Layout style={{minHeight:'100vh'}}>
        <Header style={{background:'#21618C',fontSize:'20px',display: 'flex',padding:'15px', alignItems: 'center',justifyContent:'space-between'}}>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9a27e0a-52f7-4cec-a932-b6246308a58e/dfjzg88-a29fd068-094c-47fa-840b-89787b05d772.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5YTI3ZTBhLTUyZjctNGNlYy1hOTMyLWI2MjQ2MzA4YTU4ZVwvZGZqemc4OC1hMjlmZDA2OC0wOTRjLTQ3ZmEtODQwYi04OTc4N2IwNWQ3NzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NgOjsxW2qbAX7ns-ICPhFIle62iq-bNZUvzdmtvyxP0" style={{height:'50px',borderRadius:'70%',display:'flex'}}/>
         
         <b><p style={{marginLeft:'180px',color:'white'}}>Warner Bros College of Arts and Science</p></b>
       
       <Dropdown overlay={menu} trigger={['click']}><MenuOutlined style={{ fontSize: '24px', color: 'white', cursor: 'pointer',display:'flex'}}/></Dropdown>
        </Header>
        <Layout>        
          <Sider className='menu_class' width={210} style={{background: 'pink'}}>
      <Menu mode='inline' style={{height:'100%',background:'#EAEDED',paddingTop:'40px',borderRight:'0'}}>
     
      <Menu.Item key='1' icon={<TableOutlined/>} onClick={()=>nav('/table')} style={{color:'#0461a4',fontWeight:'bold'}}>
      Student Table
      </Menu.Item> 
      <Menu.Item key='2' icon={<HomeOutlined/>} style={{color:'#0461a4',fontWeight:'bold'}}>
      Home
      </Menu.Item>
      <Menu.Item key='3' icon={<UserOutlined/>} style={{color:'#0461a4',fontWeight:'bold'}}>
      User
      </Menu.Item>
      <Menu.Item key='4' icon={<PhoneOutlined/>} style={{color:'#0461a4',fontWeight:'bold'}}>
      Contact us
      </Menu.Item>
      <Menu.Item key='5' icon={<SearchOutlined/>} style={{color:'#0461a4',fontWeight:'bold'}}>
      Search
      </Menu.Item>
      <Menu.Item key='6' icon={<CommentOutlined/>} style={{color:'#0461a4',fontWeight:'bold'}}>
      Feedback
      </Menu.Item>
      <Menu.Item key='7' icon={<TrophyOutlined/>} style={{color:'#0461a4',fontWeight:'bold'}}>
      Achievements
      </Menu.Item>
      <Menu.Item key='8' icon={<LogoutOutlined/>} onClick={()=>nav('/')} style={{color:'#0461a4',fontWeight:'bold'}}>
      Logout
      </Menu.Item>
      
      
      </Menu>
        </Sider>
        <Content>
          {children}
        </Content>
        </Layout>
<Footer style={{border:'1px solid black', padding: '5px 0',background:'#21618C'}}>
   <a href='#' style={{marginLeft:'250px',fontSize:'14px', color:'white'}}>college@gmail.com</a>
  <p style={{marginLeft:'250px',color:'white'}}>&copy; All Rights Reserved</p>
  </Footer>
      </Layout>
    </div>
  )
}

export default Layoutt
