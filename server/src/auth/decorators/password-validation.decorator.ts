import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function ContainsNumber(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'containsNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && /(?=.*[0-9])/.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must contain at least one number`;
        },
      },
    });
  };
}

export function ContainsLowercase(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'containsLowercase',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && /(?=.*[a-z])/.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must contain at least one lowercase letter`;
        },
      },
    });
  };
}

export function ContainsUppercase(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'containsUppercase',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && /(?=.*[A-Z])/.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must contain at least one uppercase letter`;
        },
      },
    });
  };
}

export function ContainsSpecialCharacter(
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'containsSpecialCharacter',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && /(?=.*[!@#$%^&*])/.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must contain at least one special character (!@#$%^&*)`;
        },
      },
    });
  };
}
