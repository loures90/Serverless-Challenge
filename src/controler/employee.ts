import { Request, Response } from 'express';
import { employeeBusiness } from '../business/employeeBusiness';


export class EmployeerController {
    public async getEmployees(req: Request, res: Response) {
        try {
            const result = await employeeBusiness.getEmployees()
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    public async getEmployeeById(req: Request, res: Response) {
        try {
            const id:string = req.params.id
            const result = await employeeBusiness.getEmployeeById(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    public async createEmployee(req: Request, res: Response) {
        try {
            const {name, age, position} = req.body
            const result = await employeeBusiness.createEmployee(name, age, position)
            res.status(200).send("SUCCESS")
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    public async updateEmployee(req: Request, res: Response){
        try {
            const {name, age, position} = req.body
            const id = req.params.id
            await employeeBusiness.updateEmployee(id,name, age, position)
            res.status(200).send("SUCCESS")
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
    public async deleteEmployee(req: Request, res: Response){
        try {
            const id:string = req.params.id
            const result = await employeeBusiness.deleteEmployee(id)
            res.status(200).send("SUCCESS")
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}