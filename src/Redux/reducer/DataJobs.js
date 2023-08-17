export const DataJobs = (state=null,action) => {
    switch(action.type){
        case 'setData':return state = action.payload
        case 'filteredData':return state = action.newData
        case 'reverseTime':return state = action.timeReverse
        case 'clearData':return state = action.payload
        default:return state
    }
}

export const DefaultDataForFilters = (state=null,action) => {
    switch(action.type){
        case 'defaultData':return state = action.payload
        default:return state
    }
}