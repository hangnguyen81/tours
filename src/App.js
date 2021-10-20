import TourHeader from "./ToursHeader";
import ToursFooter from "./ToursFooter";
import tourData from "./toursData";
import Tour from './Tour';
import Loading from "./Loading";
import { useState, useEffect } from "react";

function App(){
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchTour = () =>{
        setTimeout(()=> {
            setTours(tourData);
            setLoading(false)     
        }, 2000);
    }

    useEffect(() =>{
        fetchTour()
    },
    [])

    const removeTour = (id) =>{
        const updateTour = tours.filter(tour => tour.id !== id)
        setTours(updateTour)
    }

    const listOfTours = tours.map(tour =>{
        return <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
    });

    if (tours.length === 0 && !loading){
        return (
            <div className="text-center">
                <h1 className="display-1 fw-bold"> No tour available</h1>
                <button className="btn btn-primary" 
                    onClick={() => {
                        setLoading(!loading)
                        fetchTour();
                    }}
                >Refesh</button>
            </div>
        )
    }else 
        return(
            <section className="bg-light">
                <div className='container-md'>
                    <TourHeader/>
                    {loading? <Loading/>:''}
                    <div className="row my-3 justify-content-center align-items-start">
                        {listOfTours}
                    </div>
                    <ToursFooter/>
                </div>
            </section>
        )
}

export default App