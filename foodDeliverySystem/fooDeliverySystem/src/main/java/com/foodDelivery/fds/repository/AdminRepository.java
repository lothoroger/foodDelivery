package com.foodDelivery.fds.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.foodDelivery.fds.model.Admins;
import com.foodDelivery.fds.model.Customers;

@Repository
public interface AdminRepository extends CrudRepository<Admins,Integer>{
		public Optional<Admins> findByEmailAndPassword(String email, String password);

		public void save(String email, String password, String fullName);
	

}
