package com.hexaware.vegetablemanagement.service;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hexaware.vegetablemanagement.entity.Customer;
import com.hexaware.vegetablemanagement.entity.Vegetable;
public interface CustomerService {
	
	List<Customer> findAll();
	
	void save(Customer veg);

    Optional < Customer > findById(long id);

    void delete(long id);
	

}
