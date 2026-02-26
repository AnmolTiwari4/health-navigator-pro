import { useState } from "react";

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    emergency: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Saved:", form);
    alert("Profile saved!");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Personal Health Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Full Name" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="age" placeholder="Age" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="gender" placeholder="Gender" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="height" placeholder="Height (cm)" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="weight" placeholder="Weight (kg)" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="emergency" placeholder="Emergency Contact" className="w-full p-2 border rounded" onChange={handleChange} />

        <button className="w-full bg-primary text-white py-2 rounded">
          Save Details
        </button>
      </form>
    </div>
  );
}
