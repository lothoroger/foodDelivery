package com.foodDelivery.fds.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodDelivery.fds.model.Customers;
import com.foodDelivery.fds.model.Response;
import com.foodDelivery.fds.repository.CustomersRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/customers")
public class CustomersController {
	
	public static String TAG = "[Customers]";
	CustomersRepository custRepo;
	Date date = new Date();
	
	
	@PostMapping(path="/login")
	public Response loginCustomers(@RequestParam String email, @RequestParam String password) {
		
		Date date = new Date();
		
		Customers cust = custRepo.findByEmailAndPassword(email, password).get();
		
		if (!cust.getEmail().isEmpty()) {
			return new Response(101, TAG+" Logged In Successful on "+date, cust);
		} else {
			return new Response(201, TAG+" Authentication Failed on "+date, null);
		}
		
	}
	
	
	
	
	
	@PostMapping(path="/add")
	public Response addCustomers(@RequestParam String firstName, @RequestParam String lastName,@RequestParam String email,@RequestParam String password,@RequestParam String phone, @RequestParam String address, @RequestParam String city, @RequestParam String state, @RequestParam String zip) {
		Customers customer = new Customers(firstName, lastName, email, password, phone, address, city,state, zip);
		custRepo.save(customer);
		return new Response(101, customer +" "+TAG+" Added Successful on "+date, customer);
		
	}
	
	
	
	@GetMapping(path="/get")
	public Response getCustomers() {
		ArrayList<Customers> custlist = new ArrayList<Customers>();
		custRepo.findAll().forEach((cust)->custlist.add(cust));
		return new Response(101, custlist.size()+" "+TAG+"s Fetched Successful on "+date, custlist);
		
	}
	
	@GetMapping(path="/get/{id}")
	public Response getCustomerById(@PathVariable("id") Integer id) {
		ArrayList<Customers> custlist = new ArrayList<Customers>();
		Customers custs = custRepo.findById(id).get();
		custlist.add(custs);
		
		return new Response (101, custlist+" "+TAG+"s Fetched Successful on "+date, custlist);
		
	}
		
	
	

}
