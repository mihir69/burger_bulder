import axios from 'axios'

const Instance = axios.create({
    baseURL:'https://myburger-2020.firebaseio.com/'
});

export default Instance