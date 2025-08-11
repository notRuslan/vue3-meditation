import { ResponseStatus } from '@/interfaces/responses/CommonResponse.ts';
import type { ProfileAllData } from '@/interfaces/profile.interface.ts';

export interface ILoginResponseSuccess {
  status: ResponseStatus.Success;
  message?: string;
  data: {
    token: string;
    user: ProfileAllData;
  };
}

export interface ILoginResponseFailed {
  status: ResponseStatus.Failed;
  message: string;
}
