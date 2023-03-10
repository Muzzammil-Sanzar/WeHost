import React, { useEffect } from 'react';
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
const Explore = ({loadedHandler}) => {
    const [open, setOpen] = useState(false);
    const [exploreBtnTxt,setExploreBtnTxt]=useState('Explore More');
    const [exploreIcon,setExploreIcon]=useState('bi bi-chevron-down button-icon');

    useEffect(() => {
        if(open){
            setExploreBtnTxt('Explore Less');
            setExploreIcon('bi bi-chevron-up button-icon')
            
        }else{
            setExploreBtnTxt('Explore More');
            setExploreIcon('bi bi-chevron-down button-icon')
        }
    },[open])
    return (
        <>

            <div className='container mt-5 section'>
                <div className='explore-section'>
                    <h1 className='explore-title mb-0 section-titles'>Where to explore, right now</h1>
                    <span className='explore-description'>Rent houses with amenities, spaciousness, and comfort.</span>
                    <div className='explore-images mt-4'>
                        <div className='images-section-1 position-relative px-0 not-loaded'>
                            <img className='explore-images explore-image-1' src="/images/explore-1.jpg" alt="" onLoad={loadedHandler} />
                            <div className='overly-1'>Fascinating View</div>
                        </div>
                        <div className='images-section-2 position-relative px-0 overflow-hidden'>
                            <div className='inner-section-1 overflow-hidden h-50 mb-2 not-loaded'>
                                <img className='explore-images explore-image-2 h-100' src="/images/explore-2.jpg" alt="" onLoad={loadedHandler} />
                                <div className='overly-2'>Beach House</div>
                            </div>
                            <div className='inner-section-3 overflow-hidden h-50 mt-2 not-loaded'>
                                <img className='explore-images explore-image-3 h-100' src="/images/explore-3.jpg" alt="" onLoad={loadedHandler} />
                                <div className='overly-3'>Swiming Pool</div>
                            </div>
                        </div>
                    </div>
                    <Collapse in={open}>
                    <div  id="example-collapse-text" >
                        <div className='explore-images gap-3 mt-4'>
                            <div className='images-section-2 mx-0 position-relative px-0 overflow-hidden'>
                                <div className='inner-section-1 overflow-hidden h-50 mb-2'>
                                    <img className='explore-images explore-image-2 h-100' src="/images/outdoor-space.png" alt="" />
                                    <div className='overly-2'>OutDoor Door</div>
                                </div>
                                <div className='inner-section-3 overflow-hidden h-50 mt-2'>
                                    <img className='explore-images explore-image-3 h-100' src="/images/cabin-house.png" alt="" />
                                    <div className='overly-3'>Cabin House</div>
                                </div>
                            </div>
                            <div className='images-section-1 position-relative px-0'>
                                <img className='explore-images explore-image-1' src="/images/pet-house.png" alt="" />
                                <div className='overly-1'>Pets Welcome</div>
                            </div>
                        </div>
                    </div>
                    </Collapse>

                    <div className='d-flex justify-content-center mt-4 px-3'>
                        <button onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open} className='explore-button bi'> {exploreBtnTxt}  <i className={exploreIcon}></i></button>
                    </div>
                </div>
            </div>

            {/* <div className='container-fluid my-5 '>
                <div className='w-100 d-flex justify-content-between'>
                    <div >
                        <h1 style={{fontSize: '3.7vw'}}>Where to explore, right now</h1>
                        <p style={{fontSize: '2vw'}}>Rent House with amenities, spaciousness, and comfort</p>
                    </div>
                    <div >
                        <button className='btn btn-primary btn-md' style={{fontSize: '0.9rem'}}><i className="bi bi-funnel me-1"></i>Filters</button>
                    </div>
                </div>
                <div className='row justify-content-center h-100 px-0' >
                    <div className='col-sm-11 col-md-6 col-lg-6 px-0' >
                        <div className='imageTextColor w-100 h-100 position-relative bg-warning z-1'>
                            <img className='imageTextColor' src='/images/top10hotels.svg' width={'100%'} height={'auto'}/>
                            <div className='img-overlay h-100 w-100 position-absolute top-0'></div>
                            <p className='carousel-caption fw-semibold fs-5 ' style={{bottom: '-25px'}}>Fascinating View</p>
                        </div>
                    </div>
                    <div className='col-sm-11 col-md-6 col-lg-6'>
                        <div className='row h-50 mb-1 overflow-hidden'>
                            <div className='col p-0 m-1'>
                                <div className='imageTextColor w-100 h-100 position-relative'>
                                    <img  src='/images/beachHouse.svg' width={'100%'} height={'100%'}/>
                                    <div className='img-overlay h-100 w-100 position-absolute top-0'></div>
                                    <p className='carousel-caption fw-semibold fs-5' style={{bottom: '-25px'}}>Beach House</p>
                                </div>
                            </div>
                        </div>
                        <div className='row h-50 '>
                            <div className='col p-0 m-1'>
                                <div className='imageTextColor w-100 h-100 position-relative'>
                                    <img src='/images/swimingPool.svg' width={'100%'} height={'100%'} />
                                    <div className='img-overlay h-100 w-100 position-absolute top-0' ></div>
                                    <p className='carousel-caption fw-semibold fs-5 ' style={{bottom: '-25px'}}>Swiming pool</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container text-center mt-4'>
                    <div className=''>
                        <a className='btn btn-lg text-light explore'>Explore more <i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Explore;