export interface ILoginFormData {
  userId: string;
  nickname: string | undefined;
  avatar: string | null;
}

export interface ILoginResponseData {
  success: boolean;
  csrf_token: string;
  nick_name: string;
  session_id: string;
  avatar: string;
}

export interface IAvatarData {
  avatar1: boolean;
  avatar2: boolean;
  avatar3: boolean;
  avatar4: boolean;
}
