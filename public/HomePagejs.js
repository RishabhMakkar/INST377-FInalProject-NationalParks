function loadPhotos() {
    fetch("https://developer.nps.gov/api/v1/multimedia/galleries?api_key=zWFbEO3KmJhujZKhnu1T6sToOLvtrXdMJCRVxK5W")
    .then(result => result.json())
    .then(resultJson => {
        console.log(resultJson.data)
        resultJson.data.forEach(resultImage => {
            console.log(resultImage.images)
            resultImage.images.forEach(resultObject => {
                console.log(resultObject['url'])
                const imageLoad = document.createElement('img');
                imageLoad.id = "parkImage"
                imageLoad.src = resultObject['url']
                console.log(imageLoad)
                imageLoad.width=500
                imageLoad.height=500
                document.getElementById("sliderParks").appendChild(imageLoad)
                console.log(imageLoad)   
            }) 
        });

        simpleslider.getSlider()
        })
}

window.onload = loadPhotos()

