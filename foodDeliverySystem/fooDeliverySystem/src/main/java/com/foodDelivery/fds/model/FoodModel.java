package com.foodDelivery.fds.model;



import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FoodModel implements Serializable  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String id;
	private String name;
	private Double price;
	private String imageUrl;
	private String origins;
	private String cookTime;
	private String addOn;
	private Boolean stock;

	public FoodModel() {
	}

	public FoodModel(String id, String name, Double price, String imageUrl, String origins, String cookTime,
			String addOn, Boolean stock) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.imageUrl = imageUrl;
		this.origins = origins;
		this.cookTime = cookTime;
		this.addOn = addOn;
		this.stock = stock;
	}

	
	
	
	@Override
	public String toString() {
		return "FoodModel [id=" + id + ", name=" + name + ", price=" + price + ", imageUrl=" + imageUrl + ", origins="
				+ origins + ", cookTime=" + cookTime + ", addOn=" + addOn + ", stock=" + stock + "]";
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getOrigins() {
		return origins;
	}

	public void setOrigins(String origins) {
		this.origins = origins;
	}

	public String getCookTime() {
		return cookTime;
	}

	public void setCookTime(String cookTime) {
		this.cookTime = cookTime;
	}

	public String getAddOn() {
		return addOn;
	}

	public void setAddOn(String addOn) {
		this.addOn = addOn;
	}

	public Boolean getStock() {
		return stock;
	}

	public void setStock(Boolean stock) {
		this.stock = stock;
	}
}