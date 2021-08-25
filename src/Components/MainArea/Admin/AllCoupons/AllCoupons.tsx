import { Button, Card, CardActions, CardContent, Typography, makeStyles } from "@material-ui/core";
import axios from "axios";
import { Component } from "react";
import Coupon from "../../../../Models/Coupon";
import SingleCoupon from "../../../../Single/SingleCoupon/SingleCoupon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {Suspense} from 'react'
import {useImage} from 'react-image'
import {Img} from 'react-image'
import "./AllCoupons.css";
import Countdown from "react-countdown";
import { LensTwoTone } from "@material-ui/icons";
import jwtAxios from "../../../../Auth/jwtAxios";

toast.configure()



interface AllCoupnsProps{

     }
interface AllCouponsState {
	coupons: Coupon[]
}

class AllCoupons extends Component<{}, AllCouponsState> {

    public constructor(props:{}) {
        super(props);
        this.state = {
			coupons:[]
        };
    }

    public NotifyLikeABoss= async (index: {}) =>{
                toast(index) 
            };

    public async componentDidMount(){
        const response = await jwtAxios.get("http://localhost:8080/groupon/admin/coupons")
        const myResponse = response.data;
        console.log(myResponse);
        if (myResponse.length<1){
                        console.log("No data was found");
                    } else {
                        console.log("Success");
                    }
                    this.setState({
                         coupons:myResponse
        })
    }
    


    

    public render(): JSX.Element {
        return (
            <div className="AllCoupons">
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
   
   <div className="rating">in stock: {item.amount}
 
 <label htmlFor="stars-rating-5"><i className="fa fa-star text-danger"></i></label>

 <label htmlFor="stars-rating-4"><i className="fa fa-star text-danger"></i></label>

 <label htmlFor="stars-rating-3"><i className="fa fa-star text-danger"></i></label>

 <label htmlFor="stars-rating-2"><i className="fa fa-star text-warning"></i></label>

 <label htmlFor="stars-rating-1"><i className="fa fa-star text-warning"></i></label>

</div>
 
      <div className="product-info smart-form">
 
         <div className="row">
 
         <div className="col-md-12">
 
 
       </div>
 
      <div className="col-md-12">
 
 
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

export default AllCoupons;
                    