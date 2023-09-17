
const ValidatePassword =(password,setValidate)=>{
    if(password.match(/\d+/g)){
        setValidate((o)=>({...o,hasNum:true}))
    }else{
        setValidate((o)=>({...o,hasNum:false}))
    }

     if(password.match(/[a-z]+/g)){
        setValidate((o)=>({...o,hasLow:true}))
    }else{
        setValidate((o)=>({...o,hasLow:false}))
    }

     if(password.match(/[A-Z]+/g)){
        setValidate((o)=>({...o,hasCap:true}))
    }else{
        setValidate((o)=>({...o,hasCap:false}))
    }


     if(password.length>7){
        setValidate((o)=>({...o,has8digit:true}))
    }else{
        setValidate((o)=>({...o,has8digit:false}))
    }


     if(password.match(/[^a-zA-Z0-9]/g)){
        setValidate((o)=>({...o,hasChar:true}))
    }else{
        setValidate((o)=>({...o,hasChar:false}))
    }
}

export default ValidatePassword;