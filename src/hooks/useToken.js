import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`https://dental-lab-server-nazmulrony.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    localStorage.setItem('dentalLabToken', data.accessToken);
                    setToken(data.accessToken);
                })
        }
    }, [email])
    return [token];
}
export default useToken;