import React  , {useState , useEffect} from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ValueData } from './ValueData';
import {notify} from './tost';
import Style from './SignUp.module.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [data , setData] = useState({
        email:"",
        password :"",
    });

    const [error , setError] = useState({});
    const [touch , setTouch] = useState({});
    
    useEffect( ()=>{
        setError(ValueData(data , "login"))
    } , [data , touch]);

    const changeHandler = (event) =>{
        setData({...data , [event.target.name] : event.target.value})
     
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
                email:true,
                password :true,
            })
            notify("invalid data" , "error")
        }
    };


    return (
        <div>
            <div className={Style.container}>
                <form autoComplete='off' onSubmit={submitHandler} className={Style.formcontainer}>
                    <h2 className={Style.header}>Loggin</h2>
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
                    <div className={Style.formbutton}>
                        <Link to="/signup" className={Style.linkclass}>Sing Up</Link>
                        <button type='submit'>Loggin</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;