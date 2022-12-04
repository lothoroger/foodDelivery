package com.foodDelivery.fds.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodDelivery.fds.model.FoodModel;

import com.foodDelivery.fds.services.FoodServices;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
@RequestMapping("/cuisines")
public class FoodController {

		private final FoodServices foodService = null;
		

	
		
		
		@GetMapping("/all")
		public ResponseEntity<List<FoodModel>> getAllFood() {
			
			List<FoodModel> foods = foodService.findAllFood();
			return new ResponseEntity<>(foods, HttpStatus.OK);
		}
		
		
		/*@GetMapping("/find/{id}")
		public ResponseEntity<FoodModel> getFoodbyId (@PathVariable("id") Long id) {
			
			FoodModel food = foodService.findFoodById(id);
			return new ResponseEntity<>(food, HttpStatus.OK);
		}
		*/
		
		@PostMapping("/add")
		public ResponseEntity<FoodModel> addFood(@RequestParam String name, @RequestParam String price, @RequestParam String imageUrl) {
			
			
			FoodModel addFood = foodService.addFood(name,price, imageUrl);
			return new ResponseEntity<>(addFood, HttpStatus.CREATED);
		}
		
		@PutMapping("/update")
		public ResponseEntity<FoodModel> updateFood(@RequestBody FoodModel fm) {
			
			FoodModel updateFood = foodService.addFood(fm);
			return new ResponseEntity<>(updateFood, HttpStatus.OK);
		}
		
		@DeleteMapping("/delete/{id}")
		public ResponseEntity<FoodModel> deleteFoodbyId (@PathVariable("id") Long id) {
			
			FoodModel food = foodService.deleteFoodById(id);
			return new ResponseEntity<>(food, HttpStatus.OK);
		}
		
		
}
