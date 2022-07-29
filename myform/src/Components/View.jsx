import React from 'react'
import {Icon} from 'react-icons-kit'
import { FaTrashAlt } from "react-icons/fa";
export const View = ({users,deleteUser}) => {
    
    return users.map(user=>(
        
        <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.dob}</td>
            <td>{user.gender}</td>
            <td className='delete-btn' onClick={()=>deleteUser(user.name)}>
                <Icon icon={FaTrashAlt}/>
            </td>           
        </tr>            
    
))
}

