import { useEffect, useState } from "react"

const useServices = () =>{
    const [services, setTour] = useState([]);
    useEffect( () => {
            fetch('data/services.json')
            .then(res => res.json())
            .then(data => setTour(data))
    }, []);

    return[services,setTour];
}
export default useServices;