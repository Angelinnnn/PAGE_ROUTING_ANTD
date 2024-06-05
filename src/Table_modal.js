import React from 'react'
import { Modal,Form,Input,Button } from 'antd'

const Table_modal = ({visible,change,save,record}) => {
  return (
    <div>
          <Modal
    title="Record"
    visible={change} 
  onCancel={() => visible(false)} // Close the modal when canceled
  footer={[<Button key='cancel' onClick={() => visible(false)}>Cancel</Button>, 
  <Button key='save' onClick={save}>Save</Button>]}
    >
      <Form>
      <Form.Item label='Roll No'>
      <Input 
      name='roll'
      label="Roll No"
      value={record.roll}
      placeholder='Roll Number'
      onChange={change}
      
      />
      </Form.Item>

      <Form.Item label='Name'>
    <Input 
      name='name'
      label="Name"
      value={record.name}
      placeholder='Name'
      onChange={change}
      
      />
      </Form.Item>

      <Form.Item label='Department'>
        <Input 
      name='dept'
      label="Department"
      value={record.dept}
      placeholder='Department'
      onChange={change}
  
      />
</Form.Item>
<Form.Item label='DOB'>
        <Input 
      name='dob'
      value={record.dob}
      placeholder='DOB'
      onChange={change}
      />
</Form.Item>
</Form>
    </Modal>
    </div>
  )
}

export default Table_modal
