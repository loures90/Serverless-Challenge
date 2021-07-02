import express from "express";
import { EmployeerBusiness } from "../business/employeeBusiness";
import { EmployeerController } from "../controler/employee";
import { EmployeerDatabase } from "../data/EmployeerDataBase";
import { IdGenerator } from "../services/idGenerator";

export const employeeRouter = express.Router();
const idGenerator = new IdGenerator()
const employerDataBase = new EmployeerDatabase()
const employeerBusiness = new EmployeerBusiness(employerDataBase, idGenerator)
const employeerController = new EmployeerController()

employeeRouter.get('/', employeerController.getEmployees)
employeeRouter.get('/:id', employeerController.getEmployeeById)
employeeRouter.post('/', employeerController.createEmployee)
employeeRouter.patch('/:id', employeerController.updateEmployee)
employeeRouter.delete('/:id', employeerController.deleteEmployee)


