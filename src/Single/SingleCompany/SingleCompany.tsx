import { Component } from "react";
import Company from "../../Models/Company";
import "./SingleCompany.css";

interface SingleCompanyProps {
	myCompany: Company
}

class SingleCompany extends Component<SingleCompanyProps> {

    public render(): JSX.Element {
        return (
            <div className="SingleCompany Box">
				id: {this.props.myCompany.id}<br></br>
               name: {this.props.myCompany.name}<br></br>
               email: {this.props.myCompany.email}<br></br>
               {/*password: {this.props.myCompany.password}<br></br>*/}
                {/*{this.props.myCompany.coupons}*/}
                
            </div>
        );
    }
}

export default SingleCompany;
