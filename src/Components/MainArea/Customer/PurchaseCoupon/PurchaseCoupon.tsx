import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import jwtAxios from "../../../../Auth/jwtAxios";
import Coupon from "../../../../Models/Coupon";
import notify from "../../../../Services/Notify";
import "./PurchaseCoupon.css";

function PurchaseCoupon(): JSX.Element {
    const {register,handleSubmit,errors} = useForm<Coupon>();
    const history = useHistory();
    async function send(coupon: Coupon){
        try{
            const response = await jwtAxios.post<Coupon>("http://localhost:8080/groupon/customer/purchaseCoupon",coupon);
            console.log(response);
            notify.success("A new Coupon has been added");
        }catch{
            notify.error("Coupon was not added");
        }
        
    }

    return (
        <div className="PurchaseCoupon">
			 <h2>Purchase Coupon</h2>
            <form onSubmit={handleSubmit(send)}>
              
               <input type="text" name="id" placeholder="id" ref={register}/>
               <br></br>
               
               
               <button>Purchase</button>
            </form>
			
        </div>
    );
}

export default PurchaseCoupon;
