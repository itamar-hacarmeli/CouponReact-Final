import Coupon from "./Coupon";

class Customer{
    
    public id: string="";
    public firstName: string="";
    public lastName:string="";
    public email:string="";
    public password: string="";

    

    public coupons: Coupon[];
}

export default Customer;