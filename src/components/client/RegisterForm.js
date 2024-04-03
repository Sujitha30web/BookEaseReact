import { useState } from "react";
import clientService from "../../services/ClientService";
import { useNavigate } from 'react-router-dom';
import "./RegisterForm.css";
function RegisterForm() {
    let [register, setRegiter] = useState({
        "name": '',
        "balance": 0,
        "email": '',
        "password": ''
    });
    const navigate = useNavigate();


    let [message, setMessage] = useState("");
    let [errorMessage, setErrorMessage] = useState("");


    const handleAccountChange = (e) => {
        setRegiter({ ...register, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(register);
        clientService.addRegistration(register)
            .then(
                (resp) => {
                    console.log(resp.data);
                    setMessage("Your Account is Registered Successfully!");
                    setErrorMessage("");
                }
            )
            .catch(
                (err) => {
                    console.log(err.response.data);
                    setMessage("");
                    setErrorMessage("Errors accured in fallowing fields:" + JSON.stringify(err.response.data));
                }
            )
    }
    return (
        <>
            {/* <h3>Client Registration Form</h3> */}
            {
                message && <h3 className="alert alert-success">{message}</h3>
            }
            {
                errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>
            }

            <div class="container">

                <form onSubmit={handleSubmit} class="registerForm">
                    <div>
                        <p>
                            <input type="text" name="name" value={register.name} placeholder=" Name" onChange={handleAccountChange} required pattern="[a-zA-Z ]{3,16}" title="Name should contain min 3 & max 16 chars , no digits and special chars allowed."></input>
                        </p>
                        <p>
                            <input type="email" name="email" value={register.email} placeholder="Email" onChange={handleAccountChange} required></input>
                        </p>
                        <p>
                            <input type="number" name="balance" value={register.balance} placeholder="Balance" onChange={handleAccountChange} min="500" required></input>
                        </p>
                        <p>
                            <input type="password" name="password" value={register.password} placeholder="Password" onChange={handleAccountChange} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
                        </p>
                        <button type="submit" className="registerButton">Register</button>  <br /><br />
                        Already have an account?   <a href="#" style={{ textDecoration: 'none' }} onClick={() => navigate('/login')}>Login</a>
                    </div>
                </form>
            </div>
        </>
    );
}

export default RegisterForm; 