package model;

import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import model.Employee;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-11-12T16:11:29")
@StaticMetamodel(Department.class)
public class Department_ { 

    public static volatile SingularAttribute<Department, String> deptId;
    public static volatile SingularAttribute<Department, String> name;
    public static volatile CollectionAttribute<Department, Employee> employeeCollection;
    public static volatile SingularAttribute<Department, Employee> deptHead;

}