import { Button, colors, Divider } from "@material-ui/core";
import { Shop } from "@material-ui/icons";
import { NavLink, useHistory } from "react-router-dom";
import ShoppinCartApp from "../../../shop";
import Connect from "../../MainArea/Connect/Connect";
import "./Aside.css";
function Menu(): JSX.Element {
  
   
  
  
    return (
      <div className="topnav">
           
          ADMIN
        <div className="admin">
        <NavLink exact to = "/addCompany">הוסף חברה</NavLink>
        <NavLink exact to = "/addCustomer">הוסף לקוח</NavLink>
        <NavLink exact to = "/allCoupons">קופונים</NavLink>
        <NavLink exact to = "/allCompanies">כל החברות</NavLink>
        <NavLink exact to = "/allCustomers">כל הלקוחות</NavLink>
        <NavLink exact to = "/getOneCompany">חברה אחת לפי מספר</NavLink>
        <NavLink exact to = "/getOneCustomer">לקוח אחד לפי מספר</NavLink>
        <NavLink exact to = "/deleteCompany">מחק חברה</NavLink>
        <NavLink exact to = "/deleteCustomer">מחק לקוח</NavLink>
        <NavLink exact to = "/updateCompany">עדכן חברה</NavLink>
        <NavLink exact to = "/updateCustomer">עדכן לקוח</NavLink>
        <NavLink  exact to ="/home" >דף הבית</NavLink>  
        <NavLink exact to ="/login">התחבר</NavLink>
        </div>
        Comapny
        <div className="company">
        <NavLink exact to = "/addCoupon">הוסף קופון</NavLink>
        <NavLink exact to = "/companyCouponsByCategory">קופונים של חברה לפי קטגוריה</NavLink>
        <NavLink exact to = "/companyCouponsByMaxPrice">קופונים של חברה לפי מחיר מקסימלי</NavLink>
        <NavLink exact to = "/deleteCoupon">מחק קופון</NavLink>
        <NavLink exact to = "/getCompanyCoupons">קופונים של חברה לפי מספר</NavLink>
        <NavLink exact to = "/companyDetails">פרטי חברה</NavLink>
        <NavLink exact to = "/updateCoupon">עדכן קופון</NavLink>
        </div>
        Customer
        <div className="customer">
        <NavLink exact to = "/customerCouponsByMaxPrice">קופונים של לקוח לפי מחיר מקסימלי</NavLink>
        <NavLink exact to = "/customerCouponsByCategory">קופונים של לקוח לפי קטגוריה</NavLink>
        <NavLink exact to = "/getCustomerCoupons">קופונים של לקוח לפי מספר</NavLink>
        <NavLink exact to = "/getCustomerDetails">פרטי לקוח</NavLink>
        <NavLink exact to = "/purchaseCoupon">רכישת קופון</NavLink>
        </div>
      </div>


  
     
  
     
    );
}

export default Menu;
