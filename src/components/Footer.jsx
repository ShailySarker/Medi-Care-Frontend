import moment from 'moment';
import React from 'react';
import { GiStethoscope } from 'react-icons/gi';

const Footer = () => {
    return (
        <div className='bg-primary py-3 fw-bolder '> 
            <h3 className="text-center d-flex flex-row fs-6 justify-content-center align-items-center gap-1">Copyright @{moment().format('YYYY')} 
                <span className="fw-bolder d-flex flex-row justify-content-center align-items-center text-white gap-1"> 
                    <GiStethoscope className='fs-5' />
                    <span className="">Medi Care</span>
                </span>.
                All rights reserved.</h3>

        </div>
    );
};

export default Footer;