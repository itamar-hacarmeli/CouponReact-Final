

import { combineReducers, createStore } from "redux";
import { authReducer } from "./AuthState";
import { companyReducer } from "./CompanyState";
import { couponReducer } from "./CouponState";
import { customerReducer } from "./CustomerState";



//single reducer
//const store = createStore(carReducer);
//store.getState().cars;

//MultiPlate reducers:
//we will put inside our reducers
const reducers = combineReducers({companyState:companyReducer,couponState:couponReducer,customerState:customerReducer,authState:authReducer}); 
const store = createStore(reducers);

//for getting data from store in multi reducers type
//store.getState().carState.cars;


export default store;