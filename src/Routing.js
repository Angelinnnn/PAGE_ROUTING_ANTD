import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Student_table from './Components/student_table'
import Result_table from './result_table'
import Layoutt from './Layout'
const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/table' element={<Layoutt><Student_table/></Layoutt>}/>
            <Route path='/student/:id' element={<Layoutt><Result_table/></Layoutt>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
