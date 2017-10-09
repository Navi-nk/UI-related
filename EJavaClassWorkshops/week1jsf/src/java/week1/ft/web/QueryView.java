package week1.ft.web;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.annotation.Resource;
import javax.enterprise.context.RequestScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.sql.DataSource;

@RequestScoped
@Named
public class QueryView {

	private static final String FIND_BY_CUSTID = "select * from user where id = ?";

	@Resource(lookup = "jdbc/pheonixDBPool")
	private DataSource ds;

	private Customer customer = null;
	private String queryId;

	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getQueryId() {
		return queryId;
	}
	public void setQueryId(String queryId) {
		this.queryId = queryId;
	}

	public void query() {

		if (queryId == null)
			return;

		try (Connection conn = ds.getConnection()) {

			PreparedStatement ps = conn.prepareStatement(FIND_BY_CUSTID);
			ps.setString(1, queryId);
			ResultSet rs = ps.executeQuery();

			if (!rs.next()) {
				customer = null;
				FacesMessage msg = new FacesMessage("Customer not found");
				FacesContext.getCurrentInstance().addMessage(null, msg);
				return;
			}

			customer = Customer.populate(rs);

		} catch(SQLException ex) {
			ex.printStackTrace();
		}

	}

	
}
