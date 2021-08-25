

import { Typography } from "@material-ui/core";
import { Link, NavLink, useHistory } from "react-router-dom";
import CouponCard from "../../../Cards/CouponCard/CouponCard";
import restImage from "../../Assets/des-recits-NaKwyyh849o-unsplash.jpg";
import vicationImage from "../../Assets/alexander-kaunas-xEaAoizNFV8-unsplash.jpg"
import electricImage from "../../Assets/michael-dziedzic-qDG7XKJLKbs-unsplash.jpg"
import foodImage from "../../Assets/ja-ma--gOUx23DNks-unsplash.jpg"
import Countdown from "react-countdown";
import { LensTwoTone } from "@material-ui/icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./HomePage.css";
import { Component } from "react";
import jwtAxios from "../../../Auth/jwtAxios";
import Coupon from "../../../Models/Coupon";
import axios from "axios";
import Button from "reactstrap/es/Button";
import  { Redirect } from 'react-router-dom'


toast.configure()




interface HonePageProps{

}
interface HomePageState {
   coupons: Coupon[]
}

class HomePage extends Component<{}, HomePageState> {
  
      

public constructor(props:{}) {
   super(props);
   this.state = {
                   coupons:[]
   };
}

public NotifyLikeABoss= async (msg:string) =>{
           toast(msg) 
       };

public NotifyLikeABossAndSendToLogin= async (msg:string) =>{
   toast(msg) ;

};
  
public async componentDidMount(){
   const response = await axios.get("http://localhost:8080/groupon/guest/coupons")
   const myResponse = response.data;
   console.log(myResponse);
   if (myResponse.length<1){
                   this.NotifyLikeABoss("No data was found");
               } else {
                this.NotifyLikeABoss("Welcome to T-coupons!!!!");
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
      in stock: {item.amount}
      <h3>End in: <Countdown date={item.endDate}/></h3>
 
   </div>
 
      <div className="product-info smart-form">
 
         <div className="row">
 
         <div className="col-md-12">
            <div className="purchaseBTN">
         <NavLink to='/Login' > <Button  color="primary" onClick={()=>this.NotifyLikeABossAndSendToLogin("Dear guest please login first to make purchasses")} className="btn btn-danger">Purchase</Button> </NavLink>
         </div>
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
export default HomePage;


    

