import { TextField } from "@material-ui/core";
import axios from "axios";
import { Component, SyntheticEvent } from "react";
import { Button } from "reactstrap";
import jwtAxios from "../../../../Auth/jwtAxios";
import Customer from "../../../../Models/Customer";
import notify from "../../../../Services/Notify";
import "./GetOneCustomer.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
interface GetOneCustomerProps{

}

interface GetOneCustomerState{
    customer:Customer;
    id:String;
}

class GetOneCustomer extends Component<GetOneCustomerProps,GetOneCustomerState>{

    public constructor(props:GetOneCustomerProps){
        super(props);
        this.state = {
            customer:new Customer,
            id:""
        }
    };
    public NotifyLikeABoss= async (message:string) =>{
        toast(message) 
    };


    getData = async() =>{
        try{
        const response = await jwtAxios.get("http://localhost:8080/groupon/admin/customers/"+this.state.id);
        console.log(response);
        const myResponse = response.data;
        console.log(myResponse);
        if (myResponse.length<1){
           toast("No data was found");
        } else {
            toast("Success");
        }
        this.setState({
             customer:myResponse
        });
    }catch{
        toast("No data was found")
    }
 } ;
    private setValue = (args: SyntheticEvent) => {
        const myValue = (args.target as HTMLInputElement).value;
        this.setState({
            id:myValue
        })
    };


    public render(): JSX.Element {
        return (
            <div className="GetOneCustomer">
				                <br/>
                                <form className="getone" noValidate autoComplete="off">
                                <TextField label="Customer id" color="secondary" variant="filled" className="textField1" onChange={this.setValue}/>
</form>
                <button className="findBTN" onClick={this.getData}  color="primary">Find</button><br/><br/>
            		
                <table className="table">
 
    
      <th>Id</th>
      <th >First name</th>
      <th >Last name</th>
      <th>Email</th>
      <th>Password</th>
        <tbody>
         <tr>
             <td>{this.state.customer.id}</td>
            <td>{this.state.customer.firstName}</td>
            <td>{this.state.customer.lastName}</td>
            <td>{this.state.customer.email}</td>
            <td>{this.state.customer.password}</td>  
            </tr>
        </tbody>
         </table>
            </div>
        );
    }
}

 



export default GetOneCustomer;
