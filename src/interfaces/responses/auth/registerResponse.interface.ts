import type { ProfileAllData } from '@/interfaces/profile.interface.ts';
import { ResponseStatus } from '@/interfaces/responses/CommonResponse.ts';

export interface IResponseSuccess {
  status: ResponseStatus.Success;
  message?: string;
  data: ProfileAllData;
}

export interface IResponseFailed {
  status: ResponseStatus.Failed;
  message: string;
}
