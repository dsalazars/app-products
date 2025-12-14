import { axiosClient } from './axiosClient';

describe('axiosClient', () => {
  it('debe tener la configuración por defecto correcta', () => {
    expect(axiosClient.defaults.baseURL).toBe('https://dummyjson.com/');
    expect(axiosClient.defaults.timeout).toBe(5000);
  });
});
