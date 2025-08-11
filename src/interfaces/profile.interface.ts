export interface IProfile {
  username: string;
}

export interface ProfileAllData extends IProfile {
  id?: number;
  email: string;
}

export interface IUser extends ProfileAllData {
  email: string;
  id: number;
  last_login_at: Date;
  username: string;
}
