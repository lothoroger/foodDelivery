package com.foodDelivery.fds.Controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodDelivery.fds.Repository.CustomersRepository;
import com.foodDelivery.fds.model.Customers;
import com.foodDelivery.fds.model.Food;
import com.foodDelivery.fds.model.Response;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/customers")
public class CustomersController {

	public static String TAG = "[Customers]";

	@Autowired
	CustomersRepository custRepo;

	Date date = new Date();

	@PostMapping(path = "/login")
	public Response<Customers> loginCustomer(@RequestParam String email, @RequestParam String password) {

		Date date = new Date();

		Customers cust = custRepo.findByEmailAndPassword(email, password).get();

		if (!cust.getEmail().isEmpty()) {
			return new Response<Customers>(101, TAG + " +cust+Logged In Successful on " + date);
		} else {
			return new Response<Customers>(201, TAG + " Authentication Failed on " + date);
		}

	}

	@GetMapping(path = "/get")
	public Response<Customers> getCustomers() {
		ArrayList<Customers> custlist = new ArrayList<Customers>();
		custRepo.findAll().forEach((cust) -> custlist.add(cust));
		return new Response<Customers>(101, custlist.size() + " " + TAG + " Fetched Successful on " + date, custlist);
	}

	@PostMapping(path = "/add")
	/*public Response<Customers> addCustomer(@RequestParam Integer custId, @RequestParam(name="firstname", required=false) String firstname, 
			@RequestParam String lastname, @RequestParam(name="email", required=false) String email, @RequestParam(name="password", required=false) String password,
			@RequestParam(name="phone", required=false) String phone,@RequestParam(name="address", required=false)String address,@RequestParam(name="city", required=false) String city,@RequestParam(name="state", required=false) String state, @RequestParam(name="zip", required=false) String zip) 
	*/
	public Response<Customers> addCustomer(@RequestBody Customers data)
		 {
		//Customers data = new Customers(null,firstname, lastname, email, password, phone, address, city, state, zip);
		custRepo.save(data);
		return new Response<Customers>(101, data + " " + TAG + " Fetched Successful on " + date);
	}

	
	
	@PutMapping(path = "/update/{id}")
	public Response<Customers> updateCustomer(@PathVariable("id") Integer id, @RequestBody Customers data) {
		custRepo.save(data);
		System.out.printf("Customer Update", data);
		return new Response<Customers>(101, TAG + " "+id+" Updated Successful on " + data);
	}
	/*
	public Response<Customers> updateCustomeraddOrder(@RequestParam Integer custId, @RequestParam(name="firstname", required=false) String firstname, 
			@RequestParam String lastname, @RequestParam(name="email", required=false) String email, @RequestParam(name="password", required=false) String password,
			@RequestParam(name="phone", required=false) String phone,@RequestParam(name="address", required=false)String address,@RequestParam(name="city", required=false) String city,@RequestParam(name="state", required=false) String state, @RequestParam(name="zip", required=false) String zip) 
	 {
		Customers data = new Customers(null,firstname, lastname, email, password, phone, address, city, state, zip);
		custRepo.save(data);
		return new Response<Customers>(101, data + " " + TAG + " Fetched Successful on " + date);
	}*/

	
	

	@GetMapping(path = "/delete/{id}")
	public Response<Customers> deleteCustomer(@PathVariable Integer id) {
		custRepo.deleteById(id);
		return new Response<Customers>(101, id + " " + TAG + " Deleted Successful on " + date);
	}

}