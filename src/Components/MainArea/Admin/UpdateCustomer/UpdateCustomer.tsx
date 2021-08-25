import { TextField } from "@material-ui/core";
import axios from "axios";
import { Component, SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Customer from "../../../../Models/Customer";
import {createHashHistory} from 'history'
import "./UpdateCustomer.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtAxios from "../../../../Auth/jwtAxios";

const history = createHashHistory();//Return to the previous page of this code snippet code
toast.configure()
interface UpdateCustomerProps{
    updateId:string;
}

interface UpdateCustomerState{
    customer:Customer;
    id:string;
    firstName: string;
    lastName:string;
    email:string;
    password: string;
}

class UpdateCustomer extends Component<UpdateCustomerProps,UpdateCustomerState>{
    public constructor(props:UpdateCustomerProps){
        super(props);
        this.state = {
            customer:new Customer(),
            id:"",
            firstName:"",
            lastName:"",
            email:"",
            password:"",
        };
    };

    public goBackPage = async () =>
    {
      history.goBack();  //Return to the previous page of this code
    };


    public NotifyLikeABoss= async (msg:string) =>{
            toast(msg) 
        };
 
    public updateData = async () =>{
        try{
            const response = await jwtAxios.get("http://localhost:8080/groupon/admin/customers/"+this.state.id);
            const myResponse = response.data;
            myResponse.id = this.state.id;
            myResponse.firstName = this.state.firstName;
            myResponse.lastName = this.state.lastName;
            myResponse.email = this.state.email;
            myResponse.password = this.state.password;
            this.setState({customer:myResponse})
            await jwtAxios.put("http://localhost:8080/groupon/admin/customers/updateCustomer",this.state.customer);
            this.NotifyLikeABoss("Customer: " + this.state.id + " was updated");
            // notify.("Customer " + this.state.id + "was updated");
            this.goBackPage();
        }catch{
            this.NotifyLikeABoss("Customer: " + this.state.id + " was not updated" );
        };
    
    }

    async componentDidMount(){
        console.log(this.props.updateId)
        const result = await jwtAxios.get("http://localhost:8080/groupon/admin/customers/"+this.props.updateId);
        const updateCustomer = result.data;
        this.setState({
            id: updateCustomer.id,
            firstName: updateCustomer.firstName,
            lastName: updateCustomer.lastName,
            email: updateCustomer.email,
            password: updateCustomer.password
    
        }) 
    }    
    
    public setId = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        this.setState({
            id:value
        })
    };
    
    public setFirstName = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        this.setState({
            firstName:value
        })
    };

    public setLastName = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        this.setState({
            lastName:value
        })
    };
    
    public setEmail = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        this.setState({
            email:value
        })
    };
    
    public setPassword = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        this.setState({
           password:value
        })
    };
    
    
    public render():JSX.Element{
        return (
            <div className="UpdateCustomer ">
                <h2>Update customer</h2>
                <TextField label="id" variant="outlined" className="textField" disabled value={this.state.id} onChange={this.setId}/><br/><br/>
                <TextField label="firstName" variant="outlined" className="textField"  value={this.state.firstName} onChange={this.setFirstName}/><br/><br/>
                <TextField label="lastName" variant="outlined" className="textField"  value={this.state.lastName} onChange={this.setLastName}/><br/><br/>
                <TextField label="email" variant="outlined" className="textField" value={this.state.email} onChange={this.setEmail}/><br/><br/>
                <TextField label="password" variant="outlined" className="textField" value={this.state.password} onChange={this.setPassword}/><br/><br/>
                    <button  onClick={this.updateData}>Update</button>

                
            </div>
        );
    }
}
export default UpdateCustomer;
