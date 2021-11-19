package com.hexaware.vegetablemanagement.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.vegetablemanagement.entity.VendorVeg;
import com.hexaware.vegetablemanagement.repository.VendorVegRepo;

@Service
public class VendorVegServiceImpl implements VendorVegService {
	
	@Autowired
	VendorVegRepo rep;

	@Override
	public List<VendorVeg> findAll() {
		// TODO Auto-generated method stub
		return rep.findAll();
	}

	@Override
	public void save(VendorVeg venveg) {
		// TODO Auto-generated method stub
		rep.save(venveg);
	}

	@Override
	public Optional<VendorVeg> findById(Long id) {
		// TODO Auto-generated method stub
		return rep.findById(id);
	}

	@Override
	public void delete(long id) {
		// TODO Auto-generated method stub
		rep.deleteById(id);
	}
	
	

}
