/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package view;

import bean.CreateBean;
import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;
import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;
import model.Department;
import model.Employee;

/**
 *
 * @author Navi-PC
 */

@ViewScoped
@Named
public class DepartmentAddView implements Serializable{
    
    private static final long serialVersionUID = 1L;
    @EJB
    private CreateBean bean;
    
    private Employee e = new Employee();
     
    private Department d = new Department();
    
    private List<Employee> employees = new LinkedList<>() ;
    
    private Boolean isHead;

    public Employee getE() {
        return e;
    }

    public void setE(Employee e) {
        this.e = e;
    }

    public Department getD() {
        return d;
    }

    public void setD(Department d) {
        this.d = d;
    }

    public Boolean getIsHead() {
        return isHead;
    }

    public void setIsHead(Boolean isHead) {
        this.isHead = isHead;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }
    
    
    
    public void addEmployee(){        
        if(isHead)
            d.setDeptHead(e);
        e.setDept(d);
        employees.add(e);
        e = new Employee();
        isHead = false;
    }
    

    public String addDepartment(){
        if(!employees.isEmpty()){
            System.out.println("view.DepartmentAddView.addDepartment()");
            bean.createDepartment(d,employees);
            return ("department");
        }
        return null;
    }  
    
}
