package com.hexaware.vegetablemanagement.service;
import java.util.List;
import java.util.Optional;

import com.hexaware.vegetablemanagement.entity.Order;
import com.hexaware.vegetablemanagement.entity.VendorVeg;

public interface VendorVegService {
	
	List<VendorVeg> findAll();
	void save(VendorVeg venveg);
    Optional <VendorVeg> findById(Long id);
    void delete(long id);
	

}
