import { Component } from "react";
import Coupon from "../../Models/Coupon";

import "./SingleCoupon.css";

interface SingleCouponsProps {
	myCoupon: Coupon
}

class SingleCoupons extends Component<SingleCouponsProps> {
    
    public render(): JSX.Element {
        return (
            <div className="SingleCoupons Box">
				id: {this.props.myCoupon.id}<br></br>
                categoryId: {this.props.myCoupon.categoryId}<br></br>
                companyId: {this.props.myCoupon.companyId}<br></br>
                title: {this.props.myCoupon.title}<br></br>
                description: {this.props.myCoupon.description}<br></br>
                startDate: {this.props.myCoupon.startDate}<br></br>
                endDate: {this.props.myCoupon.endDate}<br></br>
                amount: {this.props.myCoupon.amount}<br></br>
                price: {this.props.myCoupon.price}<br></br>
                image: {this.props.myCoupon.image}<br></br>
            </div>
        );
    }
}

export default SingleCoupons;
