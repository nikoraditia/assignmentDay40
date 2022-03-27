import { render, screen, act } from '@testing-library/react';
import axios from 'axios';
import GetSection from './view';

// jest.mock('axios');
jest.mock("axios");

const data = {
  id: 1,
  name: "Kue Kering",
  price: 10000,
  stock: 100,
  imageUrl: ""
  }
const errorText = "error";
const mockResponse = {
    data: {
        "data": [
            data
        ]
    }
}

const mockError = {
  data: null,
  message: errorText
}

test('get data', async () => {
  await act(async () => {
    await axios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));
    render(<GetSection />);
  });
  screen.debug();
  const textElement = screen.getByText(data);
  expect(textElement).toBeInTheDocument();
});

test.skip('handle error', async () => {
  await act(async () => {
    await axios.get.mockImplementationOnce(() => Promise.reject(mockError));
    render(<GetSection />);
  });
  const textElement = screen.getByText(errorText);
  expect(textElement).toBeInTheDocument();
});