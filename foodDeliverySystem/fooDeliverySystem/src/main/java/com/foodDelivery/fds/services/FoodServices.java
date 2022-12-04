package com.foodDelivery.fds.services;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodDelivery.fds.model.FoodModel;
import com.foodDelivery.fds.repository.FoodRepository;


@Service
public class FoodServices  {


	private final FoodRepository foodRepo;
	
	@Autowired
	public FoodServices( FoodRepository foodRep) {
		foodRepo = foodRep;
	}
	
	public FoodModel addFood(FoodModel food) {
		
		food.setId(UUID.randomUUID().toString());
		return foodRepo.save(food);
	}
	
	public List<FoodModel> findAllFood() {
		return  (List<FoodModel>) foodRepo.findAll();
	}

	public FoodModel deleteFoodById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	public FoodModel addFood(String name, String price, String imageUrl) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
	

}
