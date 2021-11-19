package com.hexaware.vegetablemanagement.service;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.vegetablemanagement.entity.Vegetable;
import com.hexaware.vegetablemanagement.entity.Vendor;

public interface VendorService {
			
	List<Vendor> findAll();
	
	void save(Vendor ven);

    Optional < Vendor > findById(Long id);

    void delete(long id);
	
}
