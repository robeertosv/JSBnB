import '../styles/auth.scss'



const Register = () => {
  return (
    <div className="registerContainer">
      <h1>Create Account</h1>
      <form className="registerForm">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
        </div>

        <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>

        <div>
        <label htmlFor="password2">Confirm Password</label>
        <input type="password" id="password2" name="password2" placeholder="Confirm your password" required />
        </div>

        <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>

        <div>
        <label htmlFor="phone">Phone</label>
        <input type="number" id="phone" name="phone" placeholder="Enter your phone" required />
        </div>

        <div>
        <label htmlFor="avatar">Profile Pic:</label>
        <input type="file" id="avatar" name="avatar" />
        </div>

        <div>
        <label htmlFor="accountType">Account Type</label>
        <select id="accountType" name="accountType">
          <option value="particular">Particular</option>
          <option value="anfitrion">Anfitrion</option>
        </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register