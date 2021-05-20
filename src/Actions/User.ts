import axios from "axios";

export const registration = async (username:any, email:any, password:any) => {
    try {
        const response = await axios.post('http://10.58.0.1:8090/', {
            username,
            email,
            password
        })
        alert(response.data.message)
    } catch (e:any) {
        alert(e.response.data.message)
    }
}

// export const login =  (email, password) => {
//     return async dispatch => {
//         try {
//             const response = await axios.post(`http://localhost:5000/api/auth/login`, {
//                 username,
//                 password
//             })
//             dispatch(setUser(response.data.user))
//             localStorage.setItem('token', response.data.token)
//         } catch (e) {
//             alert(e.response.data.message)
//         }
//     }
// }
//
// export const auth =  () => {
//     return async dispatch => {
//         try {
//             const response = await axios.get(`http://localhost:5000/api/auth/auth`,
//                 {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
//                 }
//             )
//             dispatch(setUser(response.data.user))
//             localStorage.setItem('token', response.data.token)
//         } catch (e) {
//             alert(e.response.data.message)
//             localStorage.removeItem('token')
//         }
//     }
// }