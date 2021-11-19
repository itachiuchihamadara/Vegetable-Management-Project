package com.hexaware.vegetablemanagement.entity;
import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
public class VendorVeg {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	@JoinColumn(name="VegetableId", referencedColumnName="Id")
	private Vegetable vegetable;
	
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	@JoinColumn(name="VendorId", referencedColumnName="Id")
	private Vendor vendor;

	public VendorVeg() {
		super();
	}

	public VendorVeg(long id, Vegetable vegetable, Vendor vendor) {
		super();
		this.id =id;
		this.vegetable = vegetable;
		this.vendor = vendor;
	}

	public Vegetable getVegetable() {
		return vegetable;
	}

	public void setVegetable(Vegetable vegetable) {
		this.vegetable = vegetable;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}
	
	
}
