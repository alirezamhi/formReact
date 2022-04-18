export const ValueData = (data) => {
    const errorMassage = {};
    if(!data.name.trim()){
        errorMassage.name ="Username required"
    }else{
        delete errorMassage.name
    }

    if(!data.email){
        errorMassage.email ="email required"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        errorMassage.email = "email address invalid"
    }else{
        delete errorMassage.email
    }

    if(!data.password){
        errorMassage.password = "password required"
    }else if (data.password.length < 6){
        errorMassage.password = "password to be 6 character or more"
    }else{
        delete errorMassage.password
    }

    if(!data.confirmpasswor){
        errorMassage.confirmpasswor = "Confirm the password"
    }else if(data.confirmpasswor !== data.password){
        errorMassage.confirmpasswor = "password do not match"
    }else{
        delete errorMassage.confirmpasswor
    }

    if (data.isAccept){
        delete errorMassage.isAccept 
    }else{
        errorMassage.isAccept = "Accept our regulation"
    }

    return errorMassage
}
