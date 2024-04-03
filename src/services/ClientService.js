// import React, { Component } from 'react'
import {axiosInstance} from "./Axios-http-client"

class  ClientService {
    addRegistration(newRegister){
        return axiosInstance.post('http://localhost:8080/newClient',newRegister);
    }

    addLogin(newLogin){
        return axiosInstance.post('http://localhost:8080/client/login',newLogin);
    }

    getClientById(clientid) {
        return axiosInstance.get(`http://localhost:8080/client/${clientid}`);
    }
    
    deleteClientById(clientid) {
        return axiosInstance.delete(`http://localhost:8080/client/${clientid}`);
    }

    updateClient(clientget) {
        return axiosInstance.patch('http://localhost:8080/client',clientget);
    }
}
export default new ClientService();