import { useEffect, useState } from "react"

export const CatGalleryFetch = () => {

    const [cats, setCats] =useState([]);

    const[error, setError] = useState(null);

    const fetchCats = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status +' '+ error}`);
            }
            const data = await response.json();
            setCats(data);
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        }
    }
    
    useEffect(() => {
        fetchCats();
    }, []);

  return (
    <div className='container mt-5'>
        <h2 className='text-center text-white mb-4'>Galeria de Gatitos con Fetch</h2>
        <div className='overflow-auto vh-80'>
            <div className="row">                
                {cats.map((cat, index) => (

                <div className="col-sm-6 col-md-4 col-lg-3"key={index}>
                    <div className="card" style={{width: '100%'}}>                        
                        <img src={cat.url} className="card-img-top" alt={cat.id} />
                        <div className="card-body">
                            <h5 className="card-title">Gatito</h5>
                            <p className="card-text">Gatito {index + 1}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}
