import { NextFunction, Request, Response } from 'express';

export function ConvertMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.body && typeof req.body === 'object') {
    res.status(200).json({ body: req.body });
    return;
  }

  next();
}
