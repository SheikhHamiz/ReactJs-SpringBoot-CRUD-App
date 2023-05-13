package com.example.springbackenddemo.repository;

import com.example.springbackenddemo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
