import axios from "axios";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes"

const options = {
  params: {
    maxResults: '50',
    maxResults: '10',
    part: 'snippet'
  },
  headers: {
    'key': process.env.REACT_APP_PUBLIC_KEY,
  }
};


export const ApiService = {
  async fetching(q) {
    const data = await axios.get(`${BASE_URL}?q=${q}`, options)
    return data.data
  }
}