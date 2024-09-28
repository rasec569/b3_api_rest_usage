import axios from "axios";
import { useEffect, useState } from "react"

export const RickAndMortyAxios = () => {
    const [rick, setRick]=useState([]);
    useEffect(() =>{
        const fetchData= async ()=>{
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                setRick(response.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[]);
    console.log(rick);
return (
    
    <div className="container mt-5"  style={{ maxHeight: '80vh', overflowY: 'scroll' }}>
        <div className="row align-items-start text-white">
            <h1 className="text-center"> Rick And Morty </h1>
                {rick.map((item, index) => (
                    <div className="col bg-dark position-relative" key={index}>                        
                        <img src={item.image} alt={item.name} className="rounded"/>
                        <div className="position-absolute bottom-0 start-0 w-100 text-center bg-dark bg-opacity-75 p-2">
                            <h4 className="m-0">{item.name}</h4>
                            <p className="m-0">{item.species}</p>
                        </div>
                        <hr/>
                    </div>                    
                ))}
        </div>
    </div>
)
}
