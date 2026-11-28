import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  //const [email, setEmail] = useState(" ")
  //const [pass,setPass] = useState(" ")
  const location=useLocation();
  const [logindata,setLogindata]=useState({
    username:" ",
    password:" "
  })
  //const location=useLocation();
  const [registerdata,setRegisterdata]=useState({
    username:" ",
    password:" "
  })
  const navigate=useNavigate();

  function handlechange(e){
    e.preventDefault();
    setLogindata({
      ...logindata,
      [e.target.name]:e.target.value
  })
  setRegisterdata({
    ...registerdata,
    [e.target.name]:e.target.value
  })
  }
  const formsubmit=(event)=>{
   // const registerdata=location.state
    event.preventDefault();
    console.log("Login data",logindata)
    console.log("Register data",registerdata)
    if(logindata.username===registerdata.username && logindata.password===registerdata.password){
      console.log("if success")
      navigate("/dashboard",{state:logindata})
    }
    else{
      console.log("Invalid credential")
    }
  }
  return(
  <div className="h-screen bg-white-100 flex justify-center items-center">
    {/*}
    <div>
      <label>Email:</label>
      <input type="email" placeholder="Enter your email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <br></br>
      <label>Password:</label>
      <input type="password" placeholder="Enter your password" required value={pass} onChange={(e)=>setPass(e.target.value)}></input>
      <br></br>
      <button type="submit" onClick={console.log(name,email,pass)}>Submit</button>
      <button type="submit" onClick={()=>print()}>Submit</button>
    </div>
    */}
    <form onSubmit={formsubmit}className="bg-white p-2 rounded-lg shadow-md w-80 flex flex-col gap-3">
      <h1 className="font-bold text-center">LOGIN</h1>
      <input type="text" placeholder="Enter your username" required name="username" onChange={handlechange}
      className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
      <input type="password" placeholder="Enter your password" required name="password" onChange={handlechange}
     className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
      <button type="submit" className="bg-blue-500 text-black p-2 rounded hover:bg-green-700 font-semibold">Submit</button>
    </form>
  </div>
  )
}

export default Login