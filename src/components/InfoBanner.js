import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';

const InfoBanner = ({ isOpen, closeModal }) => {
  const [scale, setScale] = useState('scale-0');
  const [show, setShow] = useState('hidden');

  useEffect(() => {
    if (isOpen) {
      setShow('fixed');
      setTimeout(() => {
        setScale('scale-100');
      }, 100);
    } else {
      setTimeout(() => {
        setShow('hidden');
      }, 100);
      setScale('scale-0');
    }
  }, [isOpen]);
  return (
    <div style={{ backgroundColor: '#0000004C' }} className={`${show}  transform transition-all ease-in flex justify-center items-center w-full h-screen font-poppins`}>
      <div className={` w-full h-full sm:w-3/4 sm:h-3/4 md:w-2/3 md:h-2/3 xl:w-1/2 xl:h-1/2 bg-white flex flex-col justify-center items-center text-center rounded-none sm:rounded-lg shadow-lg relative transform transition-all ease-in-out ${scale} `}>
        <button onClick={closeModal} type="button" className="absolute right-6 top-6 focus:outline-none">
          <IoMdClose size={25} color="#C43256" />
        </button>
        <p className="text-7xl mb-8 font-bold">
          Ooops
          <span className="text-s-red">!</span>
        </p>
        <p className="text-xl font-medium mb-4">We know how much you love movies</p>
        <p className="text-xl font-medium mb-4">
          Sadly you can only pick
        </p>
        <p className="text-3xl font-bold border border-s-green text-s-red rounded-full w-12 h-12 flex items-center justify-center">5</p>
      </div>
    </div>
  );
};

InfoBanner.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default InfoBanner;
