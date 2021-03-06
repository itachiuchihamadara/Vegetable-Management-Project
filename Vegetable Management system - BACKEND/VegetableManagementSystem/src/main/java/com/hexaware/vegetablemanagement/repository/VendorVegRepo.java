package com.hexaware.vegetablemanagement.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.vegetablemanagement.entity.Order;
import com.hexaware.vegetablemanagement.entity.*;

@Repository
public interface VendorVegRepo extends JpaRepository<VendorVeg, Long> {
	
	public List<VendorVeg> findByVendor(Vendor ven);
	
	
	
	
}
