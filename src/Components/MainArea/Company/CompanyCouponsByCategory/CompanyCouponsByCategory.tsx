import { FormControl, InputLabel, ListSubheader, MenuItem, NativeSelect, Select, TextField } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import axios from "axios";
import { Component, SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { Button, NavLink } from "reactstrap";
import jwtAxios from "../../../../Auth/jwtAxios";
import Coupon from "../../../../Models/Coupon";
import notify from "../../../../Services/Notify";
import SingleCoupons from "../../../../Single/SingleCoupon/SingleCoupon";
import "./CompanyCouponsByCategory.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

interface CompanyCouponsByCategoryProps{

}

interface CompanyCouponsByCategoryState{
    coupons:Coupon[];
    category:string;
}

class CompanyCouponsByCategory extends Component<CompanyCouponsByCategoryProps,CompanyCouponsByCategoryState>{

    public constructor(props:CompanyCouponsByCategoryProps){
        super(props);
        this.state = {
            coupons: [],
            category:"",
        };
    }

    getData = async() =>{
        const response = await jwtAxios.get("http://localhost:8080/groupon/company/companies/coupons/category/"+this.state.category);
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
   

 

    private setValue = (args: SyntheticEvent) => {
        //@ts-ignore
        const myValue = (args.target as HTMLInputElement).value;
        this.setState({
           
            category:myValue
        })
    };

   
        
      

    public render(): JSX.Element {
        return (
            <div className="GetCompanyCouponsByCategory">
				                <br/>
                                <select className="select" ref="selectOption" onChange={(e) => this.setValue(e)}>
                                <option selected value="" >Enter category</option>
               <option  value="FOOD" >Food</option>
               <option value="ELECTRICITY" >Electricity</option>
               <option value="RESTAURANT" >Restaurant</option>
               <option value="VACATION" >Vacaiton</option>
             
            </select>
				<label className="chooseBTN"><Button  onClick={this.getData} variant="text" color="primary">Coupon by category</Button></label><br/><br/>
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


export default CompanyCouponsByCategory;
   



// const history = useHistory(); //redirect function
//     const {register,handleSubmit} = useForm<Category>();

//     async function send(category: Category){
      
// <div className="login">
// <form onSubmit={handleSubmit(send)}>
// <h1> Log in</h1>
// <div className="inset">
// <p>
// <label htmlFor="checkbox">USER</label>
// <input type="radio" name="category" value="FOOD"  ref={register}/>Admin<br/><br/>
//    <input type="radio" name="category" value="VACAITON" ref={register}/>Company<br/><br/>
//    <input type="radio" name="category" value="CUSTOMER" checked ref={register}/>Customer<br/><br/>
// </p>

// </div>
// <p className="p-container">
// <button type="submit" name="go" id="go" value="Log in">Login</button>
// </p>
// </form>

// </div>    