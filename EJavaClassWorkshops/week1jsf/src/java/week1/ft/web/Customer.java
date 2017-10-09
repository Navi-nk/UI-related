package week1.ft.web;

import java.sql.ResultSet;
import java.sql.SQLException;
import javax.annotation.Resource;
import javax.sql.DataSource;

public class Customer {

	private String customerId;
	private String name;
	private String address;
	private String phone;

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public static Customer populate(ResultSet rs) throws SQLException {
		Customer c = new Customer();
		c.address = rs.getString("address");
		c.customerId = rs.getString("id");
		c.name = rs.getString("name");
		c.phone = rs.getString("contact");

		return (c);
	}

}
