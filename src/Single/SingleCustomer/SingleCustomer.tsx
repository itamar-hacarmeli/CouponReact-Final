import { Component } from "react";
import Customer from "../../Models/Customer";
import "./SingleCustomer.css";

interface SingleCustomerProps {
	myCustomer: Customer
}

class SingleCustomer extends Component<SingleCustomerProps> {

    public render(): JSX.Element {
        return (
            <div className="SingleCustomer Box">
				id: {this.props.myCustomer.id}<br></br>
               first name: {this.props.myCustomer.firstName}<br></br>
               last name: {this.props.myCustomer.lastName}<br></br>
               email: {this.props.myCustomer.email}<br></br>
               {/*password: {this.props.myCustomer.password}<br></br>*/}
                {/*{this.props.myCustomer.coupons} */}
            </div>
        );
    }
}

export default SingleCustomer;
