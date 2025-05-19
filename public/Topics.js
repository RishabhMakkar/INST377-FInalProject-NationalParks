function loadTopicsForm() { 
    selectTopic = document.getElementById("topicsID");

    fetch('https://developer.nps.gov/api/v1/topics?api_key=zWFbEO3KmJhujZKhnu1T6sToOLvtrXdMJCRVxK5W&limit=83')
    .then(result => result.json())
    .then(resultJson => {
        console.log(resultJson.data)
       
        resultJson.data.forEach(resultTopic => {
            console.log(resultTopic['name'])
            topicOption = document.createElement('option')
            topicOption.value = resultTopic['name'];
            topicOption.innerHTML = resultTopic['name'];
            console.log(topicOption)
        
            selectTopic.appendChild(topicOption)

        }) 
       
    })

    selectState = document.getElementById("stateIDTopic")
    fetch('/states')
    .then(result => result.json())
    .then(resultJson => {
       // console.log(resultJson)
       resultJson.forEach(resultState => {
       // console.log(resultState['State_Name'])

       stateOption = document.createElement('option')
       stateOption.value = resultState['State_Abbreviation'];
       stateOption.innerHTML= resultState['State_Name'];
      
       selectState.appendChild(stateOption)

       }) 

    })
}

function getChosenTopic() {

   
    const topicsTable = document.getElementById('topicsTable')
    topicsTable.innerHTML =  `<table id="topicsTable">
    <tr>            
    </tr>
 </table>`
     const chosenTopic = document.getElementById('topicsID').value
     const chosenState = document.getElementById('stateIDTopic').value
     console.log(chosenTopic)
    const tableHeadPark=document.createElement('th')
    tableHeadPark.innerHTML="Park Name"
    topicsTable.appendChild(tableHeadPark)

    const tableHeadState=document.createElement('th')
    tableHeadState.innerHTML="State"
    topicsTable.appendChild(tableHeadState)

    const tableHeadDesignation=document.createElement('th')
    tableHeadDesignation.innerHTML="Designation"
    topicsTable.appendChild(tableHeadDesignation)
    
       // activitiesTable.id = activitiesID
         fetch('https://developer.nps.gov/api/v1/topics/parks?&api_key=zWFbEO3KmJhujZKhnu1T6sToOLvtrXdMJCRVxK5W')
         .then(result => result.json())
         .then(resultJson => {
             //console.log(resultJson.data)
             resultJson.data.forEach(resultObject => {
                 //activitiesTable = document.createElement('table')
                // const activitiesContainer = document.createElement("div");
                 //activitiesContainer.id = "activitiesContainerID"
                
                // console.log(resultObject)
                 if (resultObject['name']==chosenTopic) {
                     
                    // console.log(resultObject)
                     resultObject.parks.forEach(resultPark  => {
                         console.log(resultPark)
                         if (resultPark['states']==chosenState) {
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
                            topicsTable.appendChild(tableRow)
                           //  console.log(activitiesTable)
                          
                           
                        document.getElementById('table-container').appendChild(topicsTable)

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
                            topicsTable.appendChild(tableRow)
                           //  console.log(activitiesTable)
                          
                           
                        document.getElementById('table-container').appendChild(topicsTable)
                            
                        }
                     })  
                 } 
             });
      })
 }

window.onload=loadTopicsForm()