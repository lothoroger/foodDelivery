package com.foodDelivery.fds.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Food {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer foodId;
	private String name;
	private Double price;
	private String imageurl;
	private String origin;
	private String addedon;
	private String stock;
	
	public Food() {}

	public Integer getFoodId() {
		return foodId;
	}

	public void setFoodId(Integer foodId) {
		this.foodId = foodId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getaddedon() {
		return addedon;
	}

	public void setaddedon(String addedon) {
		this.addedon = addedon;
	}

	public String getStock() {
		return stock;
	}

	public void setStock(String stock) {
		this.stock = stock;
	}

	@Override
	public String toString() {
		return "Food [foodId=" + foodId + ", name=" + name + ", price=" + price + ", imageurl=" + imageurl + ", origin="
				+ origin + ", addedon=" + addedon + ", stock=" + stock + "]";
	}

	public Food(Integer foodId, String name, Double price, String imageurl, String origin, String addedon,
			String stock) {
		super();
		this.foodId = foodId;
		this.name = name;
		this.price = price;
		this.imageurl = imageurl;
		this.origin = origin;
		this.addedon = addedon;
		this.stock = stock;
	}
	
	
	
	
}
