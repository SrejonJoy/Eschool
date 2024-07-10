import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/welcome');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Login</button>
      <Link href="/forgot-password" className="btn btn-link">Forgot Password?</Link>
    </form>
  );
};

export default LoginPage;
