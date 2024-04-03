import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import clientService from "../../services/ClientService";
import { useNavigate } from 'react-router-dom';
import "./DisplayClient.css";

const DisplayClient = () => {
    // const history = useHistory();
    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { id } = useParams();
    const [clientDisplay, setclientDisplay] = useState("");

    useEffect(() => {
        const client = JSON.parse(localStorage.getItem('client'));
        const clientid = client ? client.id : null;
    
        if (clientid) {
            clientService.getClientById(clientid)
                .then((response) => {
                    setclientDisplay(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);
    


    const updateTheClient = () => {
        console.log("to update clientId: " + id);
        navigate('/updateClient');
    };

    const deleteTheClientById = () => {
        const client = JSON.parse(localStorage.getItem('client'));
        const clientid = client ? client.id : null;
        console.log("delete id: " + clientid);

        if (window.confirm("Do you want to delete your profile "+client.name+"?")) {
            clientService.deleteClientById(clientid)
                .then(() => {
                    setMessage("your account has deleted successfully!...");
                    alert("Your account has been deleted successfully!...");
                    navigate('/');
                })
                .catch((err) => {
                    console.log(err);
                    setMessage("");
                    setErrorMessage("Could not Delete Account.");
                });
        }
    };

    return (
        <div>
            {id ? (
                <div className="container">
                    {message && <div className="alert alert-success">{message}</div>}
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
{!clientDisplay&&(<h3 style={{color:"red"}}>Login to view your profile</h3>)}

                        {clientDisplay && (
                            <div>
                                 <div className="cardIn">
                        <h4 style={{ textAlign: 'center', color: 'rgb(138, 106, 235)' }}>USER PROFILE</h4>
                        <br />
                            <div className="row">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-5">
                                    <h6 style={{ color: '#cc0066' }}>Name</h6>
                                    <h6 style={{ color: '#cc0066' }}>Email</h6>
                                    <h6 style={{ color: '#cc0066' }}>Password</h6>
                                    <h6 style={{ color: '#cc0066' }}>Balance</h6>
                                </div>
                                <div className="col-sm-5">
                                    <h6 style={{ color: '#cc0066' }}>{clientDisplay.name}</h6>
                                    <h6 style={{ color: '#cc0066' }}>{clientDisplay.email}</h6>
                                    <h6 style={{ color: '#cc0066' }}>{clientDisplay.password}</h6>
                                    <h6 style={{ color: '#cc0066' }}>{clientDisplay.account.balance}</h6>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                            <div>
                        <button type="button" className="btn btn-danger" onClick={deleteTheClientById}>Delete</button>
                            <button style={{ marginLeft: '60px' }} type="button" className="btn btn-warning" onClick={updateTheClient}>Update</button>
                        </div>
                            </div>
                            </div>
                        )}
                        <br/>
                        
                    
                </div>
                
            ) : (
                <div style={{ marginBottom: '130px', marginTop: '150px' }}>
                    <h1>
                        <marquee direction="right" scrollamount="12">Login to view your profile</marquee>
                    </h1>
                </div>
            )}
        </div>
    );
};

export default DisplayClient;
