import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Profile.css';

export default function Profile() {
  const navigate = useNavigate();
  const client = JSON.parse(localStorage.getItem('client'));
  const clientid = client ? client.id : null;
  const ViewProfile = () => {
    navigate('/client/' + clientid);
  }
  const LogoutClient = () => {
    localStorage.removeItem('client');
    alert("Your account has been Logged out successfully✨✨...")
  }
  return (
    <>
      <div className='container'>
        <div className='profileOuter1'>
        <button class="btn btn-warning" onClick={ViewProfile}>View Profile</button> <br /><br /><br />
      </div>
      </div>
      <div className='container'>
        <div className='profileOuter2'>
        <button  class="btn btn-danger" onClick={LogoutClient}>Logout</button>
      </div>
      </div>
    </>
  )
}
