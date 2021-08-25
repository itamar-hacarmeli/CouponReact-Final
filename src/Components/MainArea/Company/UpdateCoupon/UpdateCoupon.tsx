import { makeStyles, Theme, TextField } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import axios from "axios";
import { Component, SyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Coupon from "../../../../Models/Coupon";
import "./UpdateCoupon.css";
import {createHashHistory} from 'history'
import Notifications, {notify} from 'react-notify-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtAxios from "../../../../Auth/jwtAxios";




const history = createHashHistory();//Return to the previous page of this code snippet code
toast.configure()

interface UpdateCouponProps{
    updateId:string
}

interface UpdateCouponState{
    coupon:Coupon;
    id: string;
    categoryId: string;
    companyId: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    amount: string;
    price: string;
    image: string;
}

class  UpdateCoupon extends Component<UpdateCouponProps,UpdateCouponState>{
    public constructor(props:UpdateCouponProps) {
        super(props);
        this.state = {
			coupon:new Coupon(),
            id:"",
            categoryId: "",
            companyId: "",
            title: "",
            description: "",
            startDate:"",
            endDate:"",
            amount:"",
            price: "",
            image:"",
        };
    }

    public goBackPage = async () =>
    {
      history.goBack();  //Return to the previous page of this code
    };
    
    public NotifyLikeABoss= async (index: {}) =>{
        toast(index) 
    };
 
    public updateData = async () =>{
        try{
        
            const response = await jwtAxios.get("http://localhost:8080/groupon/company/companies/thisCoupon/"+this.state.id);
            const myResponse = response.data;
            myResponse.id = this.state.id;
            myResponse.categoryId = this.state.categoryId;
            myResponse.companyId = this.state.companyId;
            myResponse.title = this.state.title;
            myResponse.description = this.state.description;
            myResponse.startDate = this.state.startDate;
            myResponse.endDate = this.state.endDate;
            myResponse.amount = this.state.amount;
            myResponse.price = this.state.price;
            myResponse.image = this.state.image;
            console.log(myResponse);
            this.setState({coupon:myResponse});
            await jwtAxios.put("http://localhost:8080/groupon/company/coupon/update",this.state.coupon);
            this.NotifyLikeABoss("Coupon: " + this.state.id + " was updated");
            this.goBackPage();
        }catch{
            this.NotifyLikeABoss("Coupon: " + this.state.id + " was not updated" )
        };
    };

    // companies/thisCoupon/{id}

async componentDidMount(){
    console.log(this.props.updateId)
    const result = await jwtAxios.get("http://localhost:8080/groupon/company/companies/thisCoupon/"+this.props.updateId);
    const updateCoupon = result.data;
    this.setState({
        id: updateCoupon.id,
        categoryId: updateCoupon.categoryId,
        companyId: updateCoupon.companyId,
        title: updateCoupon.title,
        description: updateCoupon.description,
        startDate: updateCoupon.startDate, 
        endDate: updateCoupon.endDate,
        amount: updateCoupon.amount, 
        price: updateCoupon.price,
        image: updateCoupon.image

    }) 
}    

public setId = (args: SyntheticEvent) => {
    const value = (args.target as HTMLInputElement).value;
    this.setState({
        id:value
    })
};

public setCategoryId = (args: SyntheticEvent) => {
    const value = (args.target as HTMLInputElement).value;
    this.setState({
        categoryId:value
    })
};

public setCompanyId = (args: SyntheticEvent) => {
    const value = (args.target as HTMLInputElement).value;
    this.setState({
        companyId:value
    })
};

public setTitle = (args: SyntheticEvent) => {
    const value = (args.target as HTMLInputElement).value;
    this.setState({
       title:value
    })
};
public setDescription = (args: SyntheticEvent) => {
    const value = (args.target as HTMLInputElement).value;
    this.setState({
       description:value
    })
};
public setStartDate = (args: SyntheticEvent) => {
    const value = (args.target as HTMLInputElement).value;
    this.setState({
     startDate:value
    })
};
public setEndDate= (args: SyntheticEvent) => {
    const value = (args.target as HTMLInputElement).value;
    this.setState({
       endDate:value
    })
};
public setAmount = (args: SyntheticEvent) => {
    const value = (args.target as HTMLInputElement).value;
    this.setState({
       amount:value
    })
};
public setPrice = (args: SyntheticEvent) => {
    const value = (args.target as HTMLInputElement).value;
    this.setState({
       price:value
    })
};
public setImage = (args: SyntheticEvent) => {
    const value = (args.target as HTMLInputElement).value;
    this.setState({
       image:value
    })
};

    
public render(): JSX.Element {
        return (
            <div className="UpdateCoupon ">
                <h2>עדכון קופון</h2>
                <TextField label="Id" variant="outlined" className="textField"  value={this.state.id} disabled onChange={this.setId}/><br/><br/>
                <TextField label="Category Id" variant="outlined" className="textField" value={this.state.categoryId} onChange={this.setCategoryId}/><br/><br/>
                <TextField label="Company Id" variant="outlined" className="textField"  value={this.state.companyId} disabled onChange={this.setCompanyId}/><br/><br/>
                <TextField label="Title" variant="outlined" className="textField" value={this.state.title} onChange={this.setTitle}/><br/><br/>
                <TextField label="Description" variant="outlined" className="textField" value={this.state.description} onChange={this.setDescription}/><br/><br/>
                <TextField type="date" label="StartDate" variant="outlined" className="textField" value={this.state.startDate} onChange={this.setStartDate}/><br/><br/>
                <TextField type="date" label="EndDate" variant="outlined" className="textField" value={this.state.endDate} onChange={this.setEndDate}/><br/><br/>
                <TextField label="Amount" variant="outlined" className="textField" value={this.state.amount} onChange={this.setAmount}/><br/><br/>
                <TextField label="Price" variant="outlined" className="textField" value={this.state.price} onChange={this.setPrice}/><br/><br/>
                <TextField label="Image" variant="outlined" className="textField" value={this.state.image} onChange={this.setImage}/><br/><br/>
                    <button  onClick={this.updateData}>Update</button>
                   
                
            </div>
        );
    }
}
export default UpdateCoupon;
