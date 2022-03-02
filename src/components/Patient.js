import React, {useState} from 'react';

function Patient({patient, handleDelete}) {
    const [isDeceased, setIsDeceased] = useState(patient.deceased)
    const classy = isDeceased ? "deceased" : "alive"
    
    function checkDeceased () {
        setIsDeceased(!isDeceased)
    }
    
    // create a function that when delete Button is pressed you delete the object from the
    function onDelete () {
        handleDelete(patient)
    }

    return (
        // create table row element that has each part of the data you need
        <tr>
            <td><button onClick={onDelete}>Delete</button></td>
            <td><button onClick={checkDeceased}>Dead??</button></td>
            <td>{patient.id}</td>
            <td className = {classy}>{patient.name}</td>
            <td>{patient.side_effects.join(" , ")}</td>
        </tr>
     );
}

export default Patient;
