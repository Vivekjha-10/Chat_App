import express from "express";
import { protectRoute } from "../middleware/auth";
import { getMessages, getUserForSidebar, markMessageAsSeen } from "../controllers/messageController";

const messagRouter = express.Router();

messagRouter.get("/users", protectRoute, getUserForSidebar);
messagRouter.get("/:id", protectRoute, getMessages);
messagRouter.get("mark/:id", protectRoute, markMessageAsSeen);

export default messagRouter;