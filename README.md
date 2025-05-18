# INST377-FInalProject-NationalParks

# This project 
This project aims to help users find a National Park site to visit based on their interests. Users can decide which park they want to visit by selecting their favorite topic or activity and desired state. Users also can locate the exact location of their National Park on a map. Users also can share their thoughts on sites they have visited and view ratings of parks they want to visit.


# Devolpers Manual

This project was completed using HTML, CSS, and Javascript. 

The website has been deployed on the following link:
<a href= https://inst-377-f-inal-project-national-parks.vercel.app/ >
 https://inst-377-f-inal-project-national-parks.vercel.app/ </a>

 Supabase was used to build two back-end databases. One free Rest API was used as well to build the website.
 APi keys can be obtained from the National Park Service website.

 To allow the user to select an activity, <a href = https://developer.nps.gov/api/v1/activities> https://developer.nps.gov/api/v1/activities <a> was used to load data in the form. To show the activites with tables, <a href =https://developer.nps.gov/api/v1/activities/parks> https://developer.nps.gov/api/v1/activities/parks</a> was called. For the topics web page, <a href = https://developer.nps.gov/api/v1/topics> https://developer.nps.gov/api/v1/topics <a> was used to load data in the form and <a href =https://developer.nps.gov/api/v1/topics/parks> https://developer.nps.gov/api/v1/topics/parks</a> was called to show the parks in the table.

<a href = https://developer.nps.gov/api/v1/places> https://developer.nps.gov/api/v1/places </a> was used to get the coordinates to build the map. The map library was used to build the map.
<a href =  https://developer.nps.gov/api/v1/multimedia/galleries> https://developer.nps.gov/api/v1/multimedia/galleries </a> was used to build the photo slider on the home page. The slider library was used to make this slider.

To run the application, use `node npm start`.\
Install `npm express`, `npm nodemon`, `npm body-parser`, `npm dotenv`

For future developers, one major area for improvement is the page where the users rate national parks. The form does not validate whether a user has submitted a proper National Park to be rated.











