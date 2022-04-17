import React , { useState } from 'react';

const signUp = () => {
    
    const [data , setData] = useState({
        name:"",
        email:"",
        password :"",
        confirmpasswor:"",
        isAccept: false
    });

    const changeHandler = (event) =>{
        if(event.target.name === "isAccept"){
            setData({...data , [event.target.name]:event.target.value})
        }else{
            setData({...data , [event.target.name] : event.target.value})
        }
    }

    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='name' id='name' value={data.name} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor='email'>email</label>
                    <input type="email" name='email' id='email' value={data.email} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor='pasword'>pasword</label>
                    <input type="password" name='pasword' id='pasword' value={data.pasword} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor='confirmpassword'>confirmpasswor</label>
                    <input type="password" name='confirmpassword' id='confirmpassword' value={data.confirmpassword} onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor='isAccept'>I accept term of private police</label>
                    <input type="checkbox" name='isAccept' id='isAccept' value={data.isAccept} onChange={changeHandler}/>
                </div>
                <div>
                    <a href='#'>Loggin</a>
                    <button type='submit'>Sing Up</button>
                </div>
            </form>
        </div>
    );
};

export default signUp;