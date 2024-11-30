var Images = ["image/red_shoes1","image/red_shoes2","image/red_shoes3","image/red_shoes4"];

var img = document.getElementById("img");

var index = 0;

function change(){

    index+=1;

    if(index > 3){

        index = 0;
    }

    img.setAttribute("src", Images[index] + ".png");

    
}

var Username = "Username";

var Password = "Password";



function Submit(){

    var UserInput = document.getElementById("User").value;

    var PassInput = document.getElementById("Pass").value;


    if(UserInput == Username && PassInput == Password){

        window.alert("Correct Username and Password");
    }
    else if(UserInput == Username && PassInput != Password){
             
        window.alert("Correct Username but Incorrect Password");

    }
    else if(UserInput != Username && PassInput == Password){
             
             window.alert("Correct Password but Incorrect Username");
     
         }
    else{

        window.alert("Incorrect Username and Password");

    }
    
    

}