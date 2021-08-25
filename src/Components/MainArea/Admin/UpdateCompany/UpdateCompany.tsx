import { Button, TextField } from "@material-ui/core";
import { Link } from "@material-ui/icons";
import axios from "axios";
import { Component, SyntheticEvent } from "react";
import { render } from "react-dom";
import { useHistory } from "react-router-dom";
import Company from "../../../../Models/Company";
import store from "../../../../Redux/Store";
import {createHashHistory} from 'history'
import Notifications, {notify} from 'react-notify-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtAxios from "../../../../Auth/jwtAxios";


const history = createHashHistory();//Return to the previous page of this code snippet code
toast.configure()
  
interface UpdateCompanyProps{
    updateId:string
}

interface UpdateCompanyState{
    company: Company;
    id:string;
    name:string;
    email:string;
    password:string;
}

class  UpdateCompany extends Component<UpdateCompanyProps,UpdateCompanyState>{
    public constructor(props:UpdateCompanyProps) {
        super(props);
        this.state = {
			company:new Company(),
            id:"",
            name:"",
            email:"",
            password:"",
        };
    }
    public goBackPage = async () =>
    {
      history.goBack();  //Return to the previous page of this code
    };
    public NotifyLikeABoss= async (index: {}) =>{
        toast(index) 
    };
 

    public updateData = async () =>{
        try{
            console.log("in update")
            const response = await jwtAxios.get("http://localhost:8080/groupon/admin/companies/"+this.state.id);
            const myResponse = response.data;
            myResponse.id = this.state.id;
            myResponse.name = this.state.name;
            myResponse.email = this.state.email;
            myResponse.password = this.state.password;
            console.log(myResponse);
            this.setState({company:myResponse});
            await jwtAxios.put("http://localhost:8080/groupon/admin/companies/update",this.state.company);
            this.NotifyLikeABoss("Coupon: " + this.state.id + " was updated");
            this.goBackPage();
        }catch{
            this.NotifyLikeABoss("Coupon: " + this.state.id + " was not updated" )
        };
    };

async componentDidMount(){
    console.log(this.props.updateId)
    const result = await jwtAxios.get("http://localhost:8080/groupon/admin/companies/"+this.props.updateId);
    const updateFillCompany = result.data;
    this.setState({
        id: updateFillCompany.id,
        name: updateFillCompany.name,
        email: updateFillCompany.email,
        password: updateFillCompany.password

    }) 
}    

public setId = (args: SyntheticEvent) => {
    const value = (args.target as unknown as HTMLInputElement).value;
    this.setState({
        id:value
    })
};

public setName = (args: SyntheticEvent) => {
    const value = (args.target as unknown as HTMLInputElement).value;
    this.setState({
        name:value
    })
};

public setEmail = (args: SyntheticEvent) => {
    const value = (args.target as unknown as HTMLInputElement).value;
    this.setState({
        email:value
    })
};

public setPassword = (args: SyntheticEvent) => {
    const value = (args.target as unknown as HTMLInputElement).value;
    this.setState({
       password:value
    })
};




public render(): JSX.Element {

        return (
         
            <div className="UpdateCompany ">
                <h2>Update company</h2>
                <TextField label="id" variant="outlined" className="textField" disabled value={this.state.id} onChange={this.setId}/><br/><br/>
                <TextField label="name" variant="outlined" className="textField" disabled value={this.state.name} onChange={this.setName}/><br/><br/>
                <TextField label="email" variant="outlined" className="textField" value={this.state.email} onChange={this.setEmail}/><br/><br/>
                <TextField label="password" variant="outlined" className="textField" value={this.state.password} onChange={this.setPassword}/><br/><br/>
                    <button  onClick={this.updateData}>Update</button>
                    
                
			
            </div>
        );
    }
}


export default UpdateCompany;
function useEffect(arg0: () => void) {
    throw new Error("Function not implemented.");
}

function logoutAction(): any {
    throw new Error("Function not implemented.");
}

