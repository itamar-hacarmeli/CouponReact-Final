import axios from "axios";
import { Component } from "react";
import Countdown from "react-countdown";
import { notify } from "react-notify-toast";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "reactstrap";
import jwtAxios from "../../../../Auth/jwtAxios";
import Coupon from "../../../../Models/Coupon";
import CustomerNavBar from "../CustomerNavBar/CustomerNavBar";
import PurchaseCoupon from "../PurchaseCoupon/PurchaseCoupon";
import "./CustomerPage.css";

toast.configure()


interface CustomerPageProps{

}
interface CustomerPageState {
   coupons: Coupon[]
}

class CustomerPage extends Component<{}, CustomerPageState> {
  
      

public constructor(props:{}) {
   super(props);
   this.state = {
                   coupons:[]
   };
}

public NotifyLikeABoss= async (msg:string) =>{
           toast(msg) 
       };
 
       public CouponPurchase = async (coupon:Coupon)=>{
        try{
            const response = await jwtAxios.post<Coupon>("http://localhost:8080/groupon/customer/purchaseCoupon",coupon);
            this.NotifyLikeABoss("A new Coupon has been purchassed")
            this.componentDidMount()     
        }catch{
            this.NotifyLikeABoss("Somthing was went wrong");
        }
    }


public async componentDidMount(){
   const response = await axios.get("http://localhost:8080/groupon/guest/coupons")
   const myResponse = response.data;
   console.log(myResponse);
   if (myResponse.length<1){
                   this.NotifyLikeABoss("No data was found");
               } else {
           
               }
               this.setState({
                    coupons:myResponse
   })
}



public render(): JSX.Element {
    return (
        <div className="Home">
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
      in stock: {item.amount}
 
   </div>
 
      <div className="product-info smart-form">
 
         <div className="row">
 
         <div className="col-md-12">
         <Button  color="primary" onClick={()=> this.CouponPurchase(item)} className="btn btn-danger">Purchase</Button>
   
 
       </div>
 
      <div className="col-md-12">
 
         <div className="rating">
 
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
export default CustomerPage;


    

