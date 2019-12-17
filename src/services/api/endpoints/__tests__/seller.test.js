import seller from '../seller';
import api from '../../api';

describe('Seller apis', () => {
  beforeEach(() => {
    jest.resetModules(); // this is important - it clears the cache
    jest.clearAllMocks();
  });

  it('Should get All', async () => {
    jest.spyOn(api, 'request').mockImplementation(() => Promise.resolve({ result: [] }));

    const data = await seller.getAll();
    expect(data).toMatchObject({ result: [] });
  });
});
