import { apiProvider } from "./utils/Provider";

export async function getAllCallLogs(mobileNo) {
    return await apiProvider.getAll('getCallLogs', [{ name: 'mobileNo', value: mobileNo || '8333022040' }])
}