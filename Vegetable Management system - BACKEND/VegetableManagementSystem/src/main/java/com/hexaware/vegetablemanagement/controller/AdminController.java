package com.hexaware.vegetablemanagement.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.vegetablemanagement.entity.*;
import com.hexaware.vegetablemanagement.repository.OrderRepository;
import com.hexaware.vegetablemanagement.repository.VendorVegRepo;
import com.hexaware.vegetablemanagement.service.AdminService;
import com.hexaware.vegetablemanagement.service.CustomerService;
import com.hexaware.vegetablemanagement.service.OrderService;
import com.hexaware.vegetablemanagement.service.VegetableService;
import com.hexaware.vegetablemanagement.service.VendorService;
import com.hexaware.vegetablemanagement.service.VendorVegService;

@RestController
public class AdminController {
	@Autowired
	private CustomerService custService;
	@Autowired
	private AdminService admService;
	@Autowired
	private OrderRepository ordRepo;
	@Autowired
	private OrderService ordService;
	
	@Autowired
	private VendorVegRepo venvegrep;
	
	@Autowired
	private VendorVegService venvegserv;
	
	@Autowired
	private VendorService venserv;
	
	@Autowired
	private VegetableService vegserv;

	
	@RequestMapping("/allCustomers")
	List<Customer> getAll() {
		return custService.findAll();
	}
	@RequestMapping("/allVegs")
	List<Vegetable> getAllVeg() {
		//admService.save(new Admin(1, "ROOT", "root"));
		return vegserv.findAll();
	}
	@RequestMapping("/allVens")
	List<Vendor> getAllVens() {
		return venserv.findAll();
	}
	@RequestMapping("/vendorById")
	Vendor getVensById(@RequestParam(value = "id") int venId) {
		return venserv.findById((long)venId).get();
	}
	@RequestMapping("/vegById")
	Vegetable getVegsById(@RequestParam(value = "id") int vegId) {
		return vegserv.findById((long)vegId).get();
	}
	@RequestMapping("/customerById")
	Customer getCustomerDetails(@RequestParam(value = "id")  int custId) {
		return custService.findById(custId).get();
	}
	@PostMapping("/updateCustomerById")
	void updateCustomerDetails(@RequestBody Customer upCust) {
		Customer curr =  custService.findById((long)upCust.getId()).get();
		System.out.println(upCust.getId());
		curr.setPassword(upCust.getPassword());
		curr.setName(upCust.getName());
		curr.setAddress(upCust.getAddress());
		curr.setEmail(upCust.getEmail());
		curr.setPhn(upCust.getPhn());
		curr.setWallet(upCust.getWallet());
		custService.save(curr);
	}
	@PostMapping("/updateVendorById")
	void updateVendorDetails(@RequestBody Vendor upVen) {
		Vendor curr =  venserv.findById((long)upVen.getId()).get();
		System.out.println(upVen.getId());
		curr.setPassword(upVen.getPassword());
		curr.setName(upVen.getName());
		curr.setAddress(upVen.getAddress());
		curr.setEmail(upVen.getEmail());
		curr.setPhn(upVen.getPhn());
		curr.setDescription(upVen.getDescription());
		venserv.save(curr);
	}
	@RequestMapping("/deleteCustomerById")
	void deleteCustomerById(@RequestParam(value = "id")  int custId) {
		custService.delete(custId);
	}
	@RequestMapping("/deleteVendorById")
	void deleteVendorrById(@RequestParam(value = "id")  int venId) {
		venserv.delete(venId);
	}
	@RequestMapping("/vegByVendor")
	List<VendorVeg> vegByVendor(@RequestParam(value = "id")  int venId) {
		return venvegrep.findByVendor(venserv.findById((long) venId).get());
		
	}
	
	@PostMapping(value="/custloginauth")
	Map<String, String>  custLoginAuth(@RequestBody Customer cust) {
		HashMap<String, String> res = new HashMap<>();
		try {
		System.out.println(cust.getPassword()+"hdello");
			long custId = cust.getId();
		Customer currCust = custService.findById(custId).get();
		if(currCust.getPassword().equals(cust.getPassword())) {
			res.put("login", "true");
		    return res;
		    }

		else {
			res.put("login", "false");
		    return res;
		}
		}
		catch(Exception e) {
			e.printStackTrace();
			res.put("login", "false");
		    return res;

		}
	}
	
	@PostMapping(value="/adminloginauth")
	Map<String, String>  AdmnAuth(@RequestBody Admin admin) {
		HashMap<String, String> res = new HashMap<>();
		try {
		System.out.println(admin.getPassword()+"hdello");
			long admId = admin.getId();
		Admin curradm = admService.findById(admId).get();
		if(curradm.getPassword().equals(admin.getPassword())) {
			res.put("login", "true");
		    return res;
		    }

		else {
			res.put("login", "false");
		    return res;
		}
		}
		catch(Exception e) {
			e.printStackTrace();
			res.put("login", "false");
		    return res;

		}
	}
	@PostMapping(value="/vendorloginauth")
	Map<String, String>  VendorAuth(@RequestBody Vendor ven) {
		HashMap<String, String> res = new HashMap<>();
		try {
		
			long venId = ven.getId();
			Vendor currven = venserv.findById(venId).get();
			if(currven.getPassword().equals(ven.getPassword())) {
				res.put("login", "true");
				return res;
		    	}

			else {
				res.put("login", "false");
				return res;
				}
			}
		catch(Exception e) {
			e.printStackTrace();
			res.put("login", "false");
		    return res;

		}
	}
	
	@RequestMapping(value= "/orders")
	List<Order> getOrdersByCustomer(@RequestParam(value = "id")  int custId){
		return ordRepo.findByCustomer(custService.findById((long) custId).get());	
	}
	
	@RequestMapping(value= "/ordersByVendor")
	List<Order> getOrdersByVendors(@RequestParam(value = "id")  int venId){
		return ordRepo.findByVendor(venserv.findById((long) venId).get());	
	}
	@PostMapping(value="/makeOrder")
	void makeOrder(@RequestBody Order ord) {
		ordService.save(ord);
	}
	
	@RequestMapping(value = "/updateOrderById")
	void updateOrder(@RequestParam(value="id") long ordId) {
		Order ord = ordService.findById(ordId).get();
		ord.setStatus("Approved");
		ordService.save(ord);
	}
	@PostMapping(value="/registercustomer")
	void regusterCustomer(@RequestBody Customer cust) {
		custService.save(cust);
	}
	@PostMapping(value="/registerveg")
	void regusterVeg(@RequestBody Vegetable veg) {
		vegserv.save(veg);
	}
	@PostMapping(value="/registervendor")
	void regusterCustomer(@RequestBody Vendor vent) {
		venserv.save(vent);
	}
	@PostMapping(value="/addVenVeg")
	void regusterCustomer(@RequestBody VendorVeg vent) {
		venvegserv.save(vent);
	}
	
	@RequestMapping(value="/removevenveg")
	void regusterCustomer(@RequestParam(value="id") long id) {
		venvegserv.delete(id);
	}
	
	@RequestMapping(value = "/pendingOrdersByVendor")
	List<Order> pending(@RequestParam(value="id") int id){
		return ordRepo.findByStatusAndVendor("pending", (long)id);
	}
	
	
}
