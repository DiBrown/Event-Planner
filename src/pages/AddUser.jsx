import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
    const [user,setUser] = useState({
        userid:"",
        pw:"",
        email:""
    });

    const navigate = useNavigate();

    const handleChange = (e)  =>{
        setUser(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async e =>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/users", user)
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    console.log(user);

    return(
        <div className='form'>
            <h1>Add New User</h1>
            <input type="text" placeholder="userid" onChange={handleChange} name="userid" />
            <input type="password" placeholder="password"onChange={handleChange} name="pw" />
            <input type="email" placeholder="email"onChange={handleChange} name="email" />
            <button onClick={handleClick}>Add User</button>
        </div>
    )
}

export default AddUser