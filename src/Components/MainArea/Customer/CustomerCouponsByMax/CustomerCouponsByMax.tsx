import { colors, TextField } from "@material-ui/core";
import axios from "axios";
import { Component, SyntheticEvent } from "react";
import { Button, NavLink } from "reactstrap";
import jwtAxios from "../../../../Auth/jwtAxios";
import Coupon from "../../../../Models/Coupon";
import notify from "../../../../Services/Notify";
import SingleCoupons from "../../../../Single/SingleCoupon/SingleCoupon";
import "./CustomerCouponsByMax.css";
import Countdown from "react-countdown";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

interface CustomerCouponsByMaxProps{

}

interface CustomerCouponsByMaxState{
    coupons:Coupon[];
    maxPrice:string;
  
}

class CustomerCouponsByMax extends Component<CustomerCouponsByMaxProps,CustomerCouponsByMaxState>{

    public constructor(props:CustomerCouponsByMaxProps){
        super(props);
        this.state = {
            coupons: [],
            maxPrice:"",
          
        };
    }

    getData = async() =>{
        const response = await jwtAxios.get("http://localhost:8080/groupon/customer/coupons/customers/max/"+this.state.maxPrice);
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

   
        
      

    public render(): JSX.Element {
        return (
            <div className="CustomerCouponsByMax">
				                <br/>
                                <form className="getone" noValidate autoComplete="off">
                <TextField type="number" label="Enter max price" color="secondary" variant="filled" className="textField1" onChange={this.setValue2}/><br/><br/>
                </form>
                <label className="findBTN"><button  onClick={this.getData}  color="primary">Search</button></label><br/><br/>
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

export default CustomerCouponsByMax;
