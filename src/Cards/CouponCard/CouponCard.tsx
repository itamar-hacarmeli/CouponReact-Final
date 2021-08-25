
import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { Autorenew } from "@material-ui/icons";
import axios from "axios";
import { Component } from "react";
import { CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import pic from "../../Components/Assets/nick-fewings-XXBgxhS_-vc-unsplash.jpg"
import Coupon from "../../Models/Coupon";
import SingleCoupon from "../../Single/SingleCoupon/SingleCoupon";
import "./CouponCard.css";




interface CouponCardState {
    coupon: Coupon[];

}



class CouponCard extends Component<{}, CouponCardState> {

    public constructor(props:{}) {
        super(props);
        this.state = {
			coupon:[]
        };
    }

    public async componentDidMount(){
        const response = await axios.get("http://localhost:8080/groupon/coupons")
        const myResponse = response.data;
        console.log(myResponse);

        this.setState({
            coupon: myResponse
        })
    }

public Example = () => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={pic} alt="Card image cap" />
        <CardBody>
            
        {this.state.coupon.map(item=><SingleCoupon key={item.id} myCoupon={item}/>)}
       
          <CardTitle tag="h5"> </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText> </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};




   public render(): JSX.Element{
        return(
        <div className="CouponCard">
            
           
           <h1>{this.Example()}</h1>
        </div>
    );
    }
}
export default CouponCard;
