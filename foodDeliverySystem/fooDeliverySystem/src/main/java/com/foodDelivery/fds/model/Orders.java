package com.foodDelivery.fds.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Orders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String firstName;
	private String lastName;
	private String phone;
	private String email;
	private String cuisineName;
	private Integer Quantity;
	private Double totalAmount;
	private String dateorder;


	
	

}
