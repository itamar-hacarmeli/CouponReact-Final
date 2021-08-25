import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Company from "../../../../Models/Company";
import notify from "../../../../Services/Notify";
import AdminPage from "../AdminPage/AdminPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createHashHistory} from 'history'
import "./AddCompany.css";
import jwtAxios from "../../../../Auth/jwtAxios";



const history = createHashHistory();//Return to the previous page of this code snippet code
toast.configure()
function AddCompany(): JSX.Element {
    const {register,handleSubmit,errors} = useForm<Company>();
    const history = useHistory();
    
    async function send(company: Company){
        try{
            const response = await jwtAxios.post<Company>("http://localhost:8080/groupon/admin/companies/addCompany",company);
            toast("A new company has been added");
            history.push("/allCompanies")
        }catch{
            toast("Company was not added");
        }
        
    }
    
    

    return (
        <div className="AddCompany ">
          
          <form onSubmit={handleSubmit(send)}>
            <h2>Add company</h2>
            <p>
          <label htmlFor="name">NAME</label>
               <input type="text" name="name" placeholder="name"  ref={register} required/>
               <br></br>
               </p>
                <p>
          <label htmlFor="email">EMAIL</label>
               <input type="email" name="email" placeholder="email"  ref={register} required/>
               <br></br>
               </p>
                 <p>
          <label htmlFor="password">PASSWORD</label>
               <input type="password" name="password" placeholder="password"  ref={register} required/>
               <br></br>
               </p>
               <p className="p-container">
               <button type="submit" name="go" id="go" value="Log in">Add</button>
               </p>
           
			</form>
        </div>
    );
}

export default AddCompany;
