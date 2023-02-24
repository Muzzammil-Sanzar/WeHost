import React, { useState } from 'react';
const FourTenStep = () => {
    const [counter, setCounter] = useState(56)
    return ( 
        <div className='container my-5'>
            <div className='row'>
                <div className='col-12 col-md-8 col-lg-5'>
                    <div className='fourteen-step-text'>
                        <h6>Now set your Price</h6>
                        <p>Set up your price per night, Can be changed later</p>
                    </div>
                    <div className='border border-2 mb-3'>
                        <div className='pt-3 pb-5'>
                            <div className='d-flex justify-content-center align-items-center fourteen-step-text'>
                                <button className='btn'><i className="bi bi-dash-circle fs-5"></i></button>
                                <span className='w-50 text-center  text-white py-2' style={{backgroundColor: '#0579C1'}}>$ {counter}</span>
                                <button className='btn'><i className="bi bi-plus-circle fs-5"></i></button>
                            </div>
                            <div className='text-center fourteen-step-text mt-2'>
                                <h6>Places near you ranges of $48 to $400</h6>
                            </div>
                        </div>
                    </div>
                    <div className='border border-2 mb-5'>
                        <div className='px-3 py-2'>
                            <div className='d-flex justify-content-between'>
                                <label className="form-check-label fw-semibold" for="flexCheckDefault">Want to draw more attention?</label>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            </div>
                            <div>
                                <h4>Why not offer them 20% on first 3 bookings?</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FourTenStep;