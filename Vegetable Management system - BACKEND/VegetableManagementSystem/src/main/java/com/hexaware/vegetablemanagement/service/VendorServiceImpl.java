package com.hexaware.vegetablemanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.vegetablemanagement.entity.Vendor;
import com.hexaware.vegetablemanagement.repository.VendorRepository;
@Service
public class VendorServiceImpl implements VendorService{
	
	@Autowired
	VendorRepository venRepo;

	@Override
	public List<Vendor> findAll() {
		// TODO Auto-generated method stub
		return venRepo.findAll();
	}

	@Override
	public void save(Vendor ven) {
		venRepo.save(ven);
		
	}

	@Override
	public Optional<Vendor> findById(Long id) {
		// TODO Auto-generated method stub
		return venRepo.findById(id);
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		venRepo.deleteById(id);
	}

}
