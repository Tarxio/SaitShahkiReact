import axios from "axios";

export const registration = async (username:any, email:any, password:any) => {
    try {
        const response = await axios.post('http://10.58.0.1:8090', {
            username,
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}