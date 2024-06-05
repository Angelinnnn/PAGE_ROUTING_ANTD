import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { Button, Table } from 'antd';

const Result_table = () => {
    const nav=useNavigate();
const {state}=useLocation();
    const student=state.students
// const student=student_data[id];
const column=[
    {
        title:'Category',
        dataIndex:'Category'
    },
    {
        title:'Data',
        dataIndex:'Data'
    }
]
const personal_data=[
    { key: '1', Category: 'Name', Data: student.name },
    { key: '2', Category: 'Dob', Data: student.dob },
    { key: '3', Category: 'Blood Group', Data: student.bloodgrup },
    { key: '4', Category: 'Contact', Data: student.contact },
]
const academic_data=[
    // { key: '5', Category: 'Course', Data: student.course },
    { key: '6', Category: 'Year', Data: student.year },
    { key: '7', Category: 'Percentage', Data: student.percenage + '%' },
    { key: '8', Category: 'Attendance', Data: student.attend + '%' },
]
const marks_data=[
    { key: '9', Category: 'Subject 1', Data: student.sub1 },
    { key: '10', Category: 'Subject 2', Data: student.sub2 },
    { key: '11', Category: 'Subject 3', Data: student.sub3 },
    { key: '12', Category: 'Subject 4', Data: student.sub4 },
    { key: '13', Category: 'Total Marks', Data: student.total_marks },

]
  return (
    <div>
        {/* <h2>Student Table</h2> */}
        <h4>Personal data</h4>
<Table columns={column} dataSource={personal_data} pagination={false} style={{marginLeft:'350px', width:'30%',cursor:'default',
    border: '1px solid black',

    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',}}/> 
    <h4>Academic data</h4>
<Table columns={column} dataSource={academic_data} pagination={false} style={{marginLeft:'350px', width:'30%',cursor:'default',
    border: '1px solid black',
   
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',}}/>      
<h4>Mark data</h4>
<Table columns={column} dataSource={marks_data} pagination={false} style={{marginLeft:'350px', width:'30%',cursor:'default',
    border: '1px solid black',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',}}/> 
    <br/>
<Button onClick={()=>nav('/table')} style={{marginBottom:'20px'}}>Back &#8656;</Button>
    </div>
 
)
  
}

export default Result_table
