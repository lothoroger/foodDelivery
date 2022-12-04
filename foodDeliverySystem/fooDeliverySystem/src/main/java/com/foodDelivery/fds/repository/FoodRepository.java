package com.foodDelivery.fds.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.foodDelivery.fds.model.FoodModel;

@Repository
public interface FoodRepository extends CrudRepository<FoodModel, Integer> {

	void deleteFoodModelById(Long id);
	Optional<FoodModel> findFoodModelById(long id);


}
