import { NextFunction, Request, Response } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
  const { method, url } = req;
  const timestamp = new Date().toDateString();

  console.log(`${method} ${url} ${timestamp}`);
  next();
}
