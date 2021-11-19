package com.hexaware.vegetablemanagement.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id;
	private String Name;
	private String Password;
	private String Phn;
	private String Email;
	private String Address;
	private float Wallet;
	
	public Customer() {
		super();
	}
	public Customer(long id, String name, String password, String phn, String email, String address, float wallet) {
		super();
		Id = id;
		Name = name;
		Password = password;
		Phn = phn;
		Email = email;
		Address = address;
		Wallet=wallet;
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
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
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
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public float getWallet() {
		return Wallet;
	}
	public void setWallet(float wallet) {
		this.Wallet = wallet;
	}
	
	

	
		
}
