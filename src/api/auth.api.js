import { apiProvider } from "./utils/Provider"


export async function registerAdmin(data) {
    try {
        const resp = await apiProvider.post('adminDetails', data)
        console.log(resp)
        return resp
    } catch (error) {
        console.log(error)
    }
}
export async function loginAdmin(data) {
    try {
        const resp = await apiProvider.post('login', data)
        console.log(resp)
        return resp
    } catch (error) {
        console.log(error)
    }
}

export async function requestOTP(mobileNo) {
    return await apiProvider.getSingle('otp', mobileNo)
}

export async function verifyOTP(mobileNo, otp) {
    return await apiProvider.post('otp', )
}