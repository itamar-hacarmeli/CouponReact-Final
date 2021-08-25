import { Button } from "@material-ui/core";
import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
import clientTypeEnum from "../../Enum/clientTypeEnum";
import CredentialsModel from "../../Models/CredentialsModel";
import UserModel from "../../Models/UserMudel";
import { loginAction } from "../../Redux/AuthState";
import store from "../../Redux/Store";
import notify from "../../Services/Notify";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




toast.configure()

function Login(): JSX.Element {
    const history = useHistory(); //redirect function
    const {register,handleSubmit} = useForm<CredentialsModel>();

    async function send(credential: CredentialsModel){
        switch(credential.clientType){
        case clientTypeEnum.ADMINISTRATOR:{
        //console.log("http://localhost:8080/groupon/admin/login",credential)
        try{
            const response = await axios.post<UserModel>("http://localhost:8080/groupon/admin/login/",credential);
            store.dispatch(loginAction(response.data));
            console.log(response);
            console.log("our new shiny token:"+response.data)
            toast("you have been succuessfully registred as a admin!!!")
            history.push("/adminPage");
        } catch(err){
            toast("No such admin in the system");
        }
            break;}
            case clientTypeEnum.COMPANY:{
                try{
                    const response = await axios.post<UserModel>("http://localhost:8080/groupon/company/login/",credential);
                    store.dispatch(loginAction(response.data));
                    console.log(response);
                    console.log("our new shiny token:"+response.data)
                    toast("you have been succuessfully registred as a company!!!")
                    history.push("/CompanyPage");
                } catch(err){
                    toast("No such company in the system");
                }
                    break;
                }
                case clientTypeEnum.CUSTOMER:{
                    try{
                        const response = await axios.post<UserModel>("http://localhost:8080/groupon/customer/login/",credential);
                        store.dispatch(loginAction(response.data));
                        console.log(response);
                        console.log("our new shiny token:"+response.data)
                        toast("you have been succuessfully registred as a customer!!!")
                        history.push("/customerPage");
                    } catch(err){
                        toast("No such customer in the system");
                    }
                        break;
                    }
      
    }
}
    
    return (
       
        <div className="login">
             <form onSubmit={handleSubmit(send)}>
            <h1> Log in</h1>
           
      <div className="inset">
        <p>
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input type="text" name="email" id="email"ref={register}/>
        </p>
        <p>
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" id="password"ref={register}/>
        </p>
        <p>
          <label htmlFor="checkbox">USER</label>
          <input type="radio" name="clientType" value="ADMINISTRATOR"  ref={register}/>Admin<br/><br/>
                <input type="radio" name="clientType" value="COMPANY" ref={register}/>Company<br/><br/>
                <input type="radio" name="clientType" value="CUSTOMER" checked ref={register}/>Customer<br/><br/>
                <NavLink to="/register">Not a customer yet?</NavLink>
        </p>
       
        </div>
        <p className="p-container">
          <button type="submit" name="go" id="go" value="Log in">Login</button>
        </p>
      </form>
     
      </div>
 
    );

}
export default Login;
