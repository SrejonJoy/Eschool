import { useState } from 'react';
import { useRouter } from 'next/router';
import AuthForm from '../components/AuthForm';

const RegisterPage = () => {
  const router = useRouter();
  const { role } = router.query;

  return (
    <div>
      <h1>Register as {role}</h1>
      <AuthForm role={role as string} />
    </div>
  );
};

export default RegisterPage;
