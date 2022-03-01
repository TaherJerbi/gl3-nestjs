import { Request, Response } from 'express';
export function logger(req: Request, res: Response, next: () => void) {
  console.log('🚀 logger - REQUEST IP :: ', req.ip);
  console.log('🚀 logger - REQUEST BODY :: ', req.body);
  next();
}
