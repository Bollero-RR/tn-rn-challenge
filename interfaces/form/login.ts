export type Form = {
  username: string;
  password: string;
};

export type Input = {
  type: string;
  name: 'username' | 'password';
  placeholder: string;
};
