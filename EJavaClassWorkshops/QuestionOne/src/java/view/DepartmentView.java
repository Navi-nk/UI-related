/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package view;

import bean.GetDepartment;
import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.view.ViewScoped;
import javax.inject.Named;
import model.Department;

/**
 *
 * @author Navi-PC
 */
@Named
@ViewScoped
public class DepartmentView implements Serializable{
    
    private static final long serialVersionUID = 1L;
    
    @EJB
    private GetDepartment getDepartment;
    
    private List<String> departments = new LinkedList<>();
    
    private String selectedDeptmentName;
    
    private Department selectedDepartment;
    
    private List<Department> ds;

    
    @PostConstruct
    private void init() {
         ds = getDepartment.getDepartments();
        ds.forEach(d->{departments.add( d.getName()); });
        
        selectedDepartment = ds.get(0);
        
        System.out.println(departments.size());
        
    }
    
    public List<String> getDepartments() {
        return departments;
    }

    public void setDepartments(List<String> departments) {
        this.departments = departments;
    }

    public Department getSelectedDepartment() {
        return selectedDepartment;
    }

    public void setSelectedDepartment(Department selectedDepartment) {
        this.selectedDepartment = selectedDepartment;
    }

    public String getSelectedDeptmentName() {
        return selectedDeptmentName;
    }
    public void setSelectedDeptmentName(String selectedDeptmentName) {
        this.selectedDeptmentName = selectedDeptmentName;
    }
    
    
    public void refreshEmployees(){
        ds.forEach((d) -> {
            if(d.getName().equals(selectedDeptmentName))
                selectedDepartment = d;
        });
    }
            
    
    
}
