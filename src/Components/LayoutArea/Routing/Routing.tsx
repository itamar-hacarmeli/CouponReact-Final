
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../../../Auth/Login/Login";
import Logout from "../../../Auth/Logout/Logout";
import Register from "../../../Auth/Register/Register";
import AddCompany from "../../MainArea/Admin/AddCompany/AddCompany";
import AddCustomer from "../../MainArea/Admin/AddCustomer/AddCustomer";
import AdminPage from "../../MainArea/Admin/AdminPage/AdminPage";
import AllCoupons from "../../MainArea/Admin/AllCoupons/AllCoupons";
import GetAllCompanies from "../../MainArea/Admin/GetAllCompanies/GetAllCompanies";
import GetAllCustomers from "../../MainArea/Admin/GetAllCustomers/GetAllCustomers";
import GetOneCompany from "../../MainArea/Admin/GetOneCompany/GetOneCompany";
import GetOneCustomer from "../../MainArea/Admin/GetOneCustomer/GetOneCustomer";
import UpdateCompany from "../../MainArea/Admin/UpdateCompany/UpdateCompany";
import UpdateCustomer from "../../MainArea/Admin/UpdateCustomer/UpdateCustomer";
import AddCoupon from "../../MainArea/Company/AddCoupon/AddCoupon";
import CompanyCouponsByCategory from "../../MainArea/Company/CompanyCouponsByCategory/CompanyCouponsByCategory";
import CompanyCouponsByMax from "../../MainArea/Company/CompanyCouponsByMax/CompanyCouponsByMax";
import CompanyPage from "../../MainArea/Company/CompanyPage/CompanyPage";
import GetCompanyCoupons from "../../MainArea/Company/GetCompanyCoupons/GetCompanyCoupons";
import GetCompanyDetails from "../../MainArea/Company/GetCompanyDetails/GetCompanyDetails";
import UpdateCoupon from "../../MainArea/Company/UpdateCoupon/UpdateCoupon";
import CustomerCouponsByCategory from "../../MainArea/Customer/CustomerCouponsByCategory/CustomerCouponsByCategory";
import CustomerCouponsByMax from "../../MainArea/Customer/CustomerCouponsByMax/CustomerCouponsByMax";
import CustomerPage from "../../MainArea/Customer/CustomerPage/CustomerPage";
import GetCustomerCoupons from "../../MainArea/Customer/GetCustomerCoupons/GetCustomerCoupons";
import GetCustomerDetails from "../../MainArea/Customer/GetCustomerDetails/GetCustomerDetails";
import PurchaseCoupon from "../../MainArea/Customer/PurchaseCoupon/PurchaseCoupon";
import HomePage from "../../MainArea/HomePage/HomePage";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Switch>
            <Route path="/home" component={HomePage} exact />
            <Route path="/register" component={Register} exact />
                {/*Admin*/}
                <Route path="/register" component={Register} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/addCompany" component={AddCompany} exact />
                <Route path="/addCustomer" component={AddCustomer} exact />
                <Route path="/allCoupons" component={AllCoupons} exact />
                <Route path="/allCompanies" component={GetAllCompanies} exact />
                <Route path="/allCustomers" component={GetAllCustomers} exact />
                <Route path="/getOneCompany" component={GetOneCompany} exact />
                <Route path="/getOneCustomer" component={GetOneCustomer} exact />
                <Route path="/updateCompany/:id" render={(props)=><UpdateCompany updateId={props.match.params.id}/>}/>
                <Route path="/updateCustomer:id" render={(props)=><UpdateCustomer updateId={props.match.params.id}/>}/>
                <Route path="/updateCustomer" component={UpdateCustomer} exact />
                <Route path="/adminPage" component={AdminPage} exact/>

                {/*Company*/}
                <Route path="/addCoupon" component={AddCoupon} exact />
                <Route path="/companyCouponsByCategory" component={CompanyCouponsByCategory} exact />
                <Route path="/companyCouponsByMaxPrice" component={CompanyCouponsByMax} exact />
                <Route path="/getCompanyCoupons" component={GetCompanyCoupons} exact />
                <Route path="/companyDetails" component={GetCompanyDetails} exact />
                <Route path="/updateCoupon" component={UpdateCoupon} exact />
                <Route path="/updateCoupon/:id" render={(props)=><UpdateCoupon updateId={props.match.params.id}/>}/>
                <Route path="/CompanyPage" component={CompanyPage} exact/>

                {/*Customer*/}
                <Route path="/customerCouponsByMaxPrice" component={CustomerCouponsByMax} exact />
                <Route path="/getCustomerDetails" component={GetCustomerDetails} exact />
                <Route path="/getCustomerCoupons" component={GetCustomerCoupons} exact />
                <Route path="/customerCouponsByCategory" component={CustomerCouponsByCategory} exact />
                <Route path="/purchaseCoupon" component={PurchaseCoupon} exact />
                <Route path="/CustomerPage" component={CustomerPage} exact/>
                <Redirect from="/" to="/home" exact />
                
            </Switch>






        </div>
    );
}

export default Routing;
