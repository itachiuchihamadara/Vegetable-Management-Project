package com.hexaware.vegetablemanagement.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.vegetablemanagement.entity.Customer;
import com.hexaware.vegetablemanagement.repository.CustomerRepository;

@Service
public class CustomerServiceImp implements CustomerService {
	@Autowired
	private CustomerRepository custRepo;
	
	@Override
	public List<Customer> findAll() {
		// TODO Auto-generated method stub
		return custRepo.findAll();
	}

	@Override
	public void save(Customer cust) {
		custRepo.save(cust);
	}

	@Override
	public Optional<Customer> findById(long id) {
		// TODO Auto-generated method stub
		return custRepo.findById(id);
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		custRepo.deleteById(id);
	}

}
