import axios from "axios";
import { send } from "process";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Coupon from "../../../../Models/Coupon";
import notify from "../../../../Services/Notify";
import "./AddCoupon.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtAxios from "../../../../Auth/jwtAxios";


toast.configure()

function AddCoupon(): JSX.Element {
    const {register,handleSubmit,errors} = useForm<Coupon>();
    const history = useHistory();
    async function send(coupon: Coupon){
        try{
            const response = await jwtAxios.post<Coupon>("http://localhost:8080/groupon/company/coupons/add",coupon);
            console.log(response);
            toast("A new coupon has been added");
            history.push("/getCompanyCoupons")
        }catch{
            toast("something went wrong coupon was not added");
        }
        
    }

    return (
        <div className="AddCoupon">
<form onSubmit={handleSubmit(send)}>
<h1>Add coupon</h1>
<select className="select" ref={register} name="categoryId" required>
     <option selected value="" >Enter category</option>
    <option  value="FOOD"   >Food</option>
     <option value="ELECTRICITY" >Electricity</option>
      <option value="RESTAURANT" >Restaurant</option>
     <option value="VACATION" >Vacaiton</option>
      </select>
   <p>
    <label htmlFor="title">TITLE</label>
   <input type="text" name="title" placeholder="title" ref={register} required/>
   <br></br>
   </p>
   <p>
    <label htmlFor="description">DESCRIPTION</label>
   <input type="text" name="description" placeholder="description" ref={register} required/>
   <br></br>
   </p>
   <p>
    <label htmlFor="amount">AMOUNT</label>
   <input type="number" name="amount" placeholder="amount" ref={register} required/>
   <br></br>
   </p>
   <p>
    <label htmlFor="price">PRICE</label>
   <input type="number" name="price" placeholder="price" ref={register} required/>
   <br></br>
   </p>
   <p>
    <label htmlFor="startDate">START DATE</label>
   <input type="date" name="startDate" placeholder="start date" ref={register} required/>
   <br></br>
   </p>
   <p>
    <label htmlFor="endDate">END DATE</label>
   <input type="date" name="endDate" placeholder="endDate" ref={register} required/>
   <br></br>
   </p>
   <p>
    <label htmlFor="image">IMAGE</label>
   <input type="text" name="image" placeholder="image" ref={register} required/>
   <br></br>
   </p>
   <p className="p-container">
   <button type="submit" name="go" id="go" value="Log in">Add</button>
   </p>
</form>
        </div>
    );
}

export default AddCoupon;
