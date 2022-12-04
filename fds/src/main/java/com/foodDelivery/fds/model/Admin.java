package com.foodDelivery.fds.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Admin {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer adminId;
	private String email;
	private String password;
	private String fullname;
	
	public Admin() {}

	public Integer getAdminId() {
		return adminId;
	}

	public void setAdminId(Integer adminId) {
		this.adminId = adminId;
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

	public String getfullname() {
		return fullname;
	}

	public void setfullname(String fullname) {
		this.fullname = fullname;
	}

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", email=" + email + ", password=" + password + ", fullname=" + fullname
				+ "]";
	}

	public Admin(Integer adminId, String email, String password, String fullname) {
		super();
		this.adminId = adminId;
		this.email = email;
		this.password = password;
		this.fullname = fullname;
	}
	
	
	
	
	
}
	
	