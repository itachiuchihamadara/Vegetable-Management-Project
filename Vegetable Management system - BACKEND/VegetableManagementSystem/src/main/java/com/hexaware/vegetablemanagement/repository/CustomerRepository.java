package com.hexaware.vegetablemanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.vegetablemanagement.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
