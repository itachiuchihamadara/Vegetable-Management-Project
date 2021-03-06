package com.hexaware.vegetablemanagement.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hexaware.vegetablemanagement.entity.*;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{
			public List<Order> findByCustomer(Customer cust);
			
			public List<Order> findByVendor(Vendor ven);
			
			@Query("select o from Order o where o.Status = ?1 and o.vendor.Id = ?2")
			public List<Order> findByStatusAndVendor(String stat, 
					long venId);
			
}
