export const DataJobsAct = (payload) => {
    return {type:'setData',payload}
}
export const DataJobsActFilteredData = (newData) => {
    return {type:'filteredData',newData}
}
export const DataJobsTimeReverse = (timeReverse) => {
    return {type:'reverseTime',timeReverse}
}
export const DefaultDataAct = (payload) => {
    return {type:'defaultData',payload}
}