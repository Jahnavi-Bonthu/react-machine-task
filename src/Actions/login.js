export const login = (loginObj) =>{
    return{
        type:"SIGN_IN",
        payload: loginObj
    }
}
export const logout = () =>{
    return{
        type:"SIGN_OUT"
    }
}

