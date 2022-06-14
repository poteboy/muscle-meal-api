import { PrismaClient } from "@prisma/client";
import { Router, Request, Response, NextFunction } from "express";
import { isAuthenticated } from "../utils/auth";

const prisma = new PrismaClient();
const router = Router();

// GET /auth
router.get("/", isAuthenticated, async (req, res) => {
  res.json({ hello: "world" });
});

export default router;
