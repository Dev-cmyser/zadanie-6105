import type { User } from './user.interface';

export interface UserRequest extends Request {
  user: User;
}
