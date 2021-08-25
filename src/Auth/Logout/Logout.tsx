import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../Redux/AuthState";
import store from "../../Redux/Store";
import notify from "../../Services/Notify";
import "./Logout.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


function Logout(): JSX.Element {
   const history = useHistory();
   useEffect(()=>{
       store.dispatch(logoutAction());
       toast("You are been sucssesfully logout");
       history.push("/home");
   })
    return null; 
}

export default Logout;
