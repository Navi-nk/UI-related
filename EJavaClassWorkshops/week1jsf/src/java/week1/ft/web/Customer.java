package week1.ft.web;

import java.sql.ResultSet;
import java.sql.SQLException;
import javax.annotation.Resource;
import javax.sql.DataSource;

public class Customer {

	private String customerId;
	private String tname;

    public String getTname() {
        return tname;
    }

    public void setTname(String tname) {
        this.tname = tname;
    }

   

  

	private String address;
	private String phone;

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
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
		c.tName = rs.getString("name");
		c.phone = rs.getString("contact");

		return (c);
	}

}
