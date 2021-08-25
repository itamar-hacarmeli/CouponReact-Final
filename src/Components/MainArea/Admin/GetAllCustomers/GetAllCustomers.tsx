import { Button } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import axios from "axios";
import { Component } from "react";
import { notify } from "react-notify-toast";
import { NavLink } from "react-router-dom";
import Customer from "../../../../Models/Customer";
import SingleCustomer from "../../../../Single/SingleCustomer/SingleCustomer";
import "./GetAllCustomers.css";
import DeleteIcon from '@material-ui/icons/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtAxios from "../../../../Auth/jwtAxios";


toast.configure()

interface GetAllCustomersState {
	customers: Customer[]
}

class GetAllCustomers extends Component<{}, GetAllCustomersState> {

    public constructor(props:{}) {
        super(props);
        this.state = {
			customers:[]
        };
    }
    public NotifyLikeABoss= async (message:string) =>{
        toast(message) 
    };

    public async componentDidMount(){
        const response = await jwtAxios.get("http://localhost:8080/groupon/admin/customers")
        const myResponse = response.data;
        console.log(myResponse);

        this.setState({
            customers: myResponse
        })
    }

    public deleteData = async (id:string)=>{
        try{
            await jwtAxios.delete("http://localhost:8080/groupon/admin/customers/"+id);
            this.NotifyLikeABoss("Customer: " + id +" was deleted")
            this.componentDidMount();
        }catch{
            this.NotifyLikeABoss("Customer was not deleted");
        }
    }

    public render(): JSX.Element {
        return (
            <div className="AllCustomers">
			
                <table className="table">
 
    
      <th>Id</th>
      <th >First name</th>
      <th >Last name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Update</th>
      <th>Delete</th>
    {this.state.customers.map((item) =>(
        <tbody>
         <tr>
             <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>  
            <td><NavLink exact to = {{pathname : '/updateCustomer'+item.id}}>
                <Edit className="edit"/>
                </NavLink>
            </td>
            <td><button onClick={() => this.deleteData(item.id)}><DeleteIcon/></button> </td>
            </tr>
        </tbody>
        ))}
         </table>

            </div>
        );
    }
}

export default GetAllCustomers;
