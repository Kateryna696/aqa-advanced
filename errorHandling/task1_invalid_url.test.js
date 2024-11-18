import { sendInvalidRequest } from './task1_invalid_url.js';

describe('sendInvalidRequest', () => {
  it('Return correcct message about wrong Url', async () => {
    const errorMessage = await sendInvalidRequest();
    expect(errorMessage).toMatch(/Error:/);
  });
});
