package com.hexaware.vegetablemanagement.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.vegetablemanagement.entity.Order;
import com.hexaware.vegetablemanagement.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
	private OrderRepository orderRepo;
	@Override
	public List<Order> findAll() {
		// TODO Auto-generated method stub
		return orderRepo.findAll();
	}

	@Override
	public void save(Order ord) {
		// TODO Auto-generated method stub
		orderRepo.save(ord);
		
	}

	@Override
	public Optional<Order> findById(Long id) {
		// TODO Auto-generated method stub
		return orderRepo.findById(id);
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		orderRepo.deleteById(id);
	}

}
