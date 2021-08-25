import { Component } from "react";
import { NavLink } from "react-router-dom";

import "./CustomerNavBar.css";

class CustomerNavBar extends Component {

   

    public render(): JSX.Element {
        return (
            <div className="CustomerNavBar">
                 <ul>
            <li><NavLink exact to = "/CustomerPage" className="selected">Customer home</NavLink></li>
            <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">About Me</a>
                <div className="dropdown-content">
                <NavLink exact to = "/getCustomerDetails">My details</NavLink>
                </div>
            </li>
            <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">Coupons</a>
                <div className="dropdown-content">
                <NavLink exact to = "/getCustomerCoupons">All my coupons</NavLink> 
                <NavLink exact to = "/customerCouponsByCategory">My Coupons by category</NavLink>
                <NavLink exact to = "/customerCouponsByMaxPrice">My coupons by max price</NavLink>
                </div>
            </li>
            <div className="topnav-right">
    <li><NavLink exact to = "/logout" className="active">Logout</NavLink></li>
  </div>
            </ul>
                <br></br>


        </div>  
        );
    }
}

export default CustomerNavBar;


