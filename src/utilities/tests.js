import { act } from '@testing-library/react';

export const waitToFinish = async () => {
  const promise = Promise.resolve();

  await act(async () => {
    await promise;
  });
};
