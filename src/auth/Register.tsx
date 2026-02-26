import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await account.create("unique()", email, password, name);
      await account.createEmailSession(email, password);
      navigate("/");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="p-8 w-96 space-y-4 shadow-xl">
        <h1 className="text-xl font-bold text-center">Create Account</h1>

        <input placeholder="Name" className="w-full p-2 border" onChange={(e)=>setName(e.target.value)} />
        <input placeholder="Email" className="w-full p-2 border" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 border" onChange={(e)=>setPassword(e.target.value)} />

        <button className="w-full bg-primary text-white py-2">Register</button>
      </form>
    </div>
  );
}
