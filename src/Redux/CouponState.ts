import Coupon from "../Models/Coupon";


export class CouponState{
    public coupons:Coupon[] = [];
}

export enum CouponActionType{
    CouponDownloaded="CouponDownloaded",
    CouponAdded = "CouponAdded",
    CouponUpdated = "CouponUpdated",
    CouponDelete = "CouponDelete"
}

export interface CouponAction{
    type:CouponActionType;
    payload?: any;
}

export function couponDownloadedAction(coupons: Coupon[]):CouponAction{
    return {type: CouponActionType.CouponDownloaded, payload:coupons}
}
export function couponAddedAction(coupon: Coupon):CouponAction{
    return {type: CouponActionType.CouponAdded, payload:coupon}
}

export function couponUpdateAction(coupon: Coupon):CouponAction{
    return {type: CouponActionType.CouponUpdated, payload:coupon}
}

export function couponDeleteAction(id:number):CouponAction{
    return {type: CouponActionType.CouponDelete, payload:id}
}


//reducer
export function couponReducer(currentState: CouponState = new CouponState, action:CouponAction):CouponState{
    const newState = {...currentState};

    switch(action.type){
        case CouponActionType.CouponDownloaded:
            newState.coupons = action.payload
            break;
        case CouponActionType.CouponAdded:
            newState.coupons.push(action.payload)
            break;
        case CouponActionType.CouponUpdated:
            newState.coupons.push(action.payload)
            break;
        case CouponActionType.CouponDelete:
            localStorage.removeItem("coupons")
            break;
    }
    return newState;
}