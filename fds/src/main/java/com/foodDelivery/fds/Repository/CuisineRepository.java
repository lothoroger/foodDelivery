package com.foodDelivery.fds.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.foodDelivery.fds.model.Food;

@Repository
public interface CuisineRepository extends CrudRepository<Food, Integer> {

}
