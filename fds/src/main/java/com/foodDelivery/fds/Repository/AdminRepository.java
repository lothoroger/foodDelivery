package com.foodDelivery.fds.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.foodDelivery.fds.model.Admin;

@Repository
public interface AdminRepository extends CrudRepository<Admin, Integer> {

	Optional<Admin> findByEmailAndPassword(String email, String password);

}
