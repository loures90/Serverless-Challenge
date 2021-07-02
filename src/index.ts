import app from "./data/baseDatabase";
import { employeeRouter } from "./router/employeeRouter";

app.use('/employee', employeeRouter)