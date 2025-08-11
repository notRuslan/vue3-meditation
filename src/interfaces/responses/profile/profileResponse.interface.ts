import type { ResponseStatus } from '@/interfaces/responses/CommonResponse.ts';
import type { IUser } from '@/interfaces/profile.interface.ts';

export interface IProfileResponse {
  status: ResponseStatus;
  data: {
    user: IUser;
  };
}
