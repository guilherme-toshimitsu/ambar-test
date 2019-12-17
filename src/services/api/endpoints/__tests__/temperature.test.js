import temperature from '../temperature';
import api from '../../api';

describe('temperature apis', () => {
  beforeEach(() => {
    jest.resetModules(); // this is important - it clears the cache
    jest.clearAllMocks();
  });

  it('Should get temperature by cord', async () => {
    jest.spyOn(api, 'request').mockImplementation(() => Promise.resolve({ result: [] }));

    const data = await temperature.getByCord();
    expect(data).toMatchObject({ result: [] });
  });
});
