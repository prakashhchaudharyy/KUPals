
import { useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/firebase"; // Make sure firebase is set up
import "../styles/globals.css"; // Add custom CSS if needed

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/groups");
    } catch (err) {
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <div className="lg:min-h-screen flex flex-col items-center justify-center p-6">
      <div className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full">
        <div>
          <h1 className="lg:text-5xl text-4xl font-bold text-slate-900 !leading-tight">
            Seamless Login for Exclusive Access
          </h1>
          <p className="text-[15px] mt-6 text-slate-600 leading-relaxed">
            Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.
          </p>
          <p className="text-[15px] mt-6 lg:mt-12 text-slate-600">
            Don't have an account 
            <a href="#" className="text-blue-600 font-medium hover:underline ml-1">Register here</a>
          </p>
        </div>

        <form onSubmit={handleLogin} className="max-w-md lg:ml-auto w-full">
          <h2 className="text-slate-900 text-3xl font-semibold mb-8">Sign in</h2>

          <div className="space-y-6">
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">Password</label>
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-md outline-0 border border-gray-200 focus:border-blue-600 focus:bg-transparent"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">Forgot your password?</a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button type="submit" className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
              Log in
            </button>
          </div>

          <div className="my-6 flex items-center gap-4">
            <hr className="w-full border-slate-300" />
            <p className="text-sm text-slate-900 text-center">or</p>
            <hr className="w-full border-slate-300" />
          </div>

          <div className="space-x-6 flex justify-center">
            {/* Social login buttons (non-functional for now) */}
            <button type="button" className="border-0 outline-0 cursor-pointer">
              {/* Google SVG */}
            </button>
            <button type="button" className="border-0 outline-0 cursor-pointer">
              {/* Facebook SVG */}
            </button>
            <button type="button" className="border-0 outline-0 cursor-pointer">
              {/* Apple SVG */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
