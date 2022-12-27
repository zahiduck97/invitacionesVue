import axios from "axios";

const invitadosApi = axios.create({
    // baseURL: 'http://invitacionesback-env-1.eba-uesetmii.us-east-1.elasticbeanstalk.com/invitados',
    baseURL: 'http://localhost:8000/invitados',
})

export default invitadosApi