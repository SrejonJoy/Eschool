import { useState, useEffect } from 'react';
import styles from '../styles/EditProfilePage.module.css';

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    // Replace '/api/user/data' with your actual API endpoint
    fetch('/api/user/data')
      .then(response => response.json())
      .then(data => {
        // Assuming the data object structure matches the formData state
        setFormData({
          name: data.name,
          id: data.id,
          email: data.email,
          phone: data.phone,
          address: data.address,
        });
      })
      .catch(error => console.error("Error fetching user data:", error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send updated data to API
    const res = await fetch('/api/auth/update-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Profile updated');
    } else {
      alert('Failed to update profile');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} className={styles.inputField} placeholder="Name" required />
        <input name="id" value={formData.id} onChange={handleChange} className={styles.inputField} placeholder="ID" required />
        <input name="email" value={formData.email} onChange={handleChange} className={styles.inputField} placeholder="Email" required />
        <input name="phone" value={formData.phone} onChange={handleChange} className={styles.inputField} placeholder="Phone" required />
        <input name="address" value={formData.address} onChange={handleChange} className={styles.inputField} placeholder="Address" required />
        <button type="submit" className={styles.submitButton}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfilePage;
