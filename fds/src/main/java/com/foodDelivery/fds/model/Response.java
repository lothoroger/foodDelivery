package com.foodDelivery.fds.model;

import java.util.ArrayList;
import java.util.List;

public class Response<T> {
	
	public Integer code;
	public String message;
	private List<T> data;
	private String cust;
	
	
	public Response() {}
	
	public Response(Integer code, String message, String data) {
		super();
		this.code = code;
		this.message = message;
		this.cust = cust;
	}
	
	public Response(Integer code, String message, List<T> data) {
		super();
		this.code = code;
		this.message = message;
		this.data = data;
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
		
	
	public List<T> getData() {
		return data;
	}

	public void setDatat( List<T> data) {
		this.data = data;
	}
	@Override
	public String toString() {
		return "Response [code=" + code + ", message=" + message +", data ="+data+"]";
	}
	
	public Response(Integer code, String message) {
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
