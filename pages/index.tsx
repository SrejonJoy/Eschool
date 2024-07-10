import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Choose Your Role</h1>
      <button onClick={() => router.push('/register?role=student')}>Student</button>
      <button onClick={() => router.push('/register?role=teacher')}>Teacher</button>
      <button onClick={() => router.push('/login')}>Already Have An Account</button>
    </div>
  );
};

export default HomePage;
