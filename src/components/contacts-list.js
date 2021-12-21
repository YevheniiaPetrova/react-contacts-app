import React from 'react';
import Contact from './contact';

const ContactsList = ({ someContacts }) => {
    return <div className='phone-book'>
        {someContacts.map((contact, index) =>
        <Contact key={index} phone={contact.phone} name={contact.firstName} surname={contact.lastName} gender={contact.gender} />)}
    </div>
}
export default ContactsList;