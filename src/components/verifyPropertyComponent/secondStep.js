import React, { useState, useEffect } from 'react';
import axios from 'axios';
import process from 'react'

const SecondStep = ({ id, setId, listingCompleteData, setListingCompleteData, setCategories, categories }) => {
  const [placeTypeId, setPlaceTypeId] = useState(null);
  const [placeTypes, setPlaceTypes] = useState([]);
  const [selectedPlaceTypes, setSelectedPlaceTypes] = useState(null);
  // var url = process.env.REACT_APP_APIURL;
  var url = 'http://localhost:8000/';

  const setCategory = (event, id) => {
    const parentEl = event.nativeEvent.target.closest('.category-box');
    if (!parentEl) return;
    const categoryEls = document.querySelectorAll('.category-box');
    categoryEls.forEach((el) => el.classList.remove('active-category'));
    parentEl.classList.add('active-category');

    setSelectedPlaceTypes(id); 
    let data = listingCompleteData;
    data.place_type_id= id;
    setListingCompleteData(data);
    localStorage.setItem('listing_data', JSON.stringify(data));
    setId(true);
  }
  
  useEffect(() => {
    fetchPlaceTypes();
    localStorage.setItem('place_type_id', JSON.stringify(selectedPlaceTypes));

  }, [selectedPlaceTypes]);

  useEffect(()=>{
   
  }, [])

  const fetchPlaceTypes = async () => {
    var config = {
      headers: {
        Accept: 'application/json'
      }
    }

    let request = axios.get(`${url}api/categories`, { config })
    await request.then((response) => {
        setCategories(response.data.data);
        // setPlaceTypeId(response.data.id);
    });
    await request.catch((error) => {
      console.log(error);
    });
  }
  return (
    <>
      <div className='container'>
        <h3 className='verify-2nd-title mb-0 mt-5'>What Kind of Property Do You Own ?</h3>
        <div className='verify-2nd-list-items row  mt-4'>
          <div className='verify-2nd-list-items-1st-column col-md-6 col-sm-12 col-12 row'>
            {/* Place Types */}
            {categories.map((item, index) => {
            return (
              <div key={index} className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder' onClick={(e)=>setCategory(e,item.id)}>
                <div className='category-box verify-2nd-list-item border px-2 text-center py-3 mb-3'>
                  <span className='verify-2nd-list-item-main'>
                    {/*<i className="verify-2nd-list-item-main-icon bi bi-house"></i>*/} 
                    {item.name}
                    <input type={'radio'} name='category' className='d-none' value={item.id} />
                  </span>
                </div>
              </div>)
            })}
            {/* Place Types End */}

            {/* <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='category-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <i className="verify-2nd-list-item-main-icon bi bi-building"></i> Apartment
                  <input type={'radio'} name='category' className='d-none' value={'apartment'} />
                </span>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='category-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <i className="verify-2nd-list-item-main-icon bi bi-buildings"></i> Hotel
                  <input type={'radio'} name='category' className='d-none' value={'hotel'} />
                </span>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='category-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="verify-2nd-list-item-main-icon" src='/images/mansion.png' /> Guest House
                  <input type={'radio'} name='category' className='d-none' value={'guest house'} />
                </span>
              </div>
            </div>
            <div onClick={setCategory} className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div className='category-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="verify-2nd-list-item-main-icon" src='/images/tinyhouse.png' />  Tiny House
                  <input type={'radio'} name='category' className='d-none' value={'tiny house'} />
                </span>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-6 verify-2nd-list-item-holder'>
              <div onClick={setCategory} className='category-box verify-2nd-list-item border text-center py-3 mb-3'>
                <span className='verify-2nd-list-item-main'>
                  <img className="verify-2nd-list-item-main-icon" src='/images/pool.png' /> Pool Home
                  <input type={'radio'} name='category' className='d-none' value={'pool home'} />
                </span>
              </div>
            </div>
 */}

          </div>
          <div className='col-12 col-md-5 col-lg-6'>
            <img className='verify-2nd-image' src='/images/propertyhouse.png' alt="" />
          </div>
        </div>
      </div>

    </>
  );
}

export default SecondStep;