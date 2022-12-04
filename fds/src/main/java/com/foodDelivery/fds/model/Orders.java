package com.foodDelivery.fds.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer orderId;
	private Integer custId;
	private String firstname;
	private String lastname;
	private String email;
	private Integer foodId;
	private String foodname;
	private Integer quantity;
	private Double totalprice;
	private String dateorder;
	
	
	public Orders() {}
	
	public Integer getOrderId() {
		return orderId;
	}
	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}
	public Integer getCustId() {
		return custId;
	}
	public void setCustId(Integer custId) {
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
	public Integer getFoodId() {
		return foodId;
	}
	public void setFoodId(Integer foodId) {
		this.foodId = foodId;
	}
	public String getFoodname() {
		return foodname;
	}
	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public Double getTotalprice() {
		return totalprice;
	}
	public void setTotalprice(Double totalprice) {
		this.totalprice = totalprice;
	}
	public String getDateorder() {
		return dateorder;
	}
	public void setDateorder(String dateorder) {
		this.dateorder = dateorder;
	}
	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", custId=" + custId + ", firstname=" + firstname + ", lastname="
				+ lastname + ", email=" + email + ", foodId=" + foodId + ", foodname=" + foodname + ", quantity="
				+ quantity + ", totalprice=" + totalprice + ", dateorder=" + dateorder + "]";
	}
	public Orders(Integer custId, String firstname, String lastname, String email, Integer foodId,
			String foodname, Integer quantity, Double totalprice, String dateorder) {
		super();
		this.orderId = null;
		this.custId = custId;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.foodId = foodId;
		this.foodname = foodname;
		this.quantity = quantity;
		this.totalprice = totalprice;
		this.dateorder = dateorder;
	}
	
	
	

}
