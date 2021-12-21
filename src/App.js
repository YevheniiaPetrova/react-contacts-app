import React, { useState, useEffect } from 'react';
import './App.css';
import Contacts from './components/contacts-data';
import ContactsList from './components/contacts-list';
import GenderFilter from './components/gender-filter';

function App() {
  const [contacts, setContacts] = useState(Contacts);
  const [genderFilter, setGenderFilter] = useState({
    female: true,
    male: true,
    none: true
  });
  const [searchValue, setSearchValue] = useState('');
  
  // Get data from gender-filter element
  const getGenderValue = ({showGender}) => {
    setGenderFilter(showGender);
    setContacts(Contacts);
  };

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
    setContacts(Contacts);
  }

  useEffect(() => {
    if (searchValue === '') {
      setContacts(contacts.filter(contact => (genderFilter[contact.gender])));
    } else {
    setContacts(contacts.filter((contact) =>
    ((contact.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.phone.includes(searchValue)) &&
      (genderFilter[contact.gender]))));
    }
  }, [searchValue, genderFilter]);

  return <div className='main-container'>
            <div className="header">
              <h2>Contacts</h2>
            </div>
            <div>
              <input type="text" onChange={onChangeHandler}></input>
            </div>
            <div>
               <GenderFilter getGenderValue={getGenderValue}/>
            </div>
            <div className='contacts'>
                <ContactsList someContacts={contacts}/>
            </div>
        </div>
}


export default App;
