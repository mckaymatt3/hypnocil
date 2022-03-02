import React, {useState} from "react"

function NewPatientForm({handleNewPatient}) {
    const [newPatientName, setNewPatientName] = useState([])   
    const [newPatientSideEffects, setNewPatientSideEffects] = useState([])
    const [newPatientDeceased, setNewPatientDeceased] = useState([])

    function handlePatientName (event) {
        setNewPatientName(event.target.value)
        console.log("New Patient Name:", newPatientName)
    }

    function handlePatientSideEffects (event) {
        const listNewSideEffects = [event.target.value]
        setNewPatientSideEffects(listNewSideEffects)
        console.log("New Patient Side Effects: ", newPatientSideEffects)
        console.log(listNewSideEffects)
    }

    function handlePatientDeceased (event) {
        setNewPatientDeceased(event.target.value)
        console.log("New Patient Deceased: ", newPatientDeceased)
    }

    function handleSubmit(event) {
       event.preventDefault();
       console.log("Ive been submitted")
        const newPatient = {
            name: newPatientName,
            deceased: newPatientDeceased,
            side_effects: newPatientSideEffects
        }
        fetch("http://localhost:3000/patients", {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newPatient)
        })
            .then(response => response.json())
            .then(data => handleNewPatient(data))
            event.target.reset();
    }

    return(
        <>
            <form onSubmit={handleSubmit} id="new-patient-form">
                <input onChange={handlePatientName} value={newPatientName} id="patient-name" type="text" placeholder="Patient Name" form="new-patient-form"/>
                <input onChange={handlePatientSideEffects} value={newPatientSideEffects} name="side-effects" id="side-effects" placeholder="Patient Side Effects" form="new-patient-form" />
                <select onChange={handlePatientDeceased} value={newPatientDeceased} name="deceased-or-alive" id="deceased-or-alive" placeholder="Deceased: True or False" form="new-patient-form" >
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <input type="submit" value="Add Patient" />
            </form>
        </>
    )
}

export default NewPatientForm;