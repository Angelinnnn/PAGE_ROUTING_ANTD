import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table,Modal, Input,Form } from 'antd';
import { DeleteFilled, EditFilled, PlusSquareFilled } from '@ant-design/icons';

const Student_table = () => {
  const[modal,set_modal]=useState(false)
  const[edit_record,set_edit_record]=useState(null)
  const[new_record,set_new_record]=useState({})


    const nav=useNavigate();

    const handle_click=(record)=> 
        {
            nav(`/student/${record.roll}`,{state:{students:record}});
        }
const handle_edit=(record)=>//record-> contains single row info like, rollno, name, dept
  {
    set_modal(true);//displayes the model cus its true
    set_edit_record(record);//stores the data of the currently selected record for editing
    set_new_record(record);//This pre-fills the form fields in the modal with the existing data
    //changes made by the user is also reflected
  }
const handle_delete=(record)=>
  {
    set_Data(Data.filter(i=>i.id!==record.id)) //checks if the selected record(i) is not equal to the actual record
                                              //and prints all the data except the selected record 
  }

const handle_save=()=>
  {
    if(edit_record) //edit_record is not null if gets executed
      {
    set_Data(Data.map(i=>i.id===edit_record.id?new_record:i))
      }
      else { //edit_record is null if gets executed (add's save)
        const new_id = Data.length + 1; //Data's length=4 newid= 4+1=> 5 
    set_Data([...Data, { id: new_id.toString(), ...new_record }]) //...Data=> copies the existing 4 arrays
      }                                                           //id: 5 (converted to string). new_record is added
      set_modal(false)
  
  }
  const handle_change=(e)=>
    {
      const {name,value}=e.target;
      // const parsedValue = name === 'roll'&&value!=='' ? parseInt(value) : value;
      set_new_record(p=>({...p,[name]:value}))
    }

    const handle_add=()=>
      {
        set_modal(true);
        set_edit_record(null);
        set_new_record({});
      }
    const cols=[{title:'Rollno',dataIndex:'roll'},
    {title:'Name',dataIndex:'name',
    render:(text,record)=>(
            <p onClick={()=>handle_click(record)}>{text}</p>
        )
    },
    {title:'Department',dataIndex:'dept'},
    {title:'Action',dataIndex:'action',
      render:(text,record)=>
        (
  
          <div>
          <Button icon={<EditFilled/>} onClick={()=>handle_edit(record)} style={{border:'none',margin:'10px',textAlign:'center'}}/>
          <Button icon={<DeleteFilled/>} onClick={()=>handle_delete(record)} style={{border:'none',textAlign:'center'}}/>
          </div>
        )
    }
    ];

    const [Data,set_Data]=useState([{id:'1',roll:'1',name:'Wanda',dept:'BCA',dob:'27-03-2005',contact:'908765654',attend:'98',bloodgrup:'A-ve',
    course:'BCA',percenage:'89',year:'I',"sub1": "90",
    "sub2": "85",
    "sub3": "88",
    "sub4": "92","total_marks": 355},

    {id:'2',roll:'2',name:'Natasha',dept:'B.tech',dob:'6-10-2004',percenage:'90',bloodgrup:'B-ve',contact:'9087567434',attend:'84',
    course:'B.Tech',year:'II',"sub1": "78",
    "sub2": "82",
    "sub3": "79",
    "sub4": "80","total_marks": 319},

    {id:'3',roll:'3',name:'Hermonie',dept:'B.com CS',dob:'7-09-2004',percenage:'86',bloodgrup:'A+ve',contact:'900853265', attend:'80',
    course:'B.com CS',year:'I',"sub1": "85",
    "sub2": "89",
    "sub3": "91",
    "sub4": "87","total_marks": 352},

    {id:'4',roll:'4',name:'Ginny',dept:'BBA',dob:'18-05-2005',percenage:'97',bloodgrup:'O-ve',contact:'9374078824',attend:'90',
    course:'BBA',year:'IV', "sub1": "92",
    "sub2": "94",
    "sub3": "90",
    "sub4": "88","total_marks": 364},
    ]);

  return (
    <div>
      <u><h1>Student Table</h1></u>
    <div style={{ position: 'relative', paddingBottom: '25px' }}>
       
        <br/>
      <Table dataSource={Data} columns={cols} pagination={false} style={{marginLeft:'250px', width:'50%',cursor:'default',
    border: '1px solid black',
    }}/>
    <Button icon={<PlusSquareFilled/>} style={{ position: 'absolute', top: '10px', right: '150px'}} onClick={handle_add}>Add</Button>
    <Modal
    title="Record"
    visible={modal} 
  onCancel={() => set_modal(false)} // Close the modal when canceled
  footer={[<Button key='cancel' onClick={() => set_modal(false)}>Cancel</Button>, 
  <Button key='save' onClick={handle_save}>Save</Button>]}
    >
      <Form>
      <Form.Item label='Roll No'>
      <Input 
      name='roll'
      label="Roll No"
      value={new_record.roll}
      placeholder='Roll Number'
      onChange={handle_change}
      
      />
      </Form.Item>

      <Form.Item label='Name'>
    <Input 
      name='name'
      label="Name"
      value={new_record.name}
      placeholder='Name'
      onChange={handle_change}
      
      />
      </Form.Item>

      <Form.Item label='Department'>
        <Input 
      name='dept'
      label="Department"
      value={new_record.dept}
      placeholder='Department'
      onChange={handle_change}
  
      />
</Form.Item>
<h3>Personal Details</h3>
<Form.Item label='DOB'>
        <Input 
      name='dob'
      value={new_record.dob}
      placeholder='DOB'
      onChange={handle_change}
      />
</Form.Item>
<Form.Item label='Blood Group'>
        <Input 
      name='bloodgrup'
      value={new_record.bloodgrup}
      placeholder='Blood Group'
      onChange={handle_change}
      />
</Form.Item>
<Form.Item label='Contact Number'>
        <Input 
      name='contact'
      value={new_record.contact}
      placeholder='Contact Number'
      onChange={handle_change}
      />
</Form.Item>
<h3>Academic Details</h3>
<Form.Item label='Year'>
        <Input 
      name='year'
      value={new_record.year}
      placeholder='Year'
      onChange={handle_change}
      />
</Form.Item>
<Form.Item label='Percentage'>
        <Input 
      name='percenage'
      value={new_record.percenage}
      placeholder='Percentage'
      onChange={handle_change}
      />
</Form.Item>
<Form.Item label='Attendance'>
        <Input 
      name='attend'
      value={new_record.attend}
      placeholder='Attendance'
      onChange={handle_change}
      />
    </Form.Item>
    <h3>Mark Details</h3>
    <Form.Item label='Subject 1'>
        <Input 
      name='sub1'
      value={new_record.sub1}
      placeholder='Subject 1'
      onChange={handle_change}
      />
      </Form.Item>

      <Form.Item label='Subject 2'>
        <Input 
      name='sub2'
      value={new_record.sub2}
      placeholder='Subject 2'
      onChange={handle_change}
      />
      </Form.Item>

      <Form.Item label='Subject 3'>
        <Input 
      name='sub3'
      value={new_record.sub3}
      placeholder='Subject 3'
      onChange={handle_change}
      />
</Form.Item>

<Form.Item label='Subject 4'>
        <Input 
      name='sub4'
      value={new_record.sub4}
      placeholder='Subject 4'
      onChange={handle_change}
      />
</Form.Item>
<Form.Item label='Total'>
        <Input 
      name='total_marks'
      value={new_record.total_marks}
      placeholder='Total'
      onChange={handle_change}
      />
</Form.Item>
</Form>
    </Modal>
    </div>
    </div>
  )
}

export default Student_table