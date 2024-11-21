import React from 'react';
import './Login.css';
import logo from '../../assets/images/icons/logo_P.PNG';

function Login() {
    return (
        <div className="login-page">
            <div className="login-logo">
                {/* <img src="/path/to/logo.svg" alt="Logo" /> */}
                <img src={logo} alt="Logo" />
            </div>
            <div className="login-card">
                <h2>Welcome Back!</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">Email</label>
                    <input type="text" id="username" placeholder="Username" className="login-input" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="********" className="login-input" />

                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'admin' && password === '12345') {
        alert('Login successful!');
        // Redirect to homepage
        window.location.href = '/homepage'; // Adjust to your routing logic
    } else {
        alert('Invalid username or password');
    }
};


export default Login;


// import React from 'react';
// import './Login.css';

// function Login() {
//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form>
//         <input type="text" placeholder="Username" className="login-input" />
//         <input type="password" placeholder="Password" className="login-input" />
//         <button type="submit" className="login-button">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
