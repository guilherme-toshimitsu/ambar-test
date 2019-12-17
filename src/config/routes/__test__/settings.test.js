import settings from '../settings';

describe('Settings', () => {
  it('Should get All', () => {
    const data = settings.authenticated();
    expect(data).toBe(true);
  });
});
