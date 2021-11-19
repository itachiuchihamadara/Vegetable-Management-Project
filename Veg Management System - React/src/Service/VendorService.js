import axios from 'axios';


const ALL_VEN = "http://localhost:8080/allVens"
const VEG_BY_VEN = "http://localhost:8080/vegByVendor?id="
const VEN_LOGIN = "http://localhost:8080/vendorloginauth"
const VEN_BY_ID = "http://localhost:8080/vendorById?id="
const UPDATE_VEN = "http://localhost:8080/updateVendorById"
const DELETE_VEN_ID = "http://localhost:8080/deleteVendorById?id="
const VEN_ORDER = "http://localhost:8080/ordersByVendor?id="
const VEG_BY_ID = "http://localhost:8080/vegById?id="
const REM_VEG_VEN_BY_ID = "http://localhost:8080/removevenveg?id="
const ADD_VEG = "http://localhost:8080/registerveg"
const ADD_VEG_VEN = "http://localhost:8080/addVenVeg"
const ALL_VEGS = "http://localhost:8080/allVegs"
const ORD_BY_STAT_VEN = "http://localhost:8080/pendingOrdersByVendor?id="
const ADD_VEN = "http://localhost:8080/registervendor"
class VendorService{

	getAllVendors(){
		return axios.get(ALL_VEN)

	}
	getVegetablesByVendor(id){
		return axios.get(VEG_BY_VEN+id)
	}
	checkLoginVendor(ven){
		return axios.post(VEN_LOGIN, ven)
	}
	getVendorById(id){
		return axios.get(VEN_BY_ID+id)
	}

	updateVendor(ven){
		return axios.post(UPDATE_VEN, ven)
	}

	deleteVendorById(id){
		return axios.get(DELETE_VEN_ID+id)
	}
	getOrdersById(id){
		return axios.get(VEN_ORDER+id)
	}
	getVegById(id){
		return axios.get(VEG_BY_ID+id)
	}

	delVegVen(id){
		return axios.get(REM_VEG_VEN_BY_ID+id)
	}

	addVeg(veg){
		return axios.post(ADD_VEG, veg)
	}
	addVegVen(vegven){
		return axios.post(ADD_VEG_VEN, vegven)
	}
	allVegs(){
		return axios.get(ALL_VEGS)
	}
	getOrdersByStatusAndVen(id){
		return axios.get(ORD_BY_STAT_VEN+id)
	}
	addVen(ven){
		return axios.post(ADD_VEN, ven)
	}

}

export default new VendorService()