import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='amazon-pic'
      />
      <div className='home__row'>
        <Product
          id={123456}
          title={'Harry Potter Complete Book Series Special Edition Boxed Set'}
          image={
            'https://images-na.ssl-images-amazon.com/images/I/51xvaHppZqL._SY429_BO1,204,203,200_.jpg'
          }
          price={62.98}
          rating={5}
        />
        <Product
          id={123457}
          title={"The North Face - Men's Thermoball Full Zip Jacket"}
          image={
            'https://m.media-amazon.com/images/I/81B5k3ynYQL._AC_UL320_.jpg'
          }
          price={198.98}
          rating={5}
        />
      </div>
      <div className='home__row'>
        <Product
          id={123458}
          title={
            'Sony Alpha a7 IIK E-mount interchangeable lens mirrorless camera with full frame sensor with 28-70mm Lens'
          }
          image={
            'https://m.media-amazon.com/images/I/71G2PIzqK2L._AC_UY218_.jpg'
          }
          price={998}
          rating={5}
        />
        <Product
          id={123459}
          title={'New Apple MacBook Pro with Apple M1 Chip'}
          image={
            'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg'
          }
          price={1299.99}
          rating={5}
        />
        <Product
          id={123460}
          title={'WINSEE Dog Harness No Pull, Pet Harnesses with Dog Collar,'}
          image={
            'https://m.media-amazon.com/images/I/61W51TPO4nL._AC_UL320_.jpg'
          }
          price={15.29}
          rating={4}
        />
      </div>
      <div className='home__row'>
        <Product
          id={123461}
          title={
            'Samsung QN75Q70TA 75" Ultra High Definition Smart 4K QLED Quantum HDR TV'
          }
          image={
            'https://m.media-amazon.com/images/I/712M+w7RGvL._AC_UY218_.jpg'
          }
          price={1576.19}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
