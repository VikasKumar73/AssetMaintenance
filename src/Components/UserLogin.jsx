import React, {useState} from 'react'; // eslint-disable-next-line
import {Link} from 'react-router-dom';
import App from "../App"
import "./LoginFrom.css"
const UserLogin = () =>{ // eslint-disable-next-line
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const adminData = {
        userEmail: "Test@gmail.com",
        userPassword : "Admin123"
    }
 const handleUserName = (e)=>{
     e.preventDefault()
     setUserName(e.target.value)
 }
 const handleEmail = (e)=>{
    e.preventDefault()
    setUserEmail(e.target.value)
}
const handlePassword = (e)=>{
    e.preventDefault()
    setUserPassword(e.target.value)
}// eslint-disable-next-line
const handleLogin = (e)=>{
    e.preventDefault()
    if(userEmail === adminData.userEmail && userPassword === adminData.userPassword){
alert("Logged in")
    }
    else{
        alert("Incorrect username or password");
    }
} 
    return (
        <div className = "loginForm">
            <form>
                <h2>Login From</h2>
                <p>User Name</p>
                <input 
                type="text" 
                name = 'name' 
                id = 'name'
                onChange = {handleUserName}
                />
                <p>User Mail</p>
                <input 
                type="mail" 
                name = 'name' 
                id = 'name'
                onChange = {handleEmail}
                />
                <p>User Password</p>
                <input 
                type="password" 
                name = 'name' 
                id = 'name'
                onChange = {handlePassword}
                />
            </form>
            <Link to = "/Table">
            <button>Login</button>
            </Link>
        </div>
    );
}

export default UserLogin;