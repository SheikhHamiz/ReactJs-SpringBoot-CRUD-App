import { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import ViewEmployee from "./ViewEmployee";

const ListEmployee = () => {
    const navigate = useNavigate();
    const [employees,setEmployees] = useState([]);
    const editEmployee = (employeeId) => {
        navigate(`add-employee/${employeeId}`)
    }
    const deleteEmployee = (employeeId) => {
        EmployeeService.DeleteEmployee(employeeId).then(() => {
            setEmployees(employees.filter(emp => emp.id !== employeeId));
        });
    }
    const viewEmployee = (employeeId) => {
        navigate(`view-employee/${employeeId}`);
    }
    useEffect(()=>{
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        }).catch(err => console.log(err));
    },[]);
    return(
        <>
        <h2 className="text-center">Employees</h2>
        <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee => 
                            <tr key= {employee.id}>
                                <td key={employee.firstName}>{employee.firstName}</td>
                                <td key={employee.lastName}>{employee.lastName}</td>
                                <td key={employee.email}>{employee.email}</td>
                                <td><button className="btn btn-info" onClick={()=>editEmployee(employee.id)}>Update</button>
                                <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                <button className="btn btn-secondary" onClick={() => viewEmployee(employee.id)}>View</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}
export default ListEmployee;