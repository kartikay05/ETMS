import React, { useState }  from 'react';

const Login = ({handleLogin}) => {
    const style1 = 'text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl m-2 rounded-full placeholder:text-gray-400';

   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        
        handleLogin(email, password);
        setEmail("");
        setPassword('');
    }
    
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 py-20 px-10'>
                <h2 className='text-center mb-2 text-2xl'>Login</h2>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                      }
                    }
                    className='flex flex-col items-center justify-center'>
                    
                    <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }
                }
                    className={style1} type="email" name="email" id="email" placeholder='Enter your Email' autoComplete="on" required 
                    />
                    <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }
                }
                    className={style1} type="password" name="pwd" id="pwd" placeholder='Enter your Password' required 
                    />
                    <button className='text-white mt-4 bg-emerald-600 border-none py-3 px-5 text-xl m-2 rounded-full' id='btn' type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;