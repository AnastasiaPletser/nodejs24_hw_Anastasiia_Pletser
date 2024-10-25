import { Document } from 'mongoose';

export interface File extends Document {
  name: string;
  type: string;
  size: number;
  createdAt: Date;
}
