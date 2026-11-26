import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
  //const [email, setEmail] = useState(" ")
  //const [pass,setPass] = useState(" ")
  const navigate=useNavigate();
  const[formdata,setFormdata]=useState({
    username:" ",
    password:" "
  })
  function handlechange(e){
    e.preventDefault();
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }

  const formsubmit=(event)=>{
    event.preventDefault();
    alert("Login Successful")
    navigate("/dashboard",{
      state:formdata
    })
    console.log("Printing Inside function")
    console.log(formdata)
  }
  return(
  <div>
    {/*}
    <div>
      <input type="email" placeholder="Enter your email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input type="password" placeholder="Enter your password" required value={pass} onChange={(e)=>setPass(e.target.value)}></input>
      <button type="submit" onClick={()=>print()}>Submit</button>
    </div>
    */}
    <form onSubmit={formsubmit}>
      <input type="text" placeholder="Enter your username" required name="username" onChange={handlechange}></input>
      <input type="password" placeholder="Enter your password" required name="password" onChange={handlechange}></input>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Login