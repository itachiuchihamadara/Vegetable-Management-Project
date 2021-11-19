package com.hexaware.vegetablemanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.vegetablemanagement.entity.Admin;
import com.hexaware.vegetablemanagement.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	AdminRepository admRepo;
	
	@Override
	public List<Admin> findAll() {
		// TODO Auto-generated method stub
		return admRepo.findAll();
	}

	@Override
	public void save(Admin veg) {
		// TODO Auto-generated method stub
		admRepo.save(veg);
		
	}

	@Override
	public Optional<Admin> findById(Long id) {
		// TODO Auto-generated method stub
		return admRepo.findById(id);
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		admRepo.deleteById(id);
	}

}
