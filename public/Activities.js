function getChosenActivity() {
   
   const activitiesTable = document.getElementById('activitiesTable')
   
   
   activitiesTable.innerHTML =  `<table id="activitiesTable">
   <tr>            
   </tr>
</table>`

    const chosenActivity = document.getElementById('activityID').value
    const chosenState = document.getElementById('stateID').value
    console.log(chosenState)
  //  const chosenState = document.getElementById('codeID').value
   // console.log(chosenState)
    //const chosenState = document.getElementById('states').value
    //activitiesTable.remove();
    console.log(chosenActivity)
       
       /* if (document.contains(document.getElementById("activitiesTable"))) {
            document.getElementById("activitiesTable").remove();
        }*/


            const tableHeadPark=document.createElement('th')
            tableHeadPark.innerHTML="Park Name"
            activitiesTable.appendChild(tableHeadPark)

            const tableHeadState=document.createElement('th')
            tableHeadState.innerHTML="State"
            activitiesTable.appendChild(tableHeadState)

            const tableHeadDesignation=document.createElement('th')
            tableHeadDesignation.innerHTML="Designation"
            activitiesTable.appendChild(tableHeadDesignation)
    
       
      // activitiesTable.id = activitiesID
        fetch('https://developer.nps.gov/api/v1/activities/parks?&api_key=zWFbEO3KmJhujZKhnu1T6sToOLvtrXdMJCRVxK5W')
        .then(result => result.json())
        .then(resultJson => {
            console.log(resultJson.data)
            resultJson.data.forEach(resultObject => {
                //activitiesTable = document.createElement('table')
               // const activitiesContainer = document.createElement("div");
                //activitiesContainer.id = "activitiesContainerID"
               
                //console.log(resultObject['states'])
                //console.log(resultObject['states'])
                if (resultObject['name']==chosenActivity) {
                    
                   // console.log(resultObject)
                    resultObject.parks.forEach(resultPark  =>  {
                        console.log(resultPark)
                        if(resultPark['states']==chosenState) {
                            //   document.getElementById('testPrint').innerHTML= resultPark['fullName']

                        const tableRow = document.createElement('tr');
                        const parkColumn = document.createElement('td');
                        const stateColumn = document.createElement('td')
                        const designationColumn = document.createElement('td')

        
                        parkColumn.innerHTML=resultPark['fullName']
                        stateColumn.innerHTML=resultPark['states']
                        designationColumn.innerHTML=resultPark['designation']
                        tableRow.appendChild(parkColumn);
                        tableRow.appendChild(stateColumn);
                        tableRow.appendChild(designationColumn);
                        console.log(tableRow)
                        activitiesTable.appendChild(tableRow)
                       //  console.log(activitiesTable)
                      
                       
                    document.getElementById('table-container').appendChild(activitiesTable)

                        } 
                        else if (chosenState=="Any State") {
                            const tableRow = document.createElement('tr');
                            const parkColumn = document.createElement('td');
                            const stateColumn = document.createElement('td')
                            const designationColumn = document.createElement('td')
    
            
                            parkColumn.innerHTML=resultPark['fullName']
                            stateColumn.innerHTML=resultPark['states']
                            designationColumn.innerHTML=resultPark['designation']
                            tableRow.appendChild(parkColumn);
                            tableRow.appendChild(stateColumn);
                            tableRow.appendChild(designationColumn);
                            console.log(tableRow)
                            activitiesTable.appendChild(tableRow)
                           //  console.log(activitiesTable)
                          
                           
                        document.getElementById('table-container').appendChild(activitiesTable)
                            
                        }

                    })  
                } 
            });
     })
}

function loadActivitiesForm() { 
    selectActivity = document.getElementById("activityID");

    fetch('https://developer.nps.gov/api/v1/activities?api_key=zWFbEO3KmJhujZKhnu1T6sToOLvtrXdMJCRVxK5W')
    .then(result => result.json())
    .then(resultJson => {
        console.log(resultJson.data)
       
        resultJson.data.forEach(resultActivity => {
            console.log(resultActivity['name'])
            activityOption = document.createElement('option')
            activityOption.value = resultActivity['name'];
            activityOption.innerHTML = resultActivity['name'];
            console.log(activityOption)
        
            selectActivity.appendChild(activityOption)

           

        }) 
       
    })
    selectState = document.getElementById("stateID")
    fetch('/states')
    .then(result => result.json())
    .then(resultJson => {
       console.log(resultJson)
       resultJson.forEach(resultState => {
       // console.log(resultState['State_Name'])

       stateOption = document.createElement('option')
       stateOption.value = resultState['State_Abbreviation'];
       stateOption.innerHTML= resultState['State_Name'];
      
       selectState.appendChild(stateOption)

       }) 


    })
}

window.onload=loadActivitiesForm()
window.onload=getStates()