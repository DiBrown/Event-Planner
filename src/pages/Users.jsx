import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const baseURL = "http://localhost:8800/users";
const Users = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        const fetchAllUsers = async ()=>{
            try {
                const res = await axios.get(baseURL);
                setUsers(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllUsers()
    },[])

    const handleDelete = async (id)=>{
        console.log("handleDelete "+id);
        try {
            console.log("before call");
            await axios.delete("http://localhost:8800/users/"+id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="tablebody" id="tablebody">
                    {users.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.userid}</td>
                                <td>{user.pw}</td>
                                <td>{user.email}</td>
                                <td><button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
                                <button className="update">Update</button></td>
                            </tr>
                    ))}
            </tbody>
            </table>
            <p>
                <button className="largebutton">
                    <Link to="/addUser">Add User</Link>
                </button>
            </p>
        </div>
    );
};

export default Users