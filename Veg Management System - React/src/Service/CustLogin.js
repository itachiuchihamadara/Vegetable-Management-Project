import axios from 'axios'

const CUST_LOGIN_URI =  "http://localhost:8080/custloginauth"
const ADM_LOGIN_URI =  "http://localhost:8080/adminloginauth"
const CUST_DETAILS = "http://localhost:8080/customerById?id="
const ALL_CUST = "http://localhost:8080/allCustomers"
const UPDATE_CUST = "http://localhost:8080/updateCustomerById"
const DELETE_CUST_ID = "http://localhost:8080/deleteCustomerById?id="
const ORDER_BY_CUST = "http://localhost:8080/orders?id="
const REG_CUST = "http://localhost:8080/registercustomer"

class custLogin{

    checkLogin(cust){
        return axios.post(CUST_LOGIN_URI, cust)
    }
    getDetails(id){
    	return axios.get(CUST_DETAILS+id, id)	
    }
    getAllCustomers(){
    	return axios.get(ALL_CUST)
    }
    checkLoginAdmin(admin){
        return axios.post(ADM_LOGIN_URI, admin)
    }

    updateCustomer(cust){
        
        return axios.post(UPDATE_CUST, cust)
    }

    deleteCustById(id){
        return axios.get(DELETE_CUST_ID+id)
    }
    getOrdersByCust(id){
        return axios.get(ORDER_BY_CUST+id)
    }
    registerCust(cust){
        return axios.post(REG_CUST, cust)
    }

}

export default new custLogin()