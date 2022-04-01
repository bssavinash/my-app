import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4} from 'uuid';

const defaultValues = [
  { firstname: 'avinash', lastname: 'boddu', username: 'avinash98', email: 'sankeravinash98@gmail.com', mobile: '9999999999',id: uuidv4()},
  { firstname: 'aruna', lastname: 'boddu', username: 'aruna1243', password: 'aruna1243', email: 'arunakumari@gmail.com', mobile: '8888888888' ,id: uuidv4()},
  { firstname: 'aditya', lastname: 'boddu', username: 'aditya369', password: 'aditya369', email: 'adityaboddu@gmail.com', mobile: '7777777777' ,id: uuidv4()},
  { firstname: 'user', lastname: 'admin', username: 'admin1', password: 'admin1', email: 'admin@gmail.com', mobile: '6666666666' ,id: uuidv4()},
  { firstname: 'avinash', lastname: 'boddu', username: 'avinash98', email: 'sankeravinash98@gmail.com', mobile: '9999999999' ,id: uuidv4()},
  { firstname: 'aruna', lastname: 'boddu', username: 'aruna1243', password: 'aruna1243', email: 'arunakumari@gmail.com', mobile: '8888888888' ,id: uuidv4()},
  { firstname: 'aditya', lastname: 'boddu', username: 'aditya369', password: 'aditya369', email: 'adityaboddu@gmail.com', mobile: '7777777777' ,id: uuidv4()},
  { firstname: 'user', lastname: 'admin', username: 'admin1', password: 'admin1', email: 'admin@gmail.com', mobile: '6666666666' ,id: uuidv4()},
  { firstname: 'avinash', lastname: 'boddu', username: 'avinash98', email: 'sankeravinash98@gmail.com', mobile: '9999999999',id: uuidv4()},
  { firstname: 'aruna', lastname: 'boddu', username: 'aruna1243', password: 'aruna1243', email: 'arunakumari@gmail.com', mobile: '8888888888' ,id: uuidv4()},
  { firstname: 'aditya', lastname: 'boddu', username: 'aditya369', password: 'aditya369', email: 'adityaboddu@gmail.com', mobile: '7777777777' ,id: uuidv4()},
  { firstname: 'user', lastname: 'admin', username: 'admin1', password: 'admin1', email: 'admin@gmail.com', mobile: '6666666666' ,id: uuidv4()},
  { firstname: 'avinash', lastname: 'boddu', username: 'avinash98', email: 'sankeravinash98@gmail.com', mobile: '9999999999',id: uuidv4()},
  { firstname: 'aruna', lastname: 'boddu', username: 'aruna1243', password: 'aruna1243', email: 'arunakumari@gmail.com', mobile: '8888888888' ,id: uuidv4()},
  { firstname: 'aditya', lastname: 'boddu', username: 'aditya369', password: 'aditya369', email: 'adityaboddu@gmail.com', mobile: '7777777777' ,id: uuidv4()},
  { firstname: 'user', lastname: 'admin', username: 'admin1', password: 'admin1', email: 'admin@gmail.com', mobile: '6666666666' ,id: uuidv4()}]
  
export const ListOfUsers = createSlice({
  name: 'login_data',
  initialState: {
    userDetails: defaultValues,
    filterDetails: [],
    serachTerm: '',
    userById: {},
    length: defaultValues.length
  },
  reducers: {
    setSearchTerm: (state, action) => {
      const term = action.payload
      console.log('term',term)
      state.serachTerm = term
      console.log(term)
      const st = state.filterDetails.filter((value) => {
        if (value.username.toLowerCase().includes(term.toLocaleLowerCase())) {
          return value
        }
      }
      )
      state.filterDetails = st
    },
    setInitialValues(state,action){
      state.filterDetails = state.userDetails.slice(0,4)
    },
    setEditValues(state,action){
      const item = action.payload
      state.userDetails = state.userDetails.filter((data) => {
        if(data.id === item.id) {
          data = {...data,item}
        }
        return data
      })
      
    },
    setUserById(state, action) {
      const id = action.payload
      const user = state.userDetails.filter((data) => {
        if(data.id === id) return data
      })
      state.userById = user[0]
    },
    setPage: (state,action) => {
      const page = action.payload
      const st1 = state.userDetails.slice(4*(page-1),4*(page-1)+4)
      state.filterDetails = st1
    },
    AddItem: (state,action) =>{
      const Aitem = action.payload
      state.userDetails = [...state.userDetails,Aitem]
      state.length = state.length + 1
    }
  }

})


// Action creators are generated for each case reducer function
export const { setSearchTerm, setPage , AddItem, setUserById, setInitialValues,setEditValues} = ListOfUsers.actions

export default ListOfUsers.reducer