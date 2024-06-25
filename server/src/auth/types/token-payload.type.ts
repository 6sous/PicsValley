export type PayloadSub = {
  userId: string;
  email: string;
};

export type TokenPayload = {
  sub: PayloadSub;
  iat: number;
  exp: number;
};
