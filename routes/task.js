import { Router } from "express";
import {
 deleteTasksController,
 getTasksController,
 postTasksController,
} from "../controllers/tasks.js";

const taskRouter = Router();

taskRouter.get("/", getTasksController);
taskRouter.post("/", postTasksController);
taskRouter.delete("/", deleteTasksController);

export default taskRouter;
