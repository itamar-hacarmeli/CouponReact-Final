import { Switch, Route } from "react-router-dom";
import Logout from "../../Auth/Logout/Logout";
import AdminNavBar from "../MainArea/Admin/AdminNavBar/AdminNavBar";
import AdminPage from "../MainArea/Admin/AdminPage/AdminPage";
import UpdateCompany from "../MainArea/Admin/UpdateCompany/UpdateCompany";
import CompanyNavBar from "../MainArea/Company/CompanyNavBar/CompanyNavBar";
import UpdateCoupon from "../MainArea/Company/UpdateCoupon/UpdateCoupon";
import CustomerNavBar from "../MainArea/Customer/CustomerNavBar/CustomerNavBar";
import HomeNavBar from "../MainArea/HomeNavBar/HomeNavBar";
import "./NavRouting.css";

function NavRouting(): JSX.Element {
    return (
        <div className="NavRouting">
			   <Switch>
                   {/* admin routhes */}
                <Route path="/adminPage" component={AdminNavBar} exact />
                <Route path="/addCompany" component={AdminNavBar} exact />
                <Route path="/addCustomer" component={AdminNavBar} exact />
                <Route path="/allCoupons" component={AdminNavBar} exact />
                <Route path="/allCompanies" component={AdminNavBar} exact />
                <Route path="/allCustomers" component={AdminNavBar} exact />
                <Route path="/getOneCompany" component={AdminNavBar} exact />
                <Route path="/deleteCompany" component={AdminNavBar} exact />
                <Route path="/deleteCustomer" component={AdminNavBar} exact />
                <Route path="/getOneCustomer" component={AdminNavBar} exact />
                <Route path="/updateCompany" component={AdminNavBar} exact />
                <Route path="/updateCompany/:id" component={AdminNavBar} exact />
                <Route path="/updateCustomer:id" component={AdminNavBar} exact/>
                <Route path="/updateCustomer" component={AdminNavBar} exact />
                <Route path="/adminPage" component={AdminPage} exact/>
                <Route path="/logout" component={Logout} exact/>
                {/* company routhes */}
                <Route path="/addCoupon" component={CompanyNavBar} exact />
                <Route path="/updateCoupon/:id" component={CompanyNavBar} exact />
                <Route path="/companyCouponsByCategory" component={CompanyNavBar} exact />
                <Route path="/companyCouponsByMaxPrice" component={CompanyNavBar} exact />
                <Route path="/deleteCoupon" component={CompanyNavBar} exact />
                <Route path="/getCompanyCoupons" component={CompanyNavBar} exact />
                <Route path="/companyDetails" component={CompanyNavBar} exact />
                <Route path="/updateCoupon" component={CompanyNavBar} exact />
                <Route path="/CompanyPage" component={CompanyNavBar} exact/>
                {/* customer routhes */}
                <Route path="/customerCouponsByMaxPrice" component={CustomerNavBar} exact />
                <Route path="/getCustomerDetails" component={CustomerNavBar} exact />
                <Route path="/getCustomerCoupons" component={CustomerNavBar} exact />
                <Route path="/customerCouponsByCategory" component={CustomerNavBar} exact />
                <Route path="/purchaseCoupon" component={CustomerNavBar} exact />
                <Route path="/CustomerPage" component={CustomerNavBar} exact/>
                 {/* Home routhes */}
                <Route path="/home" component={HomeNavBar} exact/>
                <Route path="/login" component={HomeNavBar} exact/>
                <Route path="/register" component={HomeNavBar} exact/>
                  </Switch>
        </div>
    );
}

export default NavRouting;

