package com.foodDelivery.fds.controller;

import java.util.Arrays;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.foodDelivery.fds.model.Admins;
import com.foodDelivery.fds.model.Response;
import com.foodDelivery.fds.repository.AdminRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/admins")
public class AdminController {

	@Autowired
	AdminRepository adminrep;
	
	Date date = new Date();
	final String TAG = "Admin";

	@PostMapping(path="/login")
	public Response loginAdmins(@RequestParam String email, @RequestParam String password) {		
		Admins admin = adminrep.findByEmailAndPassword(email, password).get();
			return new Response(101, TAG+" "+admin+" Logged In Successful on "+date);
		
	}

	@PostMapping(path="/add")
	public Response addAdmins(@RequestParam String email, @RequestParam String password, @RequestParam String fullName) {
		
		Date date = new Date();
		
		Admins admin = new Admins(email, password, fullName);
				adminrep.save(email, password,fullName);
			
			return new Response(101, TAG+" "+admin+" Added Successful on "+date);
				
	}
	
	

}
