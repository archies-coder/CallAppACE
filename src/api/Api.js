import axios from "axios"

export const serverUrl =
    process.env.REACT_APP_SERVER_URL ||
    'https://call-deploy-proj.herokuapp.com'

// let userData

// if (localStorage.getItem('userData')) {
//     console.log(localStorage.getItem('userData'))
//     userData = getUserData()
// }

const userData = {
    token: ''
}
export const apis = axios.create({
    baseURL: serverUrl,
    timeout: 10000,
    params: {
        //@ts-ignore
        // token: token || '',
    },
    headers: { Authorization: userData && userData.token ? `Bearer ${userData.token}` : '' }
})