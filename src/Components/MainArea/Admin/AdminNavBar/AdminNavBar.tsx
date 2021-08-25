import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./AdminNavBar.css";

class AdminNavBar extends Component {

   

    public render(): JSX.Element {
        return (
            <div className="AdminNavBar">
                 <ul>
            <li><NavLink exact to = "/adminPage" className="selected">Administrator home</NavLink></li>
            <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">Companies</a>
                <div className="dropdown-content">
                <NavLink className="selected" exact to = "/addCompany">Add company</NavLink>
                <NavLink className="selected" exact to = "/getOneCompany">Get company</NavLink>
                <NavLink className="selected" exact to = "/allCompanies">All companies</NavLink>
                </div>
            </li>
            <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">Customers</a>
                <div className="dropdown-content">
                <NavLink className="selected" exact to = "/addCustomer">Add customer </NavLink>
                <NavLink className="selected" exact to = "/getOneCustomer">Get customer</NavLink>
                <NavLink className="selected" exact to = "/allCustomers">All customers</NavLink>
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

export default AdminNavBar;
