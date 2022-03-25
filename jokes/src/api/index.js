import axios from 'axios';

const url = 'https://api.sampleapis.com/jokes/goodJokes'

export const fetchJokes = () => axios.get(url);