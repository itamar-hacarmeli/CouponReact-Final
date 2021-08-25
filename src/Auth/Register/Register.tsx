import axios from "axios";
import { send } from "process";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CredentialsModel from "../../Models/CredentialsModel";
import Customer from "../../Models/Customer";
import UserModel from "../../Models/UserMudel";
import { loginAction, registerAction } from "../../Redux/AuthState";
import store from "../../Redux/Store";
import notify from "../../Services/Notify";
import jwtAxios from "../jwtAxios";
import "./Register.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




toast.configure()







function Register(): JSX.Element {
    const history = useHistory(); //redirect function
    // צריך לעשות erorrs
    const {register,handleSubmit} = useForm<Customer>();
    async function send(customer:Customer){
        try{
            const response = await jwtAxios.post<Customer>("http://localhost:8080/groupon/guest/register/",customer);
            store.dispatch(registerAction(response.data));
            toast("you have been succuessfully registred !!!");
            history.push("/customerPage");
        }catch(err){
            notify.error(err);
        }
    }
    return (
        <div className="Register">
            <form onSubmit={handleSubmit(send)}>
<h1> Register</h1>

<div className="inset">
<p>
<label htmlFor="firstname">FIRST NAME</label>
   <input type="text" name="firstName"  required checked ref={register}/>
</p>
<p>
<label htmlFor="lastname">LAST NAME</label>
   <input type="text" name="lastName" required checked ref={register}/>
</p>
<p>
<label htmlFor="email">EMAIL ADDRESS</label>
<input type="text" name="email" required id="email"ref={register}/>
</p>
<p>
<label htmlFor="password">PASSWORD</label>
<input type="password" name="password" required id="password"ref={register}/>
</p>
<p>
<label htmlFor="checkbox">USER</label>
   <input type="radio" name="clientType" value="CUSTOMER" checked ref={register}/>Customer<br/><br/>
</p>
</div>
<p className="p-container">
<button type="submit" name="go" id="go" value="Log in">Register</button>
</p>
</form>

        </div>
    );
}

export default Register;
