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