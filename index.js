document.getElementById("picbutton").addEventListener("click", buttonClicked);

  const photoArray = ["assets/pic1.jpeg", "assets/pic2.jpg" , "assets/pic3.jpeg" , "assets/pic4.jpeg" , "assets/pic5.jpeg"];
    let piccount = 0;

  function buttonClicked(){
    console.log(pics[piccount]);
    document.getElementById("newpic").src = photoArray[piccount];
    if(piccount>=4){
      piccount = 0;
    }else{
      piccount++;
    }
  }
