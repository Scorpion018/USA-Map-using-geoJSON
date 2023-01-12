import React from 'react'
import californiaTest from '../json/sampleCaliforniaJSON.json';
import oregonTest from '../json/sampleOregonJSON.json';

function DetailsComponent(props) {

  const testCaliforniaJson = californiaTest.features
  const testOregonJson = oregonTest.features

  const californiaStates = testCaliforniaJson.map(broker => {
    return (
      <div style={{ marginTop: '20px' }} key={broker.SubmissionID}>
        <div>
          BrokerFullName  =  {broker.BrokerFullName[0].extractedValue}
        </div>
        <div>
          BrokerContactName  =  {broker.BrokerContactName[0].extractedValue}
        </div>
        <div>
          BrokerContactPhone  =  {broker.BrokerContactPhone[0].extractedValue}
        </div>
        <div>
          Broker City  =  {broker.BrokerCity[0].extractedValue}
        </div>
        <div>
          Broker State  =  {broker.BrokerState[0].extractedValue}
        </div>
        <div>
          Broker Postal Code =  {broker.BrokerPostalCode[0].extractedValue}
        </div>
        <div>
          BrokerContactEmailAddress  =  {broker.BrokerContactEmailAddress[0].extractedValue}
        </div>
        <div>
          NamedInsuredFullName  =  {broker.NamedInsuredFullName[0].extractedValue}
        </div>
        <div>
          NamedInsuredCity  =  {broker.NamedInsuredCity[0].extractedValue}
        </div>
        <div>
          NamedInsuredState  =  {broker.NamedInsuredState[0].extractedValue}
        </div>
        <div>
          NamedInsuredPhoneNumber  =  {broker.NamedInsuredPhoneNumber[0].extractedValue}
        </div>
        <div>
          NamedInsuredPostalCode  =  {broker.NamedInsuredPostalCode[0].extractedValue}
        </div>
        <div>
          L O B  =  {broker.PolicySummaryLOB[0].extractedValue}
        </div>
        <div>
          Vehicle Count  =  {broker.VehicleCount[0].extractedValue}
        </div>
        <div>
          Overall Confidence =  {broker.overallconfidence}
        </div>
      </div>
    )
  })


  const oregonStates = testOregonJson.map(broker => {
    return (
      <div style={{ marginTop: '20px' }} key={broker.SubmissionID}>
        <div>
          BrokerFullName  =  {broker.BrokerFullName[0].extractedValue}
        </div>
        <div>
          BrokerContactName  =  {broker.BrokerContactName[0].extractedValue}
        </div>
        <div>
          BrokerContactPhone  =  {broker.BrokerContactPhone[0].extractedValue}
        </div>
        <div>
          Broker City  =  {broker.BrokerCity[0].extractedValue}
        </div>
        <div>
          Broker State  =  {broker.BrokerState[0].extractedValue}
        </div>
        <div>
          Broker Postal Code =  {broker.BrokerPostalCode[0].extractedValue}
        </div>
        <div>
          BrokerContactEmailAddress  =  {broker.BrokerContactEmailAddress[0].extractedValue}
        </div>
        <div>
          NamedInsuredFullName  =  {broker.NamedInsuredFullName[0].extractedValue}
        </div>
        <div>
          NamedInsuredCity  =  {broker.NamedInsuredCity[0].extractedValue}
        </div>
        <div>
          NamedInsuredState  =  {broker.NamedInsuredState[0].extractedValue}
        </div>
        <div>
          NamedInsuredPhoneNumber  =  {broker.NamedInsuredPhoneNumber[0].extractedValue}
        </div>
        <div>
          NamedInsuredPostalCode  =  {broker.NamedInsuredPostalCode[0].extractedValue}
        </div>
        <div>
          L O B  =  {broker.PolicySummaryLOB[0].extractedValue}
        </div>
        <div>
          Vehicle Count  =  {broker.VehicleCount[0].extractedValue}
        </div>
        <div>
          Overall Confidence =  {broker.overallconfidence}
        </div>
      </div>
    )
  })
  let name = ''
  let jsonName = props.stateName !== 'California' && props.stateName !== 'Oregon'
  // console.log('Props', !jsonName)
  // console.log('Props', props.stateName !== 'California' && props.stateName !== 'Oregon')
  name = !jsonName ? ((props.stateName === 'California') ? californiaStates : oregonStates) : 'Select a different state'
  console.log(name)

  return (
    <div>
      {name}
    </div>
  )
}

export default DetailsComponent