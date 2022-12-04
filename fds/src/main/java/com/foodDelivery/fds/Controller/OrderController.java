package com.foodDelivery.fds.Controller;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodDelivery.fds.Repository.OrdersRepository;
import com.foodDelivery.fds.model.Food;
import com.foodDelivery.fds.model.Orders;
import com.foodDelivery.fds.model.Response;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/orders")
public class OrderController {
	
	
	public static String TAG = "[Orders]";
	
	
	@Autowired
	OrdersRepository orderRepo;
	
	Date date = new Date();

	@PostMapping(path="/add")
	public Response<Orders> addOrder(@RequestParam Integer custId, @RequestParam(name="firstname", required=false) String firstname, 
			@RequestParam String lastname, @RequestParam(name="email", required=false) String email, @RequestParam(name="foodId", required=false) Integer foodId
			, @RequestParam String foodname,@RequestParam Integer quantity,@RequestParam Double totalprice,@RequestParam String dateorder) {
		Orders orders = new Orders(custId, firstname, lastname, email, foodId, foodname, quantity, totalprice, dateorder );
		orderRepo.save(orders);
		return new Response<Orders>(101, orders+" "+TAG+" Added Successful on "+date);
		}
	
	
	@GetMapping(path="/get")
	  public Response<Orders> getOrders() {
		ArrayList<Orders> orderlist = new ArrayList<Orders>();
		orderRepo.findAll().forEach((orders)->orderlist.add(orders));
		   return new Response<Orders>(101, orderlist.size()+" "+TAG+"s Fetched Successful on "+date,orderlist);
		}


	@GetMapping(path="/get/{id}")
	  public Response<Orders> getOrderById(@PathVariable Integer id) {
				orderRepo.findById(id);
		   return new Response<Orders>(101, id+" "+TAG+"s Found Successful on "+date) ;
		}

}
