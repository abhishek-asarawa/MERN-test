import Axios from "axios";

// setting default values
const axiosDefaultSetup = {
    baseURL: 'http://localhost:3000/api/',
    headers: {
            "X-Request-With": "XMLHttpRequest",
            Accept: "application/json",
    },
    responseType: 'json'
};

// if there is token then adding it in header
const createSetup = () => {
    const authToken = localStorage.getItem('access_token');
    const isAuth = !!authToken;
    if(isAuth){
        axiosDefaultSetup.headers['Authorization'] = `Bearer ${authToken}`;
    };
    return axiosDefaultSetup;
};


// main axios file
const httpRequest = (options) => {
    const { data, url, method } = options;
    const axiosOption = createSetup();
    return Axios({
        method,
        url,
        data,
        ...axiosOption
    });
};


export default httpRequest;