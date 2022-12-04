package com.foodDelivery.fds.model;

import java.util.List;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Customers {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer custId;
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private String phone;
	private String address;
	private String city;
	private String state;
	private  String zip;


	

	public Customers() {}

	
	public Customers(String email, String password, String firstname, String lastname) {
		this.email = email;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
	}

	
	public Integer getCustId() {
		return custId;
	}

	public void setCustId(Integer custid) {
		this.custId = custId;
	}
	
	
	
	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	
	@Override
	public String toString() {
		return "Customers [custId="+custId+" firstname=" + firstname + ", lastname=" + lastname + ", email=" + email + ", password="
				+ password + ", phone=" + phone + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", zip=" + zip  + "]";
	}

	public Customers(Integer custId, String firstname, String lastname, String email, String password, String phone, String address,
			String city, String state, String zip) {
		super();
		this.custId = custId;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;

	}
	
	

}
