/*function workAPI() {
    fetch('https://developer.nps.gov/api/v1/activities/parks?&api_key=zWFbEO3KmJhujZKhnu1T6sToOLvtrXdMJCRVxK5W')
    .then(result => result.json())
    .then(resultJson => {
        //console.log(resultJson.data)
        resultJson.data.forEach(resultObject => {
           // console.log(resultObject)
            if (resultObject['name']=="Biking") {
               // console.log(resultObject)
                resultObject.parks.forEach(resultPark  => {
                  //  console.log(resultPark)
                   if (resultPark["states"]=="MD"){
                    console.log(resultPark)
                    
                   }
                } )
                
                
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
}


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
}

function getChosenTopic() {
    const chosenTopic = document.getElementById('topicsID').value;
    console.log(chosenTopic)
    return chosenTopic
  
}

function getChosenActivity() {
    const chosenActivity = document.getElementById('activityID').value;
    console.log(chosenActivity)
    
        fetch('https://developer.nps.gov/api/v1/activities/parks?&api_key=zWFbEO3KmJhujZKhnu1T6sToOLvtrXdMJCRVxK5W')
        .then(result => result.json())
        .then(resultJson => {
            //console.log(resultJson.data)
            resultJson.data.forEach(resultObject => {
               // console.log(resultObject)
                if (resultObject['name']==chosenActivity) {
                   // console.log(resultObject)
                    resultObject.parks.forEach(resultPark  => {
                        console.log(resultPark)
                        document.getElementById('testPrint').innerHTML= resultPark['fullName']

                    })
                    
                    
                } 
            });
     })

  
}*/

var map = L.map('map').setView([39.09, -94.57], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function loadMap() {
   const enteredPark =  document.getElementById("enterPark").value

    fetch('https://developer.nps.gov/api/v1/places?api_key=zWFbEO3KmJhujZKhnu1T6sToOLvtrXdMJCRVxK5W&limit=950')
    .then(result => result.json())
    .then(resultJson => {
     //   console.log(resultJson.data)
        resultJson.data.forEach(resultObject => {
      //  console.log(JSON.stringify(resultObject))
         //  const resultGetPark = JSON.stringify(resultObject.relatedParks)
           //console.log(resultGetPark)
         //  console.log(resultObject)
          //console.log(resultObject['relatedParks'])
         // console.log(resultObject['latitude'])

          for (const [key, value] of Object.entries(resultObject.relatedParks)) {
            const parkName = value['fullName']
           console.log(parkName)
            //console.log(enteredPark)
            if (enteredPark==parkName) {
                console.log("hi")
                const lat1 = resultObject['latitude'];
                console.log(lat1)
                const long1 = resultObject['longitude'];
                console.log(long1)

               var pop1 = L.marker([lat1, long1]).addTo(map);
               pop1.bindPopup(parkName).openPopup();

            }
           }

            
            
        });


    })


    
}

//window.onload=loadActivitiesForm()

//window.onload=loadTopicsForm()

//window.onload=getChosenActivity()

///window.onload=loadMap()