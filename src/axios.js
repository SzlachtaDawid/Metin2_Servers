import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://metin2servers-1f340-default-rtdb.europe-west1.firebasedatabase.app'
})

export default instance;