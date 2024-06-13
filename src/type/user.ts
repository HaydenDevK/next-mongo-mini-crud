export type TUser = {
  _id: string;
  name: string;
  email: string;
};

export type TFetchUserAll = () => Promise<TUser[]>;

export type TAddUserFormState = {
  success: boolean;
  message: string;
};
