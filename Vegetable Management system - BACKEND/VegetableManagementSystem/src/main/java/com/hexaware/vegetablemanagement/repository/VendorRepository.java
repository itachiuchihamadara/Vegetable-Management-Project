package com.hexaware.vegetablemanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.vegetablemanagement.entity.Vendor;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {

}
