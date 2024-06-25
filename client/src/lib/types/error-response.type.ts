export type Error = {
  rule: string;
  errorMessage: string;
};

export type FieldError = {
  field: string;
  errors: Error[];
};

export type ActionErrorResponse = {
  message: FieldError[];
  error?: string;
  statusCode?: number;
};
