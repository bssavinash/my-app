import Search from './Search.js'
import React, { useEffect } from 'react'
import { setSearchTerm, setPage, setUserById, setInitialValues,setEditValues } from './listofUsers.slice'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import AddForm from './AddForm.js';
import Stack from '@mui/material/Stack';
import EditForm from './EditForm.js';

export default function Dashboard() {
  const dispatch = useDispatch()
  const [isAdd, setIsAdd] = useState(false)
  const [isEditing, setisEditing] = useState(false)
  const userDetails = useSelector(state => state.login_data.filterDetails)
  const userById = useSelector(state => state.login_data.userById)
  console.log('userbyid',userById)
  const serachTerm = useSelector(state => state.login_data.serachTerm)
  const length = useSelector(state => state.login_data.length)
 
  // const length = userDetails.length/4
  // const userDetails1 = userDetails.slice(0,length)
  // const userDetails2 = userDetails.slice(length,userDetails.length)
  // console.log(userDetails1,userDetails2)
  useEffect(()=>{
   dispatch(setInitialValues())
  },[])
  const handleChange = value => {
    dispatch(setSearchTerm(value))
  }
  const length1 = Math.ceil(length / 4)
  const handleOnChange = (e, page) => {
    // e.prventDefault()
    console.log(e, page)
    dispatch(setPage(page))
    const userDetails1 = userDetails.slice(4 * page - 1, 4 * page + 3)
    console.log('userdetails', userDetails1)
  }
  const handleAddClick = e => {
    setIsAdd(!isAdd)
  }
  const handleClickOnEdit = (e, id) => {
    e.preventDefault()
    setisEditing(true)
    dispatch(setUserById(id))
    
  }
const handleEdit =(data) => {
  dispatch(setEditValues(data))
}

  return (
    <div>
      {isAdd && <AddForm />}
      {isEditing && <EditForm item={userById} change={handleEdit}/>}
      {!isAdd && !isEditing &&
        <>
          <Search change={handleChange} />
          <table>
            <th>First Name</th>
            <th>Last Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Mobile</th>
          </table>
          <tbody>
            {
              userDetails.map((user) => {
                return (<>
                  <tr><td> {user.firstname} </td>
                    <td> {user.lastname}</td>
                    <td> {user.username}</td>
                    <td> {user.email}</td>
                    <td> {user.mobile}</td>
                    <button onClick={(e) => handleClickOnEdit(e, user.id)}>Edit</button>
                  </tr>

                </>
                )
              })
            }

          </tbody>
          <button onClick={handleAddClick}>AddItem</button>

          {console.log(length1)}
          <Stack spacing={2}>
            <Pagination count={length1} onChange={handleOnChange} />
          </Stack>
        </>
      }
    </div>
  )
}