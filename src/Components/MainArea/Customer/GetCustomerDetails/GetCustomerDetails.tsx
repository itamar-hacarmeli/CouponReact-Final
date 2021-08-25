import { Component } from "react";
import jwtAxios from "../../../../Auth/jwtAxios";
import Customer from "../../../../Models/Customer";
import "./GetCustomerDetails.css";


interface GetCustomerDetailsProps{

}

interface GetCompanyDetailsState{
    customer:Customer;
   
}


class GetCustomerDetails extends Component <GetCustomerDetailsProps,GetCompanyDetailsState>{

        public constructor(props:GetCustomerDetailsProps){
        super(props);
        this.state = {
            customer : new Customer
        };
    }
    public async componentDidMount(){
        const response = await jwtAxios.get("http://localhost:8080/groupon/customer/customerDetails")
        const myResponse = response.data;
        console.log(myResponse);

        this.setState({
            customer: myResponse

        })
    }

            public render(): JSX.Element {
                return (
                    <div className="GetCustomerDetails">

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="CustomerAvatar/img_avatar.png" alt="Avatar"/>
    </div>
    <div className="flip-card-back">
    <h4><b>{this.state.customer.firstName} {this.state.customer.lastName}</b></h4>
    <p>id: {this.state.customer.id}</p>
    <p>Email: {this.state.customer.email}</p>
    <p>Password: {this.state.customer.password}</p>
  
    </div>
  </div>
</div>

                        {/* <div className="card">
  <img src="CustomerAvatar/img_avatar.png" alt="Avatar" />
  <div className="container">
    <h4><b>{this.state.customer.firstName} {this.state.customer.lastName}</b></h4>
    <p>{this.state.customer.email}</p>
    <p>{this.state.customer.password}</p>
    <p>{this.state.customer.id}</p>
  </div>
</div> */}
                    </div>
                );
            }
}
export default GetCustomerDetails;
