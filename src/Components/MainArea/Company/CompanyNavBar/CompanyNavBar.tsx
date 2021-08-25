import { Component } from "react";
import { NavLink } from "react-router-dom";

import "./CompanyNavBar.css";

class CompanyNavBar extends Component {

   

    public render(): JSX.Element {
        return (
            <div className="CompanyNavBar">
                 <ul>
            <li><NavLink exact to = "/CompanyPage" className="selected">Company home</NavLink></li>
            <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">Company</a>
                <div className="dropdown-content">
                <NavLink exact to = "/companydetails">Company details</NavLink>
                </div>
            </li>
            <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">Coupons</a>
                <div className="dropdown-content">
                <NavLink exact to = "/addcoupon">Add coupon</NavLink>
                <NavLink exact to = "/getCompanyCoupons">My Coupons</NavLink>
                <NavLink exact to = "/companyCouponsByCategory">My coupons by category</NavLink>
                <NavLink exact to = "/companyCouponsByMaxPrice">My coupons by max price</NavLink>
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

export default CompanyNavBar;
