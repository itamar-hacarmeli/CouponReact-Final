import { Button } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import axios from "axios";
import { table } from "console";
import { Component } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Company from "../../../../Models/Company";
import notify from "../../../../Services/Notify";
import SingleCompany from "../../../../Single/SingleCompany/SingleCompany";
import "./GetAllCompanies.css";
import DeleteIcon from '@material-ui/icons/Delete';
import Countdown from "react-countdown";
import { LensTwoTone } from "@material-ui/icons";
import { ToastContainer, toast } from 'react-toastify';
import jwtAxios from "../../../../Auth/jwtAxios";

toast.configure()

interface GetAllCompaniesState {
	companies: Company[];
}



class GetAllCompanies extends Component<{},GetAllCompaniesState> {

    public constructor(props:{}) {
        super(props);
        this.state = {
            companies:[]
			
        };
    }
    
    public NotifyLikeABoss= async (message:string) =>{
        toast(message) 
    };

    public async componentDidMount(){
        const response = await jwtAxios.get("http://localhost:8080/groupon/admin/companies")
        const myResponse = response.data;
        console.log(myResponse);

        this.setState({
            companies: myResponse
        })
    }
  
 

    public deleteData = async (id:string)=>{
        try{
           console.log(id)
            await jwtAxios.delete("http://localhost:8080/groupon/admin/companies/"+id);
            this.NotifyLikeABoss("Company: " + id +" was deleted")
            this.componentDidMount()     
        }catch{
            notify.error("Company was not deleted");
        }
    }

    public render(): JSX.Element {
        return (
            <div className="AllCompanies">
                <table className="table">
      <th>Id</th>
      <th >Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Update</th>
      <th>Delete</th>
    {this.state.companies.map((item) =>(
        <tbody>
         <tr>
             <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>  
            <td><NavLink exact to = {{pathname : '/updateCompany/'+item.id}}>
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
export default GetAllCompanies;
