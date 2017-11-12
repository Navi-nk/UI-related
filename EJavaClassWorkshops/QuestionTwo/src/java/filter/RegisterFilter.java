/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package filter;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import javax.json.Json;
import javax.json.JsonObjectBuilder;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Navi-PC
 */
@WebFilter("/app/register/*")
public class RegisterFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        String userAgent = ((HttpServletRequest) request).getHeader("user-agent");
        System.out.println(userAgent);
        String loginURL = ((HttpServletRequest) request).getContextPath() + "/faces/index.xhtml";
        //chain.doFilter(request, response);
        //System.out.println(loginURL);
        if(userAgent.contains("Mobile")){
            JsonObjectBuilder builder = Json.createObjectBuilder();
            builder.add("username", "");
            builder.add("email", "");
            builder.add("gender", "");
            PrintWriter out = ((HttpServletResponse)response).getWriter();
            ((HttpServletResponse)response).setContentType("application/json");
            out.print(builder.build());
            out.close();
        }
        else
            ((HttpServletResponse)response).sendRedirect(loginURL); 
    }

    @Override
    public void destroy() {
    }
    
}
