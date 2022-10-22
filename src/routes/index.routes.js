import { Router } from "express";
import {
  renderTasks,
  createTask,
  renderEditTask,
  editTask,
  deleteTask,
  editToggle,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/edit/:id", renderEditTask);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", editToggle);

export default router;
