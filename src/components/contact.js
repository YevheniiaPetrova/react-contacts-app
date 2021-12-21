import React from 'react';
import MaleIcon from '../assets/male.png';
import FemaleIcon from '../assets/female.png';
import NoneIcon from '../assets/none.png';
import './contact.css';

const Contact = ({ phone, name, surname, gender }) => {

    const setIcon = (gen) => {  
        switch (gen) {
            case 'male':
                return MaleIcon;
            case 'female':
                return FemaleIcon;
            default:
                return NoneIcon;
        }
    }

    return (
        <div className="contact">
            <div className='data'> 
                <div className='name'>{name} {surname}</div>
                <div>{phone}</div>
            </div>
            <div className='img'>
                <img src={setIcon(gender)} alt='contact gender icon'/>
            </div>
        </div>
    )
}

export default Contact;