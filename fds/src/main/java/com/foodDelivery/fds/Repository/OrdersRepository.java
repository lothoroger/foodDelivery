package com.foodDelivery.fds.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.foodDelivery.fds.model.Customers;
import com.foodDelivery.fds.model.Orders;

@Repository
public interface OrdersRepository extends CrudRepository<Orders, Integer>{

	


}
