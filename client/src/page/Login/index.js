import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, error, isLoading } = useLogin();
	const handleSubmit = async (e) => {
		e.preventDefault();
		//send req to backend
		await login(email, password);
		setEmail("");
		setPassword("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<h3>Login page</h3>
			<label>Email</label>
			<input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
			/>
			<label>Password</label>
			<input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
			/>
			<button disabled={isLoading}>login</button>
			{error && <div className="error-container"></div>}
		</form>
	);
};

export default Login;
