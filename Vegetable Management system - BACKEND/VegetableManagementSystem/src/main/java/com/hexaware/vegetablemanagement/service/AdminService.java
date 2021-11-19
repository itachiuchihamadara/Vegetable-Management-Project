package com.hexaware.vegetablemanagement.service;

import java.util.List;
import java.util.Optional;
import com.hexaware.vegetablemanagement.entity.Admin;


public interface AdminService{

	List<Admin> findAll();
	void save(Admin veg);
    Optional < Admin > findById(Long id);
    void delete(long id);
    
	
}
