// Define size of the game area
var maxX = 4
var maxY = 4

// Set user start location
var userX = 0
var userY = 0

// Set treasure location
var treasureX = 3
var treasureY = 3

//Create randomized numerical map of game pois. Why won't you work, var mapGrid = [[][]] ?

var mapGridX = []
var mapGridY = []

// random point of interest placement loop
var randX
var randY //lol, i'm 5
var mapPlacer = 0

while (mapPlacer < 5){
  randX = Math.floor(Math.random() * Math.floor(maxX + 1))
  randY = Math.floor(Math.random() * Math.floor(maxY + 1))
  if (mapGridX[randX] == undefined && mapGridY[randY] == undefined){
    mapGridX[randX] = mapPlacer
    mapGridY[randY] = mapPlacer
    mapPlacer++
  }
}


//Flag that controls main loop
var treasureFound = false

//create descriptions for Point Of Interest in the game. The variables are called poi because of that and not because of the fish, though I can understand why you might think that.

var poiHills="You are in the hills. They have eyes, you know. Just be thankful there's no music."
var poiLake="You are by the lake district, home to poets and livestock."
var poiShovel="There is a shovel here, sitting all unattended, like taking it hasn't been implimented yet."
var poiPoi="There is a fish here. It is a joke for people who read javascript comments."
var poiClue="There is a clue here. It reads:"
var poiLegalDirections="This text should never be displayed, it should be replaced before the user sees it. It will contain the valid exits available to the user."

// Get user's name.
var name = prompt("Oh, hello. Welcome to the island. What do you want to be called?")

//Set up inital location description.

var userLocationDescription = "Hello, " + name + ", if that really is your name. You are now stranded on a desert island. Find a treasure to leave. Doesn't make sense? Too bad, read Descartes if you want sense."

window.alert(userLocationDescription)

while (!treasureFound){
  //add valid POI for location
  poiLegalDirections=" GPS:" + userX + "," + userY + " What direction do you want to go in? Pick one:"
  userLocationDescription="You are on a particularly forgettable part of the island." 
  if(mapGridX[userX] == 0 && mapGridY[userY] == 0){
    userLocationDescription = poiHills
  }else if(mapGridX[userX] == 1 && mapGridY[userY] == 1){
    userLocationDescription = poiLake
  }else if(mapGridX[userX] == 2 && mapGridY[userY] == 2){
    userLocationDescription = poiShovel
  }else if(mapGridX[userX] == 3 && mapGridY[userY] == 3){
    userLocationDescription = poiPoi
  }
  
  //identify relevant directions to offer user
  if(userY < maxY){
    poiLegalDirections = poiLegalDirections + " N"
    
    }

  if(userY > 0){
    poiLegalDirections = poiLegalDirections + " S"
    
    }  

  if(userX < maxX){
    poiLegalDirections = poiLegalDirections + " E"
   
    }  

  if(userX > 0){
    poiLegalDirections = poiLegalDirections + " W"
    
    }  

  //compose location text 
  userLocationDescription =  userLocationDescription + poiLegalDirections
  //add ask for input
  var direction = prompt(userLocationDescription).toUpperCase()

  
  // temp vars only used for checking valid user destination
  var newX
  var newY
  
  if(direction == "N"){
    newX = userX 
    newY = userY + 1
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
      
    }else {
     window.alert("There is nothing but expansive ocean that way.") 
    }
 
  }else if(direction == "E"){
    newX = userX + 1
    newY = userY 
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
    }else {
     window.alert("There is nothing but wind-driven ocean that way.") 
    }
    
  }else if(direction == "S"){
    newX = userX 
    newY = userY - 1 
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
    }else {
     window.alert("There is nothing but wine-dark ocean that way.") 
    }
    
  }else if(direction == "W"){
    newX = userX - 1
    newY = userY
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
    }else {
     window.alert("There is nothing but endless ocean that way.") 
    }
    
  }else {
    window.alert("Please use the first letter of the direction you want to go.") 
  } 
    // see if user location matches treasure
  if (mapGridX[userX] == 4 && mapGridY[userY] == 4){
    window.alert("A winner is you, " + name +".")
    // Add a win screen!
    
    treasureFound = true

    }
  
}
