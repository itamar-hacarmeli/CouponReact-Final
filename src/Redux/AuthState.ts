import CredentialsModel from "../Models/CredentialsModel";
import Customer from "../Models/Customer";
import UserModel from "../Models/UserMudel";



//auth state
export class AuthState{
    public user:UserModel = null;
    public constructor(){
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {this.user = storedUser}
    }
}
//auth action types
export enum AuthActionType{
    Register="Register",
    Login="Login",
    Logout = "Logout"
}
//auth action
export interface AuthAction{
    type:AuthActionType,
    payload? : any
}
//auth action creators
export function registerAction(customer: Customer):AuthAction{
    return {type: AuthActionType.Register, payload:customer}
}
export function loginAction(user:UserModel):AuthAction{
    return {type:AuthActionType.Login, payload:user}
}
export function logoutAction():AuthAction{
    return {type: AuthActionType.Logout}
}

//auth reducer
export function authReducer(currentState: AuthState = new AuthState(), action: AuthAction):AuthState{
    const newState = {...currentState}; //spread operator = שכפול אובייקט לאובייקט חדש
    switch(action.type){
        case AuthActionType.Register:
            //here the payload is the registred user sent from the server
            //we deleted the newStateUser and AuthAction , since we combine it
        case AuthActionType.Login:
            //here is the payload is the logged in user sent from the server
            newState.user = action.payload;
            //saving in the local storage (won't be deleted)
            localStorage.setItem("user",JSON.stringify(newState.user));
            break;
        case AuthActionType.Logout:
            newState.user = null;
            localStorage.removeItem("user")
    }
    return newState;
}