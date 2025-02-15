import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-emerald-600 px-4 py-8">
			<h1 className="text-2xl font-bold">Log-in Form</h1>
			<div className="w-full max-w-md bg-transparent rounded-lg shadow-md px-8 py-10 overflow-hidden">
				<h2 className="text-2xl font-bold text-center text-white mb-6">Welcome Back!</h2>
				<form className="space-y-4">
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-green-500 focus:ring-1"
							placeholder="johndoe@example.com"
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-green-500 focus:ring-1"
							placeholder="********"
						/>
					</div>
					<button
						type="submit"
						className="w-full px-4 py-2 rounded-md bg-green-500 text-center text-white font-medium shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
					>
						Login
					</button>
				</form>
				<div className="mt-6 text-center text-sm text-white">
					New user?{" "}
					<Link to="/register" className="text-white	">
						Sign Up!
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Login
