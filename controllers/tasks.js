import { uid } from "uid";
import localDb from "../local/db.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getTasksController = async (req, res) => {
 const data = localDb.getTodo();

 console.log(data);

 return res
  .status(200)
  .json(ApiResponse(200, data, "Get tasks successfully!", true));
};

export const postTasksController = async (req, res) => {
 const { text, isCompleted } = req.body;

 if (!text) {
  return res
   .status(400)
   .json(ApiResponse(400, {}, "Text field is required!", false));
 }

 const data = {
  id: uid(),
  text,
  isCompleted:
   !isCompleted || typeof isCompleted !== "boolean" ? false : isCompleted,
 };

 localDb.postTodo(data);

 return res
  .status(200)
  .json(ApiResponse(200, data, "Post task successfully!", true));
};

export const deleteTasksController = async (req, res) => {
 const id = req.body.id;

 if (!id) {
  return res
   .status(400)
   .json(ApiResponse(400, {}, "Task ID is required!", false));
 }

 localDb.deleteTodo(id);

 return res
  .status(200)
  .json(ApiResponse(200, {}, "Deleted task successfully!", true));
};
