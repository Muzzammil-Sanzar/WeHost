import React, { useEffect } from 'react';
import { useState } from 'react';
import Welcome from '../components/verifyPropertyComponent/welcome';
import FirstStep from '../components/verifyPropertyComponent/firstStep';
import PropertyHeader from '../components/verifyPropertyComponent/propertyHeader';
import SecondStep from '../components/verifyPropertyComponent/secondStep';
import ThirdStep from '../components/verifyPropertyComponent/thirdstep';
import ForthStep from '../components/verifyPropertyComponent/forthstep';
import FifthStep from '../components/verifyPropertyComponent/fifthStep';
import SixthStep from '../components/verifyPropertyComponent/sixthStep';
import StepTwo from '../components/verifyPropertyComponent/stepTwo';
import SeventhStep from '../components/verifyPropertyComponent/seventhStep';
import EightStep from '../components/verifyPropertyComponent/eightStep';
import NinethStep from '../components/verifyPropertyComponent/ninethStep';
import SixTenStep from '../components/verifyPropertyComponent/sixtenStep';
import FiveTenStep from '../components/verifyPropertyComponent/fiveTenStep';
import FourTenStep from '../components/verifyPropertyComponent/fourTenStep';
import '../globalcss/styles.css';
import TenthStep from '../components/verifyPropertyComponent/tenthStep';
import StepThree from '../components/verifyPropertyComponent/stepThree';
import axios from 'axios';
import process from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config';

const VerifyPropertyPage = () => {
  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(0);
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(false);
  const [propertyTitle, setPropertyTitle] = useState('');
  const [propertyDescription, setPropertyDescription] = useState('');
  const [guestType, setGuestType] = useState('');
  const listingData = {
    "title": 'tes',
    'description': 'test',
    'place_type_id': 0,
    'category_id': 0,
    'no_of_guests': 0,
    'no_of_bedrooms': 0,
    'no_of_beds': 0,
    'no_of_bathrooms': 0,
    'guest_type': 'all-guests',
    'price': 0.0,
    'currency_code': 'USD',
    'currency_symbol': '$',
    'has_security_cameras': 0,
    'has_weapons': 0,
    'has_animals': 0,
    'street': 'street # 5',
    'apartment': 'apartment # 2',
    'city': 'NY',
    'country': "USA",
    'features': [],
    'state': 'USA',
    'zip_code': '1234',
    'country_code': '+1'
  }
  const navigate = useNavigate();
  const [listingCompleteData, setListingCompleteData] = useState(listingData);
  const [isListingDataChanged, setIsListingDataChanged] = useState(0);

  const getStartedHandle = () => {
    localStorage.setItem('listing_data', JSON.stringify(listingData));
    setPage(page + 1);
    setWidth(page * 6.66);
    console.log(page);
  }

  const nextHandler = () => {
    
  } 

  const finishHandler = async () => {
    console.log(listingCompleteData);
    let config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      }
    }

    await axios.post(baseUrl + 'listings', listingCompleteData, config)
      .then((response) => {
        console.log(response.data);
        navigate('/hosting/listings');
      })
      .catch((error) => {
        console.log(error);
      }
    )
  }

  useEffect(() => {
    console.log(listingCompleteData);
    setId(id)
  }, [id])

  useEffect(() => {
    localStorage.setItem("listing_data", JSON.stringify(listingCompleteData));
  }, [isListingDataChanged]);

  return (
    <>
      <PropertyHeader />
      <div className='my-5'>
        <div>
          {
            (page === 0) && 
            <Welcome 
              setListingCompleteData={setListingCompleteData}
            />}
          {(page === 1) && <FirstStep />}
          {
            (page === 2) && 
            <SecondStep 
              id={id} 
              setId={setId} 
              listingCompleteData={listingCompleteData} 
              setListingCompleteData={setListingCompleteData} 
              setCategories={setCategories} 
              categories={categories}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }
          {
            (page === 3) && 
            <ThirdStep 
              id={id} 
              setId={setId} 
              categories={categories}
              listingCompleteData={listingCompleteData}
              setListingCompleteData={setListingCompleteData} 
              setCategories={setCategories}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }

          {(page === 4) && <ForthStep />}
          {(page === 5) && 
            <FifthStep 
              setId={setId} 
              listingCompleteData={listingCompleteData} 
              setListingCompleteData={setListingCompleteData}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }

          {
            (page === 6) && 
            <SixthStep 
              id={id} 
              setId={setId} 
              listingCompleteData={listingCompleteData}
              setListingCompleteData={setListingCompleteData}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }

          {(page === 7) && <StepTwo />}
          {(page === 8) && <SeventhStep id={id} setId={setId} listingCompleteData={listingCompleteData} setListingCompleteData={setListingCompleteData}  url={baseUrl} setIsListingDataChanged = {setIsListingDataChanged} />}
          {(page === 9) && <EightStep id={id} setId={setId} url={baseUrl} setIsListingDataChanged = {setIsListingDataChanged} />}
          {(page === 10) && <NinethStep />}
          
          {
            (page === 11) && 
            <TenthStep 
              setId={setId} 
              listingCompleteData={listingCompleteData}
              setListingCompleteData={setListingCompleteData}
              url={baseUrl}
              setIsListingDataChanged = {setIsListingDataChanged}
            />
          }

          {(page === 12) && <StepThree />}
          {(page === 13) && <FourTenStep id={id} setId={setId}  url={baseUrl} setIsListingDataChanged = {setIsListingDataChanged} />}
          {(page === 14) && <FiveTenStep id={id} setId={setId}  url={baseUrl}    listingCompleteData={listingCompleteData} setListingCompleteData={setListingCompleteData} setIsListingDataChanged = {setIsListingDataChanged} />}
          {(page === 15) && <SixTenStep id={id} setId={setId}  url={baseUrl} setIsListingDataChanged = {setIsListingDataChanged} />}

          <div className='position-relative container'>
            <div className="progress my-5" style={{ background: '#0079c2bf' }}>
              <div className="progress-bar" style={{ width: `${width}%`, background: '#81E2F1' }}></div>
            </div>
            {(page === 0) && (
              <div className='text-end'>
                <button className='btn fw-semibold property-footer-button' style={{ width: 115 }} onClick={getStartedHandle}>
                  Get Started
                </button>
              </div>
            )}
            {(page >= 1) && (
              <div className='d-flex justify-content-between'>
                <button className='btn property-footer-button' onClick={() => { setPage(page - 1); setWidth((page - 1) * 6.66); console.log(page, width) }}><i className="bi bi-arrow-left me-1"></i>Back</button>
                {(page < 15) && (id) || (page === 1) || (page === 4) || (page === 7) || (page === 8) || (page === 10) || (page === 12) || (page === 6) ? (
                  <button className='btn property-footer-button' onClick={() => { setPage(page + 1); setWidth((page + 1) * 6.66); setId(false) }}>Next<i className="bi bi-arrow-right ms-1"></i></button>
                ) : ''}
                {(page === 15) && (<button className='btn property-footer-button' onClick={finishHandler}>finish<i className="bi bi-arrow-right ms-1"></i></button>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyPropertyPage;