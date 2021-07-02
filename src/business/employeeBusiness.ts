import { employeerDatabase, EmployeerDatabase } from "../data/EmployeerDataBase"
import { Employee } from "../model/employee";
import { idGenerator, IdGenerator } from "../services/idGenerator";

export class EmployeerBusiness {
    constructor(
        private employeerDatabase: EmployeerDatabase,
        private idGenerat: IdGenerator
    ) { }
    public async getEmployees() {
        try {
            return await this.employeerDatabase.getEmployees()
        } catch (error) {
            throw error
        }
    }
    public async getEmployeeById(id: string): Promise<Employee> {
        try {
            if (!id)
                throw new Error("Invalid input");
            const result = await this.employeerDatabase.getEmployeeById(id)
            if(!result.length)
                throw new Error("Not found");
            return result[0]
        } catch (error) {
            throw error
        }
    }
    public async createEmployee(name: string, age: number, position: string): Promise<void> {
        try {
            if (!name || !age || !position)
                throw new Error("Please, Insert valid values");
            const id: string = this.idGenerat.generate()
            await this.employeerDatabase.createEmployee(id, name, age, position)
        } catch (error) {
            throw error
        }
    }
    public async updateEmployee(id: string, name: string, age: number, position: string): Promise<void> {
        try {
            if (!id || !name || !age || !position)
                throw new Error("Please, Insert valid values");
            await this.getEmployeeById(id)
            await this.employeerDatabase.updateEmployee(id,name, age, position)
        } catch (error) {
            throw error;
        }
    }
    public async deleteEmployee(id:string) {
        try {
            if(!id) throw new Error("Invalid input")
            await this.getEmployeeById(id)
            await this.employeerDatabase.deleteEmployee(id)
        } catch (error) {
            throw error;
        }
    }
}
export const employeeBusiness = new EmployeerBusiness(employeerDatabase, idGenerator)
