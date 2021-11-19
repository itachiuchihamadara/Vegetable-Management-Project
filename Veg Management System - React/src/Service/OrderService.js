import axios from 'axios';

const MAKE_ORD = "http://localhost:8080/makeOrder"
const UPDATE_ORD = "http://localhost:8080/updateOrderById?id="
class OrderService{

	makeOrder(ord){
		return axios.post(MAKE_ORD, ord)
	}

	updateOrder(ordId){
		return axios.get(UPDATE_ORD+ordId)
	}


}


export default new OrderService()