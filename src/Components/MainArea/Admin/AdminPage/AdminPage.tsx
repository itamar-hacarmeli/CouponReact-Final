import { Component } from "react";
import "./AdminPage.css";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import { BrowserRouter } from "react-router-dom";
import Header from "../../../LayoutArea/Header/Header";
import Routing from "../../../LayoutArea/Routing/Routing";
import AllCoupons from "../AllCoupons/AllCoupons";

class AdminPage extends Component {

   

    public render(): JSX.Element {
        return (
            <div className="AdminPage">
                <AllCoupons/>
        </div>  
        );
    }
}

export default AdminPage;
