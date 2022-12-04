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

import com.foodDelivery.fds.Repository.CuisineRepository;
import com.foodDelivery.fds.model.Food;
import com.foodDelivery.fds.model.Response;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/cuisines")
public class FoodController {
	
	public static String TAG = "[Cuisines]";
	
	
	@Autowired
	CuisineRepository cuisineRepo;
	
	Date date = new Date();
	

	@GetMapping(path="/get")
	  public Response<Food> getFoods() {
		ArrayList<Food> foodlist = new ArrayList<Food>();
		cuisineRepo.findAll().forEach((food)->foodlist.add(food));
		   return new Response<Food>(101, foodlist.size()+" "+TAG+"s Fetched Successful on "+date,foodlist);
		}

	
	
	@PostMapping(path="/add")
	public Response<Food> addFood(@RequestParam(name="name", required=false) String name, @RequestParam Double price, @RequestParam(name="imageurl", required=false) String imageurl, @RequestParam(name="origin", required=false) String origin, @RequestParam String addedon,@RequestParam String stock) {
		
		Food afood = new Food(null,name, price, imageurl, origin, addedon, stock);
		cuisineRepo.save(afood);
		return new Response<Food>(101, afood+" "+TAG+" Fetched Successful on "+date);
		}
	
	@GetMapping(path="/get/{id}")
	  public Response<Food> getFoodById(@PathVariable("id") Integer foodId) {
		ArrayList<Food> data = new ArrayList<Food>();
		Food foodIds = cuisineRepo.findById(foodId).get();
		data.add(foodIds);
		return new Response<Food>(101, foodIds+" "+TAG+"s Fetched Successful on "+date,data);
		}



	
}