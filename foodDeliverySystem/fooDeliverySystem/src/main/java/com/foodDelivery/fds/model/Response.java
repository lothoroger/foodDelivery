package com.foodDelivery.fds.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;

public class Response {
	
	Integer code;
	String message;
	List<Customers> custs;
	List<Admins> admins;
	
	
	public Response() {}
	
	
	public Response(Integer code, String message) {
		this.code = code;
		this.message = message;
		
		
	}

	public Response(Integer code, String message, List<Customers> custs) {
		super();
		this.code = code;
		this.message = message;
		this.custs = custs;
		
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
	public List<Admins> getAdmins() {
		return admins;
	}
	public void setAdmins(List<Admins> admins) {
		this.admins = admins;
	}
	
	public Response(int i, String string, Customers customer) {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Response [code=" + code + ", message=" + message + "]";
	}
	
	
}
