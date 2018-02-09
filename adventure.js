function startGame(){
//TODO: Increase difficulty making user find map, without making it another random POI that takes forever to stumble across.
//TODO: Remove all debug checks

// Define size of the game area,set default start
var maxX = 10
var maxY = 10
var userX = 0
var userY = 0

//Create randomized numerical map of game pois. Why won't you work, var mapGrid = [[],[]] ?

var mapGridX = []
var mapGridY = []

// random point of interest placement loop
var randX
var randY //lol, i'm 12
var mapPlacer = 0

// populate the map with points of interest

while (mapPlacer < 10){
  randX = Math.floor(Math.random() * Math.floor(maxX + 1))
  randY = Math.floor(Math.random() * Math.floor(maxY + 1))
  if (mapGridX[randX] == undefined && mapGridY[randY] == undefined){
    mapGridX[randX] = mapPlacer
    mapGridY[randY] = mapPlacer
 //   window.alert(mapPlacer + ":" + randX + ","+ randY) // Debug check
    mapPlacer++
  }
}

//this makes a map of the island and sets the start location
var cartX = 0
var cartY = maxY
var cartoMap = ""

////Start at the top, compose ascii map
while (cartY >= 0){
  cartX = 0
  while(cartX <= maxX){
  //figure out how to put markers on the map. essentially copy main gameplay code
    if(mapGridX[cartX] == 1 && mapGridY[cartY] == 1){
      // hills
      cartoMap = cartoMap + "m"
    } else if(mapGridX[cartX] == 2 && mapGridY[cartY] == 2){
      //lake 
      cartoMap = cartoMap + "O"
    }else if(mapGridX[cartX] == 3 && mapGridY[cartY] == 3){
      //Zork
      cartoMap = cartoMap + "@"
    }else if(mapGridX[cartX] == 4 && mapGridY[cartY] == 4){
      //Forest
      cartoMap = cartoMap + "^"
    }else if(mapGridX[cartX] == 5 && mapGridY[cartY] == 5){
      //Poi
      cartoMap = cartoMap + ">"
    }else if(mapGridX[cartX] == 6 && mapGridY[cartY] == 6){
      //obelisk
      cartoMap = cartoMap + "|"
    }else if(mapGridX[cartX] == 7 && mapGridY[cartY] == 7){
      //map
      cartoMap = cartoMap + "+"
    }else if(mapGridX[cartX] == 8 && mapGridY[cartY] == 8){
      //shovel
      cartoMap = cartoMap + "/"
    }else if(mapGridX[cartX] == 9 && mapGridY[cartY] == 9){
      //treasure
      cartoMap = cartoMap + "X"
    }else if(mapGridX[cartX] == 0 && mapGridY[cartY] == 0){
      //Player Start
      cartoMap = cartoMap + "."
      userX = cartX
      userY = cartY
    }else {
      //blank
      cartoMap = cartoMap + "+"
    }
    cartX++
  }
  cartoMap = cartoMap + "\n"
  cartY--
}
console.log(cartoMap)

//// Set user start location. We consider it a poi now. OLD CODE. DELETE WHEN NEW CODE IS GOOD. I don't know why this didn't work!
//userX = mapGridX[0]
//userY = mapGridY[0]
//window.alert("X:"+ userX +" Y:" + userY )

//Flags that control acheivements
var treasureFound = false
var mapFound = true //testing reveals finding the map is very frustraing. perhaps just reveals testing is very frustrating? 
var shovelFound = false


//create descriptions for Point Of Interest in the game. The variables are called poi because of that and not because of the fish, though I can understand why you might think that.

var poiHills="You are in the hills. They have eyes, you know. Just be thankful there's no music. "
var poiLake="You are by the lake district, home to poets and livestock. "
var poiZork="You are standing in an open feild outside of a big white house with a boarded front door. There is a small mailbox here. They are empty of leaflets, great undergound empires, and -sadly for you- treasure. "
var poiForest="There's a huge forest here full of verdant majesty, but you're having a hard time enjoying it with all these trees in the way. "
var poiShovel="You found a shovel! Now you have a shovel, so at least you got that going for you. "
var poiPoi="There is a fish here. It is a joke for people who read javascript comments. "
var poiLegalDirections="This text should never be displayed, it should be replaced before the user sees it. It will contain the valid exits available to the user."
var poiDugHole="Nothing here but an empty hole. Basically a shallow grave for your dignity. You notice a distinct lack of treasure. \n"
var poiMap="You found a map! I wonder what these symbols could mean. \n"
var poiObelisk="A lonely obelisk is here, engraved with the name Ogdred Weary."

// Get user's name.
var name = prompt("Oh, hello. Welcome to the island. What do you want to be called?")

//Set up inital location description.

var userLocationDescription = "Hello, " + name + ", if that really is your name. You are now stranded on a desert island. Find a treasure to leave. Doesn't make sense? Too bad, read Descartes if you want sense."

window.alert(userLocationDescription)

while (!treasureFound){
 
  // set up universal location data & default description
  poiLegalDirections=" What direction do you want to go in? Pick one:"
//  poiLegalDirections=" GPS:" + userX + "," + userY + poiLegalDirections //GPS for testing purposes.
  userLocationDescription="You are on a particularly forgettable part of the island." 
  

//  if(mapGridX[userX] == 1 && mapGridY[userY] == 1){ // Old code, remove when 100% sure new code works.
//    userLocationDescription = poiHills
//  }else if(mapGridX[userX] == 2 && mapGridY[userY] == 2){
//    userLocationDescription = poiLake
//  }else if(mapGridX[userX] == 2 && mapGridY[userY] == 2){
//    userLocationDescription = poiShovel
    //TODO add hasShovel variable. Reset location to blank.
  
    
    //add valid POI descriptions for location
    if(mapGridX[userX] == 1 && mapGridY[userY] == 1){
      // hills
      userLocationDescription = poiHills
    } else if(mapGridX[userX] == 2 && mapGridY[userY] == 2){
      //lake 
      userLocationDescription = poiLake
    }else if(mapGridX[userX] == 3 && mapGridY[userY] == 3){
      //Zork
      userLocationDescription = poiZork
    }else if(mapGridX[userX] == 4 && mapGridY[userY] == 4){
      //Forest
      userLocationDescription = poiForest
    }else if(mapGridX[userX] == 5 && mapGridY[userY] == 5){
      //Poi
      userLocationDescription = poiPoi
    }else if(mapGridX[userX] == 6 && mapGridY[userY] == 6){
      //obelisk
      userLocationDescription = poiObelisk
    }else if(mapGridX[userX] == 7 && mapGridY[userY] == 7){
      //map - Perhaps make this an OR to make the map easier to find?
      mapFound = true
    }else if(mapGridX[userX] == 8 && mapGridY[userY] == 8){
      //shovel
      if(shovelFound == false){
        userLocationDescription = userLocationDescription + "\n" + poiShovel
        shovelFound = true
        //remove the shovel from the map. Now you have it.
        mapGridX[userX] = undefined
        mapGridY[userY] = undefined
      }
    }else if(mapGridX[userX] == 10 && mapGridY[userY] == 10){
      //empty hole
      userLocationDescription = poiDugHole
    }
  
//  //Give the user the map if they've found it. Map's in console now, being all consoling.
//  if(mapFound == true){
//    userLocationDescription = poiMap + cartoMap + userLocationDescription
//  }
  
  
  //Give the user the option to dig if they have the shovel

    if(shovelFound == true){
    poiLegalDirections = poiLegalDirections + " Dig"
    }
  
  
  //identify relevant cardinal directions to offer user
  if(userY < maxY){
    poiLegalDirections = poiLegalDirections + " North"
    
    }

  if(userY > 0){
    poiLegalDirections = poiLegalDirections + " South"
    
    }  

  if(userX > 0){
    poiLegalDirections = poiLegalDirections + " West"
    
    } 

  if(userX < maxX){
    poiLegalDirections = poiLegalDirections + " East"
   
    }  


  
  //compose location text 
  userLocationDescription =  userLocationDescription +"\n " +poiLegalDirections
  //ask for input
  var direction = prompt(userLocationDescription).toUpperCase()

  //make sure new input is valid + move player location
  
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
    
  }else if(direction == "D"){
    // see if user location matches treasure
    if (shovelFound == true){
      if(mapGridX[userX] == 9 && mapGridY[userY] == 9){
      window.alert("A winner is you, " + name +".")
      //TODO Add a win screen!

      treasureFound = true

      }else if(mapGridX[userX] != null && mapGridY[userY] != null){
          //prevent players from digging up landmarks      
        window.alert("You can't dig here! It's a protected national monument!")
      } else{
        // put a hole in the ground if there's not a landmark here

        mapGridX[userX] = 10
        mapGridY[userY] = 10
      }
    } else{
      window.alert("You can't dig without a shovel!")
    }
    
    
  }else {
    window.alert("Please use the first letter of the direction you want to go.") 
  } 

  
}
}