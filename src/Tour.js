import {useState} from 'react';
function Tour({tour,removeTour}){
    const [readMore, setReadMore] = useState(false)

    function controlText (text) {
        return(
            <button className="bg-white border-0 text-primary d-inline" onClick={() => setReadMore(!readMore)}>{text}</button>
        )
    } 
    return(
        <>
        <div className="col-10 col-lg-4 col-xxl-3 mx-1 my-1">
            <div className="card">
                <img src={tour.image} className="card-img-top img-fluid" alt="Bali"/>
                <div className="card-body">
                    <div className="d-flex flex-row justify-content-between align-items-start">
                        <h6 className="card-title">{tour.name}</h6>
                        <p className="bg-danger rounded p-1 fw-bold text-white">€{tour.price}</p>
                    </div>                    
                    <p className="card-text"> 
                        {readMore?tour.info:tour.info.slice(0,100)}
                        {readMore?controlText('Show less'):controlText('Read more')}
                    </p>                    
                    <button 
                        className="btn btn-outline-danger"
                        onClick={()=>removeTour(tour.id)}
                    >Not interested in</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Tour