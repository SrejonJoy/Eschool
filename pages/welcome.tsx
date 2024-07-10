const WelcomePage = () => {
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={() => window.location.href = '/edit-profile'}>Edit Profile</button>
      </div>
    );
  };
  
  export default WelcomePage;
  