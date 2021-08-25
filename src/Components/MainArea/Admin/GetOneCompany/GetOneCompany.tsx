import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import { Component, SyntheticEvent } from "react";
import jwtAxios from "../../../../Auth/jwtAxios";
import Company from "../../../../Models/Company";
import notify from "../../../../Services/Notify";
import "./GetOneCompany.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

interface GetOneCompanyProps{
}

interface GetOneCompanyState {
	company: Company;
    id:string;

}

class GetOneCompany extends Component< GetOneCompanyProps, GetOneCompanyState> {

    public constructor(props:GetOneCompanyProps) {
        super(props);
        this.state = {
			company:new Company,
            id:""
        };
    }

    getData = async()=>{
        const response = await jwtAxios.get("http://localhost:8080/groupon/admin/companies/"+this.state.id);
        console.log(response);
        const myResponse = response.data;
        console.log(myResponse);
        if (myResponse.length<1){
           toast("No data was found");
        } else {
            toast("Success");
        }
        this.setState({
             company:myResponse
        });
    };

    private setValue = (args: SyntheticEvent) => {
        const myValue = (args.target as HTMLInputElement).value;
        this.setState({
            id:myValue
        })
    };

    public render(): JSX.Element {
        return (
            <div className="GetOneCompany">
				                <br/>
                                <form className="getone" noValidate autoComplete="off">
                                <TextField label="Company id" color="secondary" variant="filled" className="textField1" onChange={this.setValue}/>
</form>
				<button className="findBTN" onClick={this.getData}  color="primary">Find</button><br/><br/>
                <table className="table">

 <th>Id</th>
 <th >Name</th>
 <th>Email</th>
 <th>Password</th>
   <tbody>
    <tr>
        <td>{this.state.company.id}</td>
       <td>{this.state.company.name}</td>
       <td>{this.state.company.email}</td>
       <td>{this.state.company.password}</td>
       </tr>
   </tbody>
    </table>
            </div>
        );
    }
}

export default GetOneCompany;
