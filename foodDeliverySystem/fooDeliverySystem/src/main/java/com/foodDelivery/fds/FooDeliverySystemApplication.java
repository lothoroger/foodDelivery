package com.foodDelivery.fds;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.foodDelivery.fds")
public class FooDeliverySystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(FooDeliverySystemApplication.class, args);
	}

}
