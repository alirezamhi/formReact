import React , {useState , useEffect} from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ValueData } from './ValueData';
import {notify} from './tost';
import Style from './SignUp.module.css';
import { Link } from 'react-router-dom';


const SignUp = () => {
    
    const [data , setData] = useState({
        name:"",
        email:"",
        password :"",
        confirmpasswor:"",
        isAccept: false,
    });

    const [error , setError] = useState({});
    const [touch , setTouch] = useState({});

    useEffect( ()=>{
        setError(ValueData(data , "signin"))
    } , [data , touch]);

    const changeHandler = (event) =>{
        if(event.target.name === "isAccept"){
            setData({...data , "isAccept" : event.target.checked})
        }else{
            setData({...data , [event.target.name] : event.target.value})
        }
    };

    const bulerHandler = (event) => {
        setTouch({...touch , [event.target.name] : true})
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if(!Object.keys(error).length){
            notify("You signe in successfully" , "success")
        }else{
            setTouch({
                name:true,
                email:true,
                password :true,
                confirmpasswor:true,
                isAccept: true,
            })
            notify("invalid data" , "error")
        }
    };

    
    
    return (
        <div className={Style.container}>
            <form autoComplete='off' onSubmit={submitHandler} className={Style.formcontainer}>
                 <h2 className={Style.header}>SignUp</h2>
                 <div className={Style.formfield}>
                     <label htmlFor='name'>Name</label>
                     <input type="text" name='name' id='name' value={data.name} onChange={changeHandler} onBlur={bulerHandler} className={error.name && touch.name && Style.uncompleted}/>
                     {error.name && touch.name && <span>{error.name}</span>}
                 </div>
                 <div className={Style.formfield}>
                    <label htmlFor='email'>email</label>
                    <input type="email" name='email' id='email' value={data.email} onChange={changeHandler} onBlur={bulerHandler} className={error.email && touch.email && Style.uncompleted}/>
                    {error.email && touch.email && <span>{error.email}</span>}
                </div>
                <div className={Style.formfield}>
                    <label htmlFor='pasword'>pasword</label>
                    <input type="password" name='password' id='pasword' value={data.password} onChange={changeHandler} onBlur={bulerHandler} className={error.password && touch.password && Style.uncompleted}/>
                    {error.password && touch.password && <span>{error.password}</span>}
                </div>
                <div className={Style.formfield}>
                    <label htmlFor='confirmpassword'>confirmpasswor</label>
                    <input type="password" name='confirmpasswor' id='confirmpassword' value={data.confirmpasswor} onChange={changeHandler} onBlur={bulerHandler} className={error.confirmpasswor && touch.confirmpasswor && Style.uncompleted}/>
                    {error.confirmpasswor && touch.confirmpasswor && <span>{error.confirmpasswor}</span>}
                </div>
                <div className={Style.containercheked}>
                    <div className={Style.checked}>
                        <label htmlFor='isAccept'>I accept term of private police</label>
                        <input type="checkbox" name='isAccept' id='isAccept' value={data.isAccept} onChange={changeHandler} onBlur={bulerHandler}/>
                    </div>
                    {error.isAccept && touch.isAccept && <span>{error.isAccept}</span>}
                </div>
                <div className={Style.formbutton}>
                    <Link to="/login" className={Style.linkclass}>Loggin</Link>
                    <button type='submit'>Sing Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;