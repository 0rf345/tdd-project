import { add } from './functions';
import { ronSwanson } from './functions';
import axios from 'axios';

jest.mock('axios');

describe('Ron Swanson Quotes', () => {
  let mockAxios = jest.fn();
  //mockAxios.get.mockImplementation((url) => Promise.resolve({ data: Array('Query')}));

  axios.get.mockImplementation((url) => Promise.resolve({ data: Array('Quote')}));

  it('uses correct url', () => {
    ronSwanson(axios)
      .then(res => {
        expect(axios.get.toBeCalledWith('https://ron-swanson-quotes.herokuapp.com/v2/quotes'));
      })
  })

  it('handles correct response', () => {
    ronSwanson(axios)
      .then(res => {
        expect(res[0]).toBe('Quote');
      })
  })
})

describe('Add function', () => {
  it('returns null if there are not enough arguments', () => {
    expect(add()).toBe(null);
  })
  
  it('returns null if an argument is null', () => {
    expect(add(null)).toBe(null);
  })
  
  it('can perform basic addition', () => {
    expect(add(1, 1)).toBe(2);
  })

  describe('Complex addition', () => {
    it('can add positive and negative numbers', () => {
      expect(add(1, -6)).toBe(-5);
    })

    it('can add negative numbers', () => {
      expect(add(-2, -6)).toBe(-8);
    })
  })

  describe('Array addition', () => {
    it('can add any number of numbers', () => {
      expect(add(1,2,3)).toBe(6);
    })
    
    it('can add arrays of numbers', () => {
      expect(add([1,2,3])).toBe(6);
    })

    it('can add arrays to other arrays', () => {
      expect(add([1,2,3], [4,5,6])).toBe(21);
    })
    
    it('can add arrays of arrays', () => {
      expect(add([[1,2,3],4], [1,2,3])).toBe(16);
    })
  })
})
