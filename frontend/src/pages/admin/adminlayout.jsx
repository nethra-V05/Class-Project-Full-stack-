import { Link, Outlet } from "react-router-dom";

function Admin() {
    return ( 
        <>
        <div>Admin</div>
        <nav>
        <Link to={"/admin/admindashboard"}>Admin Dashboard     </Link>
        <Link to={"/admin/adminuserdetails"}>Admin User Details     </Link>
        <Link to={"/admin/adminsettings"}>Admin Settings</Link>
        </nav>
        <Outlet/>
        </>
        

     );
}

export default Admin;