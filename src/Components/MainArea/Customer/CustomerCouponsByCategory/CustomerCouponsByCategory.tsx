import { TextField } from "@material-ui/core";
import axios from "axios";
import { Component, SyntheticEvent } from "react";
import { Button } from "reactstrap";
import Coupon from "../../../../Models/Coupon";
import notify from "../../../../Services/Notify";
import SingleCoupons from "../../../../Single/SingleCoupon/SingleCoupon";
import "./CustomerCouponsByCategory.css";
import Countdown from "react-countdown";
import jwtAxios from "../../../../Auth/jwtAxios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




toast.configure()

interface CustomerCouponsByCategoryProps{

}

interface CustomerCouponsByCategoryCategoryState{
    coupons:Coupon[];
    category:string;
   
}

class CustomerCouponsByCategory extends Component<CustomerCouponsByCategoryProps,CustomerCouponsByCategoryCategoryState>{

    public constructor(props:CustomerCouponsByCategoryProps){
        super(props);
        this.state = {
            coupons: [],
            category:""
        };
    }

    getData = async() =>{
        const response = await jwtAxios.get("http://localhost:8080/groupon/customer/customers/coupons/category/"+this.state.category);
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
            <div className="GetCustomerCouponsByCategory">
				                <br/>
                                <select ref="selectOption" onChange={(e) => this.setValue(e)}>
                                <option selected value="" >Enter category</option>
               <option  value="FOOD" >Food</option>
               <option value="ELECTRICITY" >Electricity</option>
               <option value="RESTAURANT" >Restaurant</option>
               <option value="VACATION" >Vacaiton</option>
            </select>
            <label className="chooseBTN"><Button  onClick={this.getData} variant="text" color="primary">Coupon by category</Button></label><br/><br/>
                <table className="table">
                               {this.state.coupons.map((item) =>(
<div className="container">
    
<div className="col-xs-12 col-md-6">
                <div className="prod-info-main prod-wrap clearfix">
 
                      <div className="row">
 
                           <div className="col-md-5 col-sm-12 col-xs-12">
 
                            <div className="product-image">
                
                             <img src={item.image} className="img-responsive"/>
                           
                               <span className="tag2 hot">
    
                                 %{Math.floor(Math.random()*99)+1}<br/>OFF
 
                               </span>
 
                       </div>
 
                  </div>
 
     <div className="col-md-7 col-sm-12 col-xs-12">
 
                  <div className="product-deatil">
 
                               <h5 className="name">
 
                               <a href="#">
 
                                {item.title}<br/>
                            
                        
                               </a>
 
                               <a href="#">
 
                               <span>{item.categoryId}</span>
 
                               </a>                           
 
                        </h5>
 
                            <p className="price-container">
 
                             <span>${item.price}</span>
 
                           </p>
 
              <span className="tag1"></span>
 
   </div>
 
   <div className="description">
 
      <p>{item.description}</p>
      <h3>End in: <Countdown date={item.endDate}/></h3>
 
   </div>
 
      <div className="product-info smart-form">
 
         <div className="row">
 
         <div className="col-md-12">
       
       </div>
 
      <div className="col-md-12">
 
 
          <label htmlFor="stars-rating-5"><i className="fa fa-star text-danger"></i></label>
 
          <label htmlFor="stars-rating-4"><i className="fa fa-star text-danger"></i></label>
 
          <label htmlFor="stars-rating-3"><i className="fa fa-star text-danger"></i></label>
 
          <label htmlFor="stars-rating-2"><i className="fa fa-star text-warning"></i></label>
 
          <label htmlFor="stars-rating-1"><i className="fa fa-star text-warning"></i></label>

 
       </div>
 
    </div>
 
   </div>
 
  </div>
 
  </div>
 </div>
 
 {/* <!-- end product --> */}
 
</div>
</div>
     
                                 ))}
                                  </table>
                
        

                    
            </div>
        );
        
    }
}

export default CustomerCouponsByCategory;
