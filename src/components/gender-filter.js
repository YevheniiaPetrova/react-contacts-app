import React, { useEffect, useState } from 'react';

const GenderFilter = ({getGenderValue}) => {
    const [showGender, setShowGender] = useState({
        female: true,
        male: true,
        none: true
    })

    const filterFemale = () => {
        setShowGender({
            ...showGender,
            female: !showGender.female
        });
    }

    const filterMale = () => {
        setShowGender({
            ...showGender,
            male: !showGender.male
        });
    }

    const filterNone = () => {
        setShowGender({
            ...showGender,
            none: !showGender.none
        });
    }

    useEffect(() => {
        getGenderValue({ showGender });
    }, [showGender])

    return <div>
                <label><input type="checkbox" className='checkbox' id='female' onChange={filterFemale} defaultChecked />Female</label>
                <label><input type="checkbox" className='checkbox' id='male' onChange={filterMale} defaultChecked/>Male</label>
                <label><input type="checkbox" className='checkbox' id='none' onChange={filterNone} defaultChecked/>None</label>
    </div>
    
}
  
export default GenderFilter;