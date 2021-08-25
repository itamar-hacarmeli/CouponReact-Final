import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import jwtAxios from "../../../../Auth/jwtAxios";
import Customer from "../../../../Models/Customer";
import notify from "../../../../Services/Notify";
import "./AddCustomer.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

function AddCustomer(): JSX.Element {
    const {register,handleSubmit,errors} = useForm<Customer>();
    const history = useHistory();


    async function send(customer: Customer){
        try{
            const response = await jwtAxios.post<Customer>("http://localhost:8080/groupon/admin/customers/addCustomer",customer);
            console.log(response);
            toast("A new customer has been added");
             history.push("/allCustomers");
        }catch{
           toast("The Customer was not added");
        }
        
    }
    

    return (
        <div className="AddCustomer">
          
            <form onSubmit={handleSubmit(send)}>
            <h1>Add Customer</h1>
                 <p>
                <label htmlFor="firstName">FIRST NAME</label>
               <input type="text" name="firstName" placeholder="first name" ref={register} required/>
               <br></br>
               </p>
               <p>
                <label htmlFor="email">LAST NAME</label>
               <input type="text" name="lastName" placeholder="last name" ref={register} required/>
               <br></br>
               </p>
               <p>
                <label htmlFor="email">EMAIL</label>
               <input type="email" name="email" placeholder="email" ref={register} required/>
               <br></br>
               </p>
               <p>
                <label htmlFor="password">PASSWORD</label>
               <input type="password" name="password" placeholder="password" ref={register} required/>
               <br></br>
               </p>
              
               <p className="p-container">
               <button type="submit" name="go" id="go" value="Log in">Add</button>
               </p>
            </form>
           
        </div>
    );
}
export default AddCustomer;
