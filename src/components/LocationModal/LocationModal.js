import React, { useRef, useState } from 'react';
import '../../globalcss/styles.css'

const LocationModal = ({show, setShowModal}) => {
    // const modalButton = useRef()
    // const [showModal, setShowModal] = useState(null);
  
    // if (show && modalButton.current){
    //     console.log(modalButton)
    //     modalButton.current.click()
    // }

    // if (showModal !== null) show = false;

    return (
        <>
    
            {(show) && (
                <div className="modal-background " style=
              {{  zIndex: "2000"}}            >
                    <div className="modal-card">
                        <div className="search-container">
                            <i class="bi bi-search searchimg"></i>
                            <input type="text" placeholder="Where you want to go?" className="search-input" />

                        </div>
                        <section className="modal-body">
                            <div>
                            <a className='modaldes' href="#">
                            <i class="bi bi-send-fill locationimg"></i>
                                <span class="Nearbytxt">Nearby Location</span>
                            </a>
                            </div>                            
                            <div class="mt-3">
                                <a className='modaldes' href="#">
                            <i class="bi bi-geo-alt-fill geoimg"></i>
                                <span class="Nearbytxt">Most Visted</span>
                            </a></div>

                            <div class="mt-4">
                                <p class="destinationtxt">Popular Destination</p>
                                <hr/>
                                <a className='modaldes' href="#">
                            <i class="bi bi-geo-alt-fill geoimg"></i>
                                <span class="Nearbytxt">Dha Karachi</span>
                            </a>

                            </div>
                        </section>
                        <footer className="modal-footer">
                            <button className="modal-footer-button" onClick={() => setShowModal(!show)}>
                                Apply
                            </button>
                        </footer>
                    </div>
                </div>
            )}
        </>
    );
};

export default LocationModal;
