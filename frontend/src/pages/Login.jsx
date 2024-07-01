import '../styles/auth.scss'
import query from '../../utils/query';


const Login = () => {

    const auth = async (e) => {
        e.preventDefault();
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value

        query('http://localhost/api/auth/login', { username, password }).then((response) => {
            if(response.code) {
                window.location.replace('/')
            }else if(response.error) {
                alert('Error: ' + response.error)
                console.clear();
            }
        })
    }

    return (
        <div className="loginContainer">
            <h1>Login</h1>
            <form className="loginForm" onSubmit={auth}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login