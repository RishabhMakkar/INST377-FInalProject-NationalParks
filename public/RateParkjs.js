async function showRating() {
    console.log("hi")
    const enteredPark = document.getElementById('enterParkForRate').value
    console.log(enteredPark)
         await fetch(`/Parks`, {
          method: 'POST',
          body: JSON.stringify({
            parkName: `${document.getElementById('enterParkForRate').value}`,
            parkRating: `${document.getElementById('enterRating').value}`,
            comments: `${document.getElementById('enterComments').value}`,
          }),
        
          headers: {
            'content-type': 'application/json',
          },
        }).then((result) => result.json());
        await parkRatings();
      
}
function parkRatings() {
    const ratingsTable = document.getElementById('ratingsTable')
    const enteredPark = document.getElementById('parkChosen').value
   
    ratingsTable.innerHTML =  `<table id="ratingsTable">
    <tr>            
    </tr>
 </table>`

 const tableHeadPark=document.createElement('th')
 tableHeadPark.innerHTML="Park Name"
 ratingsTable.appendChild(tableHeadPark)

 const tableHeadRating=document.createElement('th')
 tableHeadRating.innerHTML="Rating"
 ratingsTable.appendChild(tableHeadRating)

 const tableHeadComments=document.createElement('th')
 tableHeadComments.innerHTML="Comments"
 ratingsTable.appendChild(tableHeadComments)

      fetch(`/Parks`)
      .then((result) => result.json())
      .then((resultJson) => {
        console.log(resultJson)
        resultJson.forEach(resultObject => {
            if (resultObject['Park_Name'] ==enteredPark) {

            const tableRow = document.createElement('tr');
                const parkNameColumn = document.createElement('td');
                const ratingsColumn = document.createElement('td')
                const commentsColumn = document.createElement('td')

                parkNameColumn.innerHTML=resultObject['Park_Name']
                ratingsColumn.innerHTML=resultObject['Park_Ratings']
                commentsColumn.innerHTML=resultObject['Comments']
                
                tableRow.appendChild(parkNameColumn);
                tableRow.appendChild(ratingsColumn);
                tableRow.appendChild(commentsColumn);
                console.log(tableRow)
                console.log("TIBS")
                ratingsTable.appendChild(tableRow)
                
                
            document.getElementById('table-container').appendChild(ratingsTable)
        }
        });  
      })
    }

   // window.onload= parkRatings()
   // tibs
    