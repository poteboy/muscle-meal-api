import { Router, Request, Response, NextFunction } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  // TODO 認証機能実装
  next();
};
