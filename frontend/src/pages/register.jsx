import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerschema } from "../component/formschema/registerschema"
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const{register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("Registration successful")
        navigate("/", {
            state: data
        })
    }
    return(
        <div className ="h-screen bg-gray-100 flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit1)} className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col gap-3">
            <input type="text" placeholder="Enter your name:" {...register("name")}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
            <p className="text-red-500 text-sm">{errors.name?.message}
            </p>
            <input type="email" placeholder="Enter your email:" {...register("email")}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
            <p className="text-red-500 text-sm">
                {errors.email?.message}</p>
            <input type="password" placeholder="Enter your password:" {...register("password")}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
            <p className="text-red-500 text-sm">
                {errors.password?.message}</p>
            <input type="number" placeholder="Enter your age:" {...register("age")}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black-400"/>
            <p className="text-red-500 text-sm">
                {errors.age?.message}</p>
            <button type="submit" className="bg-blue-500 text-black p-2 rounded hover:bg-green-700 font-semibold">Button</button>
        </form>
        </div>
    );
}

export default Register;