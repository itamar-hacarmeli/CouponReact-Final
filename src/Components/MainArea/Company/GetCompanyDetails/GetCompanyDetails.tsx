import { Edit } from "@material-ui/icons";
import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import jwtAxios from "../../../../Auth/jwtAxios";
import Company from "../../../../Models/Company";
import "./GetCompanyDetails.css";



interface GetCompanyDetailsProps{

}

interface GetCompanyDetailsState{
    company:Company;
   
}


class GetCompanyDetails extends Component <GetCompanyDetailsProps,GetCompanyDetailsState>{

        public constructor(props:GetCompanyDetailsProps){
        super(props);
        this.state = {
            company: new Company
        };
    }
    public async componentDidMount(){
        const response = await jwtAxios.get("http://localhost:8080/groupon/company/companyDetails")
        const myResponse = response.data;
        console.log(myResponse);

        this.setState({
            company: myResponse

        })
    }

            public render(): JSX.Element {
                return (
                    <div className="AllCompanies">
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
export default GetCompanyDetails;
