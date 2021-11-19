package com.hexaware.vegetablemanagement.entity;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name = "vendors")
public class Vendor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id;
	private String Name;
	private String Phn;
	private String Email;
	private String Address;
	private String Password;
	private String Description;
	
	   // private List<Vegetable> vegs;
	
	
	public Vendor() {
		super();
	}
	public Vendor(String name, String phn, String email, String password, String Address, String desc) {
		super();
		Name = name;
		Phn = phn;
		Email = email;
		Password = password;
		this.Address=Address;
		Description = desc;
	}
	public Vendor(long id, String name, String phn, String email, String password, String Address, String desc) {
		super();
		Id = id;
		Name = name;
		Phn = phn;
		Email = email;
		Password = password;
		this.Address=Address;
		Description = desc;
	}
	
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public long getId() {
		return Id;
	}
	public void setId(long id) {
		Id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getPhn() {
		return Phn;
	}
	public void setPhn(String phn) {
		Phn = phn;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	
	
	
	
}
