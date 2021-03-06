package com.hexaware.vegetablemanagement.service;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hexaware.vegetablemanagement.entity.Vegetable;
public interface VegetableService {
	
	List<Vegetable> findAll();
	
	void save(Vegetable veg);

    Optional < Vegetable > findById(long id);

    void delete(long id);
	
	
	

}
