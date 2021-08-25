import { Slider, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { Component, SyntheticEvent } from "react";
import { Button } from "reactstrap";
import jwtAxios from "../../../../Auth/jwtAxios";
import Coupon from "../../../../Models/Coupon";
import SingleCoupons from "../../../../Single/SingleCoupon/SingleCoupon";
import "./CompanyCouponsByMax.css";
import { toast } from "react-toastify";
import { notify } from "react-notify-toast";


toast.configure()

interface CompanyCouponsByMaxProps{

}

interface CompanyCouponsByMaxState{
    coupons:Coupon[];
    maxPrice:string;
}

class CompanyCouponsByMax extends Component<CompanyCouponsByMaxProps,CompanyCouponsByMaxState>{

    public constructor(props:CompanyCouponsByMaxProps){
        super(props);
        this.state = {
            coupons: [],
            maxPrice:"",
        };
    }

    getData = async() =>{
        const response = await jwtAxios.get("http://localhost:8080/groupon/company/coupons/companies/"+this.state.maxPrice);
        console.log(response);
        const myResponse = response.data;
        console.log(myResponse);
        if (myResponse.length<1){
            toast("No data was found");
        } else {
            toast("Success");
        }
        this.setState({
             coupons:myResponse
        });
    };
   


    private setValue2 = (args: SyntheticEvent) => {
        const myValue = (args.target as HTMLInputElement).value;
        this.setState({
           
            maxPrice:myValue
        })
    };

   
        
      
//     <form className="getone" noValidate autoComplete="off">
//     <TextField label="Company id" color="secondary" variant="filled" className="textField1" onChange={this.setValue}/>
// </form>
// <button className="findBTN" onClick={this.getData}  color="primary">Find</button><br/><br/>
    public render(): JSX.Element {
        return (
            <div className="CompanyCouponsByMax">
				                <br/>
                                <form className="getone" noValidate autoComplete="off">
                <TextField type="number" label="Enter max price" variant="outlined" className="textField1" onChange={this.setValue2}/><br/><br/>
                </form>
				<label className="findBTN"><button  onClick={this.getData}  color="primary">Search</button></label><br/><br/>
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
                              <th>Image</th>
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
                                    <td>{item.image}</td>

                                 </tr>
                                </tbody>
                                ))}
                                 </table>
                
        

                    
            </div>
        );
        
    }
}


export default CompanyCouponsByMax;
