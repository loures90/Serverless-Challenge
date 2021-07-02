import { EmployeeDataBaseMock } from "../../tests/mocks/EmployeeDataBaseMock";
import connection from "../connection"
import { Employee } from "../model/employee"

export class EmployeerDatabase {
    constructor() {
    }
    public async getEmployees(): Promise<Array<Employee>> {
        try {
            const result = await connection.raw(`
            SELECT * FROM Employees;
            `)
            return result[0]
        } catch (error) {
            throw error ;
        }
    }
    public async getEmployeeById(id: string): Promise<Array<Employee>> {
        try {
            const result = await connection.raw(`
            SELECT * FROM Employees WHERE id= "${id}";
            `)
            return result[0]
        } catch (error) {
            throw error ;
        }
    }
    public async createEmployee(id: string, name:string, age:number, position:string): Promise<void> {
        try {
            await connection.raw(`
            INSERT INTO Employees (id, name, age, position) VALUES ("${id}","${name}","${age}","${position}");
            `)
        } catch (error) {
            throw error ;
        }
    }
    public async updateEmployee(id:string, name:string, age:number, position:string){
        try {
            await connection.raw(`
            UPDATE Employees 
            SET  name="${name}", age=${age}, position="${position}"
            WHERE id = "${id}";
            `)
        } catch (error) {
            throw error ;
        }
    }
    public async deleteEmployee(id:string){
        try {
            await connection.raw(`
            DELETE FROM Employees WHERE id = "${id}";
            `)
        } catch (error) {
            throw error ;
        }
    }
}
export const employeerDatabase = new EmployeerDatabase()
