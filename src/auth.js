import React, {useState} from "react";

const SignInPage = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Invalid credentials');
        }
      })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data)); // Save user data to local storage
        window.location.href = '/profile'; // Redirect to profile page
      })
      .catch((error) => {
        setError(error.message);
      });
  };
    return (
        <div className="main-container">
            <div className="signup-container">
                <div className="inner-container">
                    <div className="welcome"><span className="welcome-text">Welcome back!</span> 👋</div>
                    <div className="sign-in-account">Sign in to your Account</div>
                    <div className="form-container">
                        <form onSubmit={handleLogin}>
                            <div className="form-inner-container">
                            <div className="email">
                                <label htmlFor="username" className="form-label">Your email</label>
                                <input 
                                type="text" 
                                id="username" 
                                name="username"  
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="password">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                type="password" 
                                id="password" 
                                name="password" value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            
                            <div className="btn-container">
                            <button type="submit" className="continue-CTA">
                                <div className="btn-label">CONTINUE</div>
                            </button>
                            </div>
                            </div>
                           
                            
                            

                        </form>
                        {error && <p className="error-message">{error}</p>}
                    </div>
                    <div className="forget-pass"><a href="./">Forget your Password?</a></div>
                    

                </div>
                
            </div>
            <div className="sign-up-no-account">Don't have account? <a href="./">Sign up</a></div>

        </div>

    );
};

export default SignInPage;
