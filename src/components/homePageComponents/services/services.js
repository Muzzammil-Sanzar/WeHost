import React from 'react';
// import './services.css';
const Services = () => {
    return ( 
    <>
        <div className='container mb-5 mt-5 section'>
            <div className='text-center mb-5'>
                <h1 className='services-section-title position-relative section-titles'>Services</h1>
                <span className='service-section-title-border position-relative d-flex justify-content-center'>
                    <span></span>
                </span>
            </div>
            <div>
                <div className='row g-3'>
                    <div className='col-sm-6 col-md-6 col-lg-3'>
                        <div className='card service-card mx-1'>
                        <div className=''><i className="bi bi-ticket-perforated fs-1 p-3 " style={{color: '#32DF8F'}}></i></div>
                            <div className="card-body">
                                <h5 className="card-title">Rent House</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-3'>
                        <div className='card service-card mx-1'>
                            <div className='card-img-top'><i className="bi bi-house fs-1 p-3 " style={{color: '#00B8E0'}}></i></div>
                                <div className="card-body">
                                    <h5 className="card-title">Hotel Booking</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                    <div className='col-sm-6 col-md-6 col-lg-3'>
                    <div className='card service-card mx-1'>
                    <div className='card-img-top'><i className="bi bi-send fs-1 p-3 " style={{color: '#E48B78'}}></i></div>
                            <div className="card-body">
                                <h5 className="card-title">Tour Plan</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-3'>
                    <div className='card service-card mx-1'>
                    <div className='card-img-top'><i className="bi bi-house-lock fs-1 p-3 " style={{color: '#32DF8F'}}></i></div>
                            <div className="card-body">
                                <h5 className="card-title">Privacy of your home</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> 
    );
}
 
export default Services;