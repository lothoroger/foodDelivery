package com.foodDelivery.fds.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.foodDelivery.fds.model.Customers;

@Repository
public interface CustomersRepository extends CrudRepository<Customers, Integer>{

	Optional<Customers> findByEmailAndPassword(String email, String password);


}
