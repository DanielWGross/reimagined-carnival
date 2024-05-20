function Login() {
  return (
    <form>
      <input type="text" id="username" />
      <label htmlFor="username">Username</label>

      <input type="password" id="password" />
      <label htmlFor="password">Password</label>
    </form>
  );
}

export default Login;
