import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite";
import { useAuth } from "./AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await account.createEmailSession(email, password);
      const user = await account.get();
      setUser(user);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  // ✅ Google OAuth
  const loginWithGoogle = () => {
    account.createOAuth2Session(
      "google",
      window.location.origin,                // success redirect
      window.location.origin + "/login"      // failure redirect
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form
        onSubmit={handleLogin}
        className="p-8 rounded-lg shadow-xl w-96 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">
          Health Navigator Login
        </h1>

        {error && <p className="text-red-500">{error}</p>}

        <input
          className="w-full p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-primary text-white py-2 rounded">
          Login
        </button>

        {/* 🔵 Google Login Button */}
        <button
          type="button"
          onClick={loginWithGoogle}
          className="w-full border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm">
          No account?{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
