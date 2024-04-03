import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import clientService from "../../services/ClientService";
import "./LoginForm.css";

export default function LoginForm() {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    let [message, setMessage] = useState("");
    let [errorMessage, setErrorMessage] = useState("");

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
        let errors = {};
        if (login.email.length < 10) {
            errors.email = "Email is too short";
        }
        if (login.password.length < 5) {
            errors.password = "Password is too short";
        }
        return errors;
       };

       const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateValues(login));
        setSubmitting(true);
        console.log(login);
        clientService.addLogin(login)
            .then(
                (resp) => {
                    console.log(resp.data);
                    setMessage("Logged In successfully!..");
                    alert("Logged In successfully!..");
                    localStorage.setItem('client', JSON.stringify(resp.data));
                    // Retrieve client details from local storage
                    const storedClient = JSON.parse(localStorage.getItem('client'));
                    setErrorMessage("");
                    navigate('/');
    
                    // Log client details to the console
                    console.log('Client Details from local storage:', storedClient);
                }
            ) 
            .catch(
                (err) => {
                    console.log(err.response.data);
                    setMessage("");
                    setErrorMessage("Errors accured in following fields:" + JSON.stringify(err.response.data));
                }
            )
    };


    return (
        <div className="App">
            {Object.keys(errors).length === 0 && submitting ? (
                <span className="success">Successfully submitted ✓</span>
            ) : null}
            {/* <h3>Log In form:</h3> */}
            <div class="container">
            <form onSubmit={handleSubmit} class="loginForm">
                <div>
                    <p> 
                        <input
                            type="email"
                            name="email"
                            value={login.email}
                            onChange={handleChange}
                            placeholder="name@gmail.com"
                            style={{ border: errors.email ? "1px solid red" : null }}
                        ></input>
                        {errors.email ? (
                            <p className="alert alert-danger">Email should be at least 15 characters long</p>
                        ) : null}
                    </p>
                    <p>

                        <input
                            type="password"
                            name="password"
                            value={login.password}
                            onChange={handleChange}
                            placeholder="Password"
                            style={{ border: errors.password ? "1px solid red" : null }}
                        ></input>

                        {errors.password ? (
                            <p className="alert alert-danger">
                                Password should be at least 5 characters long
                            </p>
                        ) : null}
                    </p>
                </div> <br/>
                <button type="submit" class="loginButton">Login</button> <br/>

                Dont have an account? <a href="#" style={{textDecoration:'none'}} onClick={() => navigate('/register')}>Register</a>
            </form>
            </div>
        </div>
    );
}