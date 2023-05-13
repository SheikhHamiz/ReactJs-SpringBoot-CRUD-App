import axios from 'axios';
const EMPLOYEE_BASE_URL = "http://localhost:8080/api/employees"
class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_BASE_URL);
    }
    createEmployee(employee) {
        return axios.post(EMPLOYEE_BASE_URL,employee)
    }
    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_BASE_URL+'/'+employeeId);
    }
    updateEmployee(employeeId,employee) {
        return axios.put(EMPLOYEE_BASE_URL+'/'+employeeId,employee);
    }
    DeleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_BASE_URL+'/'+employeeId);
    }
}
export default new EmployeeService();