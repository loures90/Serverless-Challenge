import { EmployeerDatabase } from "../../src/data/EmployeerDataBase";
import { Employee } from "../../src/model/employee";

export const normalEmployee = new Employee("abc123", "name", 22, "programador")

export class EmployeeDataBaseMock extends EmployeerDatabase {
    public async getEmployees(): Promise<Array<Employee>> {
        return [normalEmployee]
    }
    public async getEmployeeById(id: string): Promise<any> {
        if (id != "abc123")
            throw new Error("Not Found");
        return normalEmployee
    }
    public async createEmployee(id:string, name: string, age: number, position: string):Promise<any> {
        return 
    }
    public async updateEmployee(id: string, name: string, age: number, position: string): Promise<void> {
        return
    }
    public async deleteEmployee() {
        return
    }
}

export class EmployeeDataBaseMockError extends EmployeerDatabase {
    public async getEmployees(): Promise<Array<Employee>> {
        throw new Error("database Error");
    }
    public async getEmployeeById(id: string): Promise<any> {
        throw new Error("database Error");
    }
    public async createEmployee(id:string, name: string, age: number, position: string):Promise<any> {
        throw new Error("database Error");
    }
    public async updateEmployee(id: string, name: string, age: number, position: string): Promise<void> {
        throw new Error("database Error");
    }
    public async deleteEmployee() {
        throw new Error("database Error");
    }
}