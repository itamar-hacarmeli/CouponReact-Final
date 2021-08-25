import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import axios from "axios";
import { Component, SyntheticEvent } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Company from "../../../../Models/Company";
import Coupon from "../../../../Models/Coupon";
import SingleCompany from "../../../../Single/SingleCompany/SingleCompany";
import SingleCoupons from "../../../../Single/SingleCoupon/SingleCoupon";
import DeleteIcon from '@material-ui/icons/Delete';
import "./GetCompanyCoupons.css";
import Notifications, {notify} from 'react-notify-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtAxios from "../../../../Auth/jwtAxios";

toast.configure()

interface GetCompanyCouponsProps{

}

interface GetCompanyCouponsState{
    coupons:Coupon[];
   
}

class GetCompanyCoupons extends Component<GetCompanyCouponsProps,GetCompanyCouponsState>{

    public constructor(props:GetCompanyCouponsProps){
        super(props);
        this.state = {
            coupons: []
            
        };
    }
    public NotifyLikeABoss= async (message:string) =>{
        toast(message) 
    };
    public async componentDidMount(){        
        const response = await jwtAxios.get("http://localhost:8080/groupon/company/companies/coupons/");
        console.log(response);
        const myResponse = response.data;
        console.log(myResponse);
        if (myResponse.length<1){
            console.log("No data was found");
        } else {
            console.log("Success");
        }
        this.setState({
             coupons:myResponse
        });
    };
   


    public deleteData = async (id:string)=>{
        try{
            await jwtAxios.delete("http://localhost:8080/groupon/company/coupons/"+id);
            this.NotifyLikeABoss("Coupons: " + id +" was deleted")
            this.componentDidMount();
        }catch{
            this.NotifyLikeABoss("Coupon was not deleted");
        }
    }   
    

    public render(): JSX.Element {
        return (
            <div className="GetCompanyCoupons">

                    <table className="table">
				              
 <th>Id</th>
 <th >Category</th>
 <th >Company Id</th>
 <th>Description</th>
 <th>Price</th>
 <th>Title</th>
 <th>Amount</th>
 <th>Start Date</th>
 <th>End Date</th>
 <th>Update</th>
 <th>Delete</th>
{this.state.coupons.map((item) =>(
   <tbody>
    <tr>
        <td>{item.id}</td>
       <td>{item.categoryId}</td>
       <td>{item.companyId}</td>
       <td>{item.description}</td>
       <td>{item.price}</td> 
       <td>{item.title}</td>
       <td>{item.amount}</td>
       <td>{item.startDate}</td>
       <td>{item.endDate}</td>
       <td><NavLink exact to = {{pathname : '/updateCoupon/'+item.id}}><Edit className="edit"/></NavLink></td> 
       <td><button onClick={() => this.deleteData(item.id)}><DeleteIcon/></button> </td>
    </tr>
   </tbody>
   ))}
    </table>

       </div>
        );                    
     }
}
export default GetCompanyCoupons;
