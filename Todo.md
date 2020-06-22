# To do

Find below a list of potential future work to implement in this project.

- Comment the code to aid in readability of it
- Finish the readme
- Make the map scrollable and zoomable
- Make the initial map size scale to the size of the viewing device
- The panels and departments jsons should be stored outside of the app bundle and queried for. 
Potentially keep the jsons stored and editable in the Github and have the app query the Github 
link to those files. This will allow us to do quick/last-minute info changes without running 
through the whole process of building and deploying a new application release to production.
- Create tabs in the panels screen to sort them by location or time (eg morning, afternoon)
- Automatically sort department and panel entries by alphabetical and time order respectively rather 
than have the order determined by their order in the json.
- We use a library dependency that's flagged as a security vulnerability by Apple and they may no longer 
allow the deployment of our app if we continue to use it. Look into this and create a workaround.
- Add the ability for people to favorite panels/events they're interested in and see those in a 
separate menu
- Interactable map and/or show map location from event listing?