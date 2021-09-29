export type Input = {
  type: InputTypes;
  name: 'username' | 'password';
  placeholder: string;
};

export type InputTypes = 'text' | 'password';
