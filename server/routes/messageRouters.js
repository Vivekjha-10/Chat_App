import express from "express";
import { protectRoute } from "../middleware/auth";
import { getMessages, getUserForSidebar, markMessageAsSeen, sendMessage } from "../controllers/messageController";

const messagRouter = express.Router();

messagRouter.get("/users", protectRoute, getUserForSidebar);
messagRouter.get("/:id", protectRoute, getMessages);
messagRouter.put("mark/:id", protectRoute, markMessageAsSeen);
messagRouter.post("/send/:id", protectRoute, sendMessage);

export default messagRouter;