import axios from "axios";

const baseUrl = 'http://localhost:8080';

export const beginRegistration = async (username) => {
    
    const response = await axios.post(`${baseUrl}/webAuthn/register-challenge`, { username: username });
    console.log("response - ", response.data);   
    return response.data;
}

export const finishRegistration = async (credential) => {
    const response = await axios.post(`${baseUrl}/webAuthn/register-validate`, {registerRequest: credential });
    return response.data;
}

export const beginLogin = async (username) => {
    const response = await axios.post(`${baseUrl}/webAuthn/login-start`, { username: username });
    return response.data;
}

export const finishLogin = async (credential) => {
    const response = await axios.post(`${baseUrl}/webAuthn/login-verification`, { loginRequest: credential });
    return response.data;
}