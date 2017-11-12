/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package view;

import java.io.Serializable;
import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.inject.Named;

/**
 *
 * @author Navi-PC
 */
@RequestScoped
@Named
public class ProcessManager implements Serializable{
    
    private static final long serialVersionUID = 1L;
    
    @Inject
    private NewUser newUser;
    
    public String proceed(){
        
        System.out.println(newUser.getLogin()+"-"+newUser.getGender()+"-"+newUser.getEmail());
        return null;
    }
    
}
