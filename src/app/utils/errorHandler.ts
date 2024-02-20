import { ErrorType, notifyError } from '@chatwave/utils';

export const handleError = (error: ErrorType) => {
  error.messages.forEach((message) => {
    notifyError(message);
  });
};
