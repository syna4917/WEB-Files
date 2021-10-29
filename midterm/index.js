let mondaypics = ["assets/pb.png", "assets/dessert.png", "assets/calendar.png", "assets/tjs.png"];
let tuesdaypics = ["assets/pb.png", "assets/annex.png", "assets/journal.png", "assets/rose.png"];
let wednesdaypics = ["assets/pb.png", "assets/wine.png", "assets/bed.png", "assets/laundry.png"];
let thursdaypics = ["assets/pb.png", "assets/coffee.png", "assets/golf.png", "assets/tjs.png"];
let fridaypics = ["assets/pb.png", "assets/shower.png", "assets/clean.png", "assets/date.png"];
let saturdaypics = ["assets/sleepin.png", "assets/bake.png", "assets/shopping.png", "assets/movie.png"];
let sundaypics = ["assets/breakfast.png", "assets/hair.png", "assets/homework.png", "assets/kitchen.png"];
let prevoption;



// the following function shows the current date on the default screen
var dt = new Date();
document.getElementById("date").innerHTML = dt.toDateString();
console.log(new Date().toDateString(dt, "dddd, mmmmm, dS, yyyy, h:MM:ss TT"));

// the following series of functions change the options and icons according to the button that's clicked
document.getElementById("monday").addEventListener("click", mondayClicked);
  function mondayClicked(){
    document.getElementById("list").innerHTML = "<ul><li>teach yourself a pure barre class</li><li>eat dessert after chapter dinner</li><li>plan your week</li><li>gorcery shopping at trader joe's</ul>";
    console.log(options[prevoption]);
    document.getElementById("image1").src = mondaypics[0];
    document.getElementById("image2").src = mondaypics[1];
    document.getElementById("image3").src = mondaypics[2];
    document.getElementById("image4").src = mondaypics[3];
  }


document.getElementById("tuesday").addEventListener("click", tuesdayClicked);
  function tuesdayClicked(){
    document.getElementById("list").innerHTML = "<ul><li>take a pure barre class</li><li>go to annex</li><li>journal before bed</li><li>watch the bachelorette</li></ul>";
    console.log(options[prevoption]);
    document.getElementById("image1").src = tuesdaypics[0];
    document.getElementById("image2").src = tuesdaypics[1];
    document.getElementById("image3").src = tuesdaypics[2];
    document.getElementById("image4").src = tuesdaypics[3];
  }

document.getElementById("wednesday").addEventListener("click", wednesdayClicked);
  function wednesdayClicked(){
    document.getElementById("list").innerHTML = "<ul><li>take a pure barre class</li><li>have a glass of wine after work</li><li>early bedtime!</li><li>laundry day</li></ul>";
    console.log(options[prevoption]);
    document.getElementById("image1").src = wednesdaypics[0];
    document.getElementById("image2").src = wednesdaypics[1];
    document.getElementById("image3").src = wednesdaypics[2];
    document.getElementById("image4").src = wednesdaypics[3];
  }

document.getElementById("thursday").addEventListener("click", thursdayClicked);
  function thursdayClicked(){
    document.getElementById("list").innerHTML = "<ul><li>take the early pb class</li><li>buy your coffee day</li><li>go to the driving range after class</li><li>grocery shopping</li></ul>";
    console.log(options[prevoption]);
    document.getElementById("image1").src = thursdaypics[0];
    document.getElementById("image2").src = thursdaypics[1];
    document.getElementById("image3").src = thursdaypics[2];
    document.getElementById("image4").src = thursdaypics[3];
  }

document.getElementById("friday").addEventListener("click", fridayClicked);
  function fridayClicked(){
    document.getElementById("list").innerHTML = "<ul><li>take a pure barre class</li><li>long hot shower</li><li>room deep clean</li><li>date with henry</li></ul>";
    console.log(options[prevoption]);
    document.getElementById("image1").src = fridaypics[0];
    document.getElementById("image2").src = fridaypics[1];
    document.getElementById("image3").src = fridaypics[2];
    document.getElementById("image4").src = fridaypics[3];
  }

document.getElementById("saturday").addEventListener("click", saturdayClicked);
  function saturdayClicked(){
    document.getElementById("list").innerHTML = "<ul><li>sleep in</li><li>bake something for breakfast</li><li>go shopping</li><li>watch a movie</li></ul>";
    console.log(options[prevoption]);
    document.getElementById("image1").src = saturdaypics[0];
    document.getElementById("image2").src = saturdaypics[1];
    document.getElementById("image3").src = saturdaypics[2];
    document.getElementById("image4").src = saturdaypics[3];
  }

document.getElementById("sunday").addEventListener("click", sundayClicked);
  function sundayClicked(){
    document.getElementById("list").innerHTML = "<ul><li>make a big brunch</li><li>deep condition hair</li><li>get ahead on homework</li><li>clean the kitchen</li></ul>";
    console.log(options[prevoption]);
    document.getElementById("image1").src = sundaypics[0];
    document.getElementById("image2").src = sundaypics[1];
    document.getElementById("image3").src = sundaypics[2];
    document.getElementById("image4").src = sundaypics[3];
  }
