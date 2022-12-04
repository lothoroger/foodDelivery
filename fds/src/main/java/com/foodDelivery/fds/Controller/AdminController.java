package com.foodDelivery.fds.Controller;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodDelivery.fds.Repository.AdminRepository;
import com.foodDelivery.fds.model.Admin;
import com.foodDelivery.fds.model.Customers;
import com.foodDelivery.fds.model.Response;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/admin")
public class AdminController {
	
	public static String TAG = "[ADMIN]";
	
	
	@Autowired
	AdminRepository adminRepo;
	
	Date date = new Date();
	
	
	@PostMapping(path="/login")
	public Response<Admin> loginAdmin(@RequestParam String email, @RequestParam String password) {
		
		Date date = new Date();
		
		Admin admin = adminRepo.findByEmailAndPassword(email, password).get();
		
		if (!admin.getEmail().isEmpty()) {
			return new Response<Admin>(101, TAG+" +admin+Logged In Successful on "+date);
		} else {
			return new Response<Admin>(201, TAG+" Authentication Failed on "+date);
		}
		
	}
	
	@GetMapping(path="/get")
	public Response<Admin> getAdmin() {
		ArrayList<Admin> adminlist = new ArrayList<Admin>();
		adminRepo.findAll().forEach((admin)->adminlist.add(admin));
		return new Response<Admin>(101, adminlist.size()+" "+TAG+"s Fetched Successful on "+date);
		}
	
	
	@PostMapping(path="/add")
	public Response<Admin> addAdmin(@RequestParam(name="email", required=false) String email, @RequestParam(name="password", required=false) String password, @RequestParam(name="fullname" , required=false) String fullname) {
		
		Admin admin = new Admin(null, email, password, fullname);
		adminRepo.save(admin);
		return new Response<Admin>(101, admin+" "+TAG+" Fetched Successful on "+date);
		}


	
}