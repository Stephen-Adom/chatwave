import { ErrorType, notifyError } from '@chatwave/utils';

export const handleError = (error: ErrorType) => {
  if (error.hasOwnProperty('messages') && error?.messages) {
    error.messages.forEach((message) => {
      notifyError(message);
    });
  }

  if (error.hasOwnProperty('message') && error.message) {
    notifyError(error.message);
  }
};
