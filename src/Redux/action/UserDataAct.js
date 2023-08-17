export const UserDataAct = (newUser) => {
    return{type:'userAdd',newUser}
}
export const UserDataActClear = () => {
    return{type:'clearUsers'}
}