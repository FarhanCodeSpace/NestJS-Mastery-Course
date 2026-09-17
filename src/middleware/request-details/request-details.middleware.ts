import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export function RequestDetailsMiddleware(
  req: Request,
  res: Response,
  next: () => void,
) {
  const { method, url, body, headers } = req;

  const requestData = {
    method,
    url,
    body,
    userAgent: headers['user-agent'],
    contentType: headers['content-type'],
  };

  res.json(requestData);
  next();
}
