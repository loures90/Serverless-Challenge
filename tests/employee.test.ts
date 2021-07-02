import { EmployeerBusiness } from "../src/business/employeeBusiness"
import { EmployeeDataBaseMock, EmployeeDataBaseMockError } from "./mocks/EmployeeDataBaseMock"
import { idGeneratorMock } from "./mocks/idGeneratorMock"

const employeeDataBaseMock = new EmployeeDataBaseMock
const idGenerat = new idGeneratorMock
const employeeBusiness = new EmployeerBusiness(
    employeeDataBaseMock,
    idGenerat
)

const employeeDataBaseMockError = new EmployeeDataBaseMockError()
const employeeBusinessError = new EmployeerBusiness(
    employeeDataBaseMockError,
    idGenerat
)

describe("EMPLOYEE", () => {
    describe("get all employees", () => {
        it("Should return all Employees", async () => {
            expect.assertions(4)
            const res = await employeeBusiness.getEmployees()
            expect(res[0].getId()).toBe("abc123")
            expect(res[0].getName()).toBe("name")
            expect(res[0].getAge()).toBe(22)
            expect(res[0].getPosition()).toBe("programador")
        })
        it("Should return some error in database requirement", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusinessError.getEmployees()
            } catch (error) {
                expect(error.message).toBe("database Error")
            }
        })
    })
    describe("get employees by id", () => {
        it("if id does not exist it should return an error 404", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.getEmployeeById("xxxxxx")
            } catch (err) {
                expect(err.message).toBe("Not Found")
            }
        })
        it("if id is empty it should return an error 404", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.getEmployeeById("")
            } catch (err) {
                expect(err.message).toBe("Invalid input")
            }
        })
        it("if id exist it should return an employee", async () => {
            expect.assertions(4)
            const res = await employeeBusiness.getEmployeeById("abc123")
            expect(res.getId()).toBe("abc123")
            expect(res.getName()).toBe("name")
            expect(res.getAge()).toBe(22)
            expect(res.getPosition()).toBe("programador")
        })
        it("Should return some error in database requirement", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusinessError.getEmployeeById("abc123")
            } catch (error) {
                expect(error.message).toBe("database Error")
            }
        })
    })
    describe("create a new employee", () => {
        it("if name does not exist return error", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.createEmployee("", 22, "programador")
            } catch (err) {
                expect(err.message).toBe("Please, Insert valid values")
            }
        })
        it("if age does not exist return error", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.createEmployee("name", 0, "programador")
            } catch (err) {
                expect(err.message).toBe("Please, Insert valid values")
            }
        })
        it("if position does not exist return error", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.createEmployee("name", 22, "")
            } catch (err) {
                expect(err.message).toBe("Please, Insert valid values")
            }
        })
        it("it should create a user and return empty", async () => {
            expect.assertions(1)
            const res = await employeeBusiness.createEmployee("name", 22, "programador")
            expect(res).toBe(undefined)

        })
        it("Should return some error in database requirement", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusinessError.createEmployee("name", 22, "programador")
            } catch (error) {
                expect(error.message).toBe("database Error")
            }
        })
    })
    describe("update a new employee", () => {
        it("it should return an error if id does not exist", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.updateEmployee("xxxxx", "name", 22, "programador")
            } catch (err) {
                expect(err.message).toBe("Not Found")
            }
        })
        it("it should return an error if name is empty", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.updateEmployee("abc123", "", 22, "programador")
            } catch (err) {
                expect(err.message).toBe("Please, Insert valid values")
            }
        })
        it("it should return an error if age is empty", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.updateEmployee("abc123", "name", 0, "programador")
            } catch (err) {
                expect(err.message).toBe("Please, Insert valid values")
            }
        })
        it("it should return an error if position is empty", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.updateEmployee("abc123", "name", 22, "")
            } catch (err) {
                expect(err.message).toBe("Please, Insert valid values")
            }
        })
        it("it should return an error if id is empty", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.updateEmployee("", "name", 22, "Programador")
            } catch (err) {
                expect(err.message).toBe("Please, Insert valid values")
            }
        })
        it("it should update a Employee and return empty", async () => {
            expect.assertions(1)
            const res = await employeeBusiness.updateEmployee("abc123", "name", 22, "Programador")
            expect(res).toBe(undefined)
        })
        it("Should return some error in database requirement", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusinessError.updateEmployee("abc123", "name", 22, "Programador")
            } catch (error) {
                expect(error.message).toBe("database Error")
            }
        })
    })
    describe("delete a employee", () => {
        it("it should return an error if id does not exist", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.deleteEmployee("xxxxx")
            } catch (err) {
                expect(err.message).toBe("Not Found")
            }
        })
        it("it should return an error if id is empty", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusiness.deleteEmployee("")
            } catch (err) {
                expect(err.message).toBe("Invalid input")
            }
        })
        it("it should delete a Employee and return empty", async () => {
            expect.assertions(1)
            const res = await employeeBusiness.deleteEmployee("abc123")
            expect(res).toBe(undefined)
        })
        it("Should return some error in database requirement", async () => {
            expect.assertions(1)
            try {
                const res = await employeeBusinessError.deleteEmployee("abc123")
            } catch (error) {
                expect(error.message).toBe("database Error")
            }
        })
    })
})