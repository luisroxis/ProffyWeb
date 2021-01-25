import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proffyback.herokuapp.com/'
})

export default api