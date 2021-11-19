package com.hexaware.vegetablemanagement.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.vegetablemanagement.entity.Order;

public interface OrderService {
	
	List<Order> findAll();
	void save(Order ord);
    Optional < Order > findById(Long id);
    void delete(long id);
	

}
