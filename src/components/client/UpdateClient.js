import React, { useState, useEffect } from 'react';
import clientService from "../../services/ClientService";
import { useNavigate } from 'react-router-dom';
import "./UpdateClient.css";

const UpdateClient = () => {
    const [clientData, setClientData] = useState({});
    const [updatedClientData, setUpdatedClientData] = useState({});
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const client = JSON.parse(localStorage.getItem('client'));
        setClientData(client);
        setUpdatedClientData(client);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedClientData({ ...updatedClientData, [name]: value });
    };

    const updateClient = () => {
        clientService.updateClient(updatedClientData)
            .then(() => {
                const client = JSON.parse(localStorage.getItem('client'));
                // setMessage("Client updated successfully!");
                alert("Your details has been updated successfully...");
                navigate("/client/" + client.id);
            })
            .catch((error) => {
                setErrorMessage("Could not update client.");
            });
    };

    return (
        <>
            <div className="container">
                <div className='registerForm'>
                    <h4>Update Client Details</h4> <br />
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4">
                            <h6 style={{ color: '#cc0066' }}>Name</h6> 
                            <h6 style={{ color: '#cc0066' }}>Email</h6>
                            <h6 style={{ color: '#cc0066' }}>Password</h6>
                            {/* <h6 style={{ color: '#cc0066' }}>Balance</h6> */}
                        </div>
                        <div className="col-sm-4">
                            <input type="text" name="name" value={updatedClientData.name} onChange={handleChange} /> <br/>
                            <input type="email" name="email" value={updatedClientData.email} onChange={handleChange} />     
                            <input type="type" name="password" value={updatedClientData.password} onChange={handleChange} />
                            {/* <input type="number" name="balance" value={updatedClientData.account.balance} onChange={handleChange} /> */}
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    <br />
                    <button class="btn btn-info" onClick={updateClient}>Update</button>
                    {message && <div className="alert alert-success">{message}</div>}
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                </div>
            </div>
        </>
    );
};

export default UpdateClient;
