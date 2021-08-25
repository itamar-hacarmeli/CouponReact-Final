import axios from "axios";
import { loginAction } from "../Redux/AuthState";
import store from "../Redux/Store";


const jwtAxios = axios.create();

//request interceptor - מה אנו רוצים לבצע בכל לשיחת בקשה לשרת
jwtAxios.interceptors.request.use(request=>{
    request.headers={"authorization":store.getState().authState.user}
    return request;
})

jwtAxios.interceptors.response.use(response=>{
    console.log(response);
    console.log(response.headers);
    store.dispatch(loginAction(response.headers.authorization))
    return response;
}) 
export default jwtAxios;


