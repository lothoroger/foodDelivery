package com.foodDelivery.fds.model;

import java.util.ArrayList;
import java.util.List;

public class ResponseOriginal {
	
	public Integer code;
	public String message;
	List<Customers> custlist;
	List<Food> foodlist;
	
	public ResponseOriginal() {}
	
	public ResponseOriginal(Integer code, String message, ArrayList<Customers> custlists) {
		super();
		this.code = code;
		this.message = message;
		this.custlist = custlists;
	}
	
	public Integer getCode() {
		return code;
	}
	public void setCode(Integer code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
		
	
	public List<Customers> getCustlist() {
		return custlist;
	}

	public void setCustList(List<Customers> custlist) {
		this.custlist = custlist;
	}
	@Override
	public String toString() {
		return "Response [code=" + code + ", message=" + message +", lists="+custlist+"]";
	}
	
	public ResponseOriginal(Integer code, String message) {
		super();
		this.code = code;
		this.message = message;
	}
	
	
	/*
	public Response(Integer code, String message, ArrayList<Admin> foodlist) {
		super();
		this.code = code;
		this.message = message;
		this.foodlist = foodlist;
	} */
	

}
