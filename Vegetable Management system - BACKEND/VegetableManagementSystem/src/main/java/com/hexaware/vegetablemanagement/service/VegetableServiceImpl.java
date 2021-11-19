package com.hexaware.vegetablemanagement.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.vegetablemanagement.entity.Vegetable;
import com.hexaware.vegetablemanagement.repository.OrderRepository;
import com.hexaware.vegetablemanagement.repository.VegetableRepository;

@Service
public class VegetableServiceImpl implements VegetableService{
	
	@Autowired
	private VegetableRepository vegRepo;
	
	@Override
	public List<Vegetable> findAll() {
		// TODO Auto-generated method stub
		return vegRepo.findAll();
	}

	@Override
	public void save(Vegetable veg) {
		vegRepo.save(veg);
		
	}

	@Override
	public Optional<Vegetable> findById(long id) {
		// TODO Auto-generated method stub
		return vegRepo.findById(id);
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		
	}

}
