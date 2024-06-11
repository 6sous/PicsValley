export type FieldError = {
  field: string;
  errors: string[];
};

export type ActionErrorResponse = {
  message: FieldError[];
  error?: string;
  statusCode?: number;
};
