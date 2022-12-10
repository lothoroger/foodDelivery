package com.foodDelivery.fds.Controller;


import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodDelivery.fds.Repository.CuisineRepository;
import com.foodDelivery.fds.model.Food;
import com.foodDelivery.fds.model.Food;
import com.foodDelivery.fds.model.Response;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cuisines")
public class FoodController {
	
	public static String TAG = "[Cuisines]";
	
	
	@Autowired
	CuisineRepository cuisineRepo;
	
	Date date = new Date();
	

	@GetMapping(path="/get")
	  public Response<Food> getFood() {
		ArrayList<Food> foodlist = new ArrayList<Food>();
		cuisineRepo.findAll().forEach((food)->foodlist.add(food));
		   return new Response<Food>(101, foodlist.size()+" "+TAG+"s Fetched Successful on "+date,foodlist);
		}

	
	
	@PostMapping(path="/add")
	public Response<Food> addFood(@RequestParam(name="name", required=false) String name, @RequestParam(name="price", required=false) Double price, @RequestParam(name="imageurl", required=false) String imageurl, @RequestParam(name="origin", required=false) String origin, @RequestParam(name="addedon", required=false)  String addedon,@RequestParam(name="stock", required=false)  String stock) {
		
		Food afood = new Food(null,name, price, imageurl, origin, addedon, stock);
		cuisineRepo.save(afood);
		return new Response<Food>(101, afood+" "+TAG+" Fetched Successful on "+date);
		}
	
	@GetMapping(path="/get/{id}")
	public Response<Food> getFoodById(@PathVariable("id") Integer id) {
		cuisineRepo.findById(id).get();
		return new Response<Food>(101, id+" "+TAG+" Found Successful on "+date);
		}
	
	
	@PutMapping(path="/update/{id}")
	public Response<Food> updateFood(@PathVariable("id") Integer id, @RequestParam(name="name", required=false) String name, @RequestParam(name="price", required=false) Double price, @RequestParam(name="imageurl", required=false) String imageurl, @RequestParam(name="origin", required=false) String origin, @RequestParam(name="addedon", required=false)  String addedon,@RequestParam(name="stock", required=false)  String stock) {
		
		Food foodupdate = cuisineRepo.findById(id).get();
		foodupdate.setName(name);
		foodupdate.setPrice(price);
		foodupdate.setOrigin(origin);
		foodupdate.setStock(stock);
	    foodupdate.setaddedon(addedon);
			
		System.out.printf("Food Update", foodupdate);
		
		
		return new Response<Food>(101, id+" "+TAG+" Updated Successful on "+foodupdate);
		}
	
	
	@GetMapping(path="/delete/{id}")
	public Response<Food> deleteFood(@PathVariable("id") Integer id) {
		Food foodel = new Food();
		foodel.setFoodId(id);
		cuisineRepo.delete(foodel);
		return new Response<Food>(101, id+" "+TAG+" Deleted Successful on "+date);
		}
	
	


	
}