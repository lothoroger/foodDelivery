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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodDelivery.fds.Repository.CustomersRepository;
import com.foodDelivery.fds.model.Customers;
import com.foodDelivery.fds.model.Response;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/customers")
public class CustomersController {
	
	public static String TAG = "[Customers]";
	
	
	@Autowired
	CustomersRepository custRepo;
	
	Date date = new Date();
	
	
	@PostMapping(path="/login")
	public Response<Customers> loginCustomers(@RequestParam String email, @RequestParam String password) {
		
		Date date = new Date();
		
		Customers cust = custRepo.findByEmailAndPassword(email, password).get();
		
		if (!cust.getEmail().isEmpty()) {
			return new Response<Customers>(101, TAG+" +cust+Logged In Successful on "+date);
		} else {
			return new Response<Customers>(201, TAG+" Authentication Failed on "+date);
		}
		
	}
	
	@GetMapping(path="/get")
	public Response<Customers> getCustomers() {
		ArrayList<Customers> custlist = new ArrayList<Customers>();
		custRepo.findAll().forEach((cust)->custlist.add(cust));
		return new Response<Customers>(101, custlist.size()+" "+TAG+" Fetched Successful on "+date,custlist);
		}
	
	
	@PostMapping(path="/add")
	public Response<Customers> addCustomers(@RequestParam(name="email", required=false) String email, @RequestParam String password, @RequestParam(name="firstname", required=false) String firstname, @RequestParam(name="lastname", required=false) String lastname, @RequestParam String phone,@RequestParam String address,@RequestParam String city,@RequestParam String state, @RequestParam String zip) {
		
		Customers customer = new Customers(null, email, password, firstname, lastname, phone, address, city, state, zip );
		custRepo.save(customer);
		return new Response<Customers>(101, customer+" "+TAG+" Fetched Successful on "+date);
		}


	
	@GetMapping(path="/get/{id}")
	public Response<Customers> getCustomerById(@PathVariable Integer id) {
		custRepo.findById(id).get();
		return new Response<Customers>(101, id+" "+TAG+" Found Successful on "+date);
		}
	
	
	@PutMapping(path="/update/{id}")
	public Response<Customers> updateCustomer(@PathVariable Integer id, @RequestParam(name="firstname", required=false) String firstname, @RequestParam(name="lastname", required=false) String lastname,@RequestParam(name="email", required=false) String email, @RequestParam(required=false) String password,  @RequestParam(required=false) String phone,@RequestParam(required=false)  String address,@RequestParam(required=false)  String city,@RequestParam(required=false)  String state, @RequestParam(required=false)  String zip) {

		custRepo.findById(id).get();
		Customers custupdate = new Customers(id, firstname, lastname,  email, password, phone, address, city, state, zip );
		custRepo.save(custupdate);
		
		return new Response<Customers>(101, id+" "+TAG+" Found Successful on "+custupdate);
		}
	
	
	@PostMapping(path="/delete/{id}")
	public Response<Customers> deleteCustomer(@PathVariable Integer id) {
		custRepo.findById(id).get();
		custRepo.deleteById(id);
		return new Response<Customers>(101, id+" "+TAG+" Deleted Successful on "+date);
		}
	
	
	
}