import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const baseURL = "http://localhost:8800/users";
const Users = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        const fetchAllUsers = async ()=>{
            try {
                const res = await axios.get(baseURL);
                console.log("res = "+res)
                setUsers(res.data)
                console.log("users = "+users)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllUsers()
    },[])
    return (
        <div>
            <h1>Current Users</h1>
            <table className='userTable'id="usertable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserID</th>
                        <th>Password</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody className="tablebody" id="tablebody">
                    {users.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.userid}</td>
                                <td>{user.pw}</td>
                                <td>{user.email}</td>
                            </tr>
                    ))}
            </tbody>
            </table>
        </div>
    );
}

export default Users