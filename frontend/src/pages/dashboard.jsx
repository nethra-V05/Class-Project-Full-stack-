import { useState } from "react";
import { useLocation } from "react-router-dom";


function Dashboard(){
    const location=useLocation();
    const[userdata, setUserdata] =useState("");
    function displaydate(){
        setUserdata(location.state);
        console.log(userdata)
    }
    return (
        <>
        <button onClick={displaydate}>button</button>
        </>
    );
}
export default Dashboard