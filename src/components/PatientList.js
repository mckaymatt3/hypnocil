import React from "react"
import Patient from "./Patient";

function PatientList({filterAllPatients, patients, setPatients, handleDelete}) {
  
  // console.log to look at data coming in
  console.log("Patients: ", patients)
  console.log("Set Patients: ", setPatients)

  // create function to call down below and set up each prop to pass in to the individual patient element
  const patientData = filterAllPatients.map(function (patient) {
    return <Patient key={patient.id} handleDelete={handleDelete} patient={patient} />
  })
  
  return(
      <table>
          <tbody>
            <tr>
                <th>Delete</th>
                <th>Deceased</th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Noted Side Effects</th>
            </tr>
              {patientData}
          </tbody>
      </table>  
    );
}

export default PatientList;