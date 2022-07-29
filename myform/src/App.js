import React,{useState, useEffect} from 'react'
import { View } from './Components/View';


// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('users');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [users, setUsers]=useState(getDatafromLS());

  // input field states
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  // form submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let user={
      name,
      age,
      dob,
      gender
    }
    setUsers([...users,user]);
    setName('');
    setAge('');
    setDob('');
    setGender('');
  }

  // // delete book from LS
  const deleteUser=(name)=>{
    const filteredUsers=users.filter((element,index)=>{
      return element.name !== name
    })
    setUsers(filteredUsers);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(users));
  },[users])

  return (
    <div className='wrapper'>
      <h1>Employee Form</h1>
      <div className='main'>
        <div className='form-container'>
          <form autoComplete="off" className='form-group'
              onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setName(e.target.value)} value={name}></input>
                <br></br>
                <label>Age</label>
                <input type="number" className='form-control' required
                onChange={(e)=>setAge(e.target.value)} value={age}></input>
                <br></br>
                <label>DOB</label>
                <input type="date" className='form-control' required
                onChange={(e)=>setDob(e.target.value)} />
                <br></br>
                <label>Gender</label>
                <select className='form-control' name="gender" id="" onChange={(e)=>setGender(e.target.value)} value={gender}>
                  <option value="choose">Choose</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <br />
                <button type="submit" className='btn btn-success btn-ms'>
                  Submit
                </button>
          </form>
        </div>

        <div className='view-container'>
          {users.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View users={users} deleteUser={deleteUser}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setUsers([])}>Remove All</button>
          </>}
          {users.length < 1 && <div>No usres are added yet</div>}
        </div>
      </div>
    </div>
  )
}

export default App

