export const UserData = (state=null,action) => {
    switch(action.type){
case 'userAdd':return state=action.newUser
case 'clearUser':return state = null
default:return state
    }
}