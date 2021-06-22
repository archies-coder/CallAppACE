import { apiProvider } from "./utils/Provider"

export const getAllData = async () => {
    return await apiProvider.getAll('allData')
}

export const getAllIndividuals = async () => {
    return await apiProvider.getAll('getIndividualCategory')
}
export const getAllGroups = async () => {
    return await apiProvider.getAll('getAllGroupNames')
}

export const doAssignClient = async (mobileNo) => {
    return await apiProvider.post('createIndividualCategory', { mobileNo })
}
export const doAssignClientToGroup = async (mobileNo, groupName) => {
    return await apiProvider.post('createGroupCategory', { mobileNo, groupName })
}