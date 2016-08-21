/*When I first started this it was for a shopping quick list, But evoled into this Funny game*/

/*     ------------------ This top portion of comments is wish list-----------
*
*    Animation to words coming and going.
*    want to add a random sound to the buttons.
*      --------------- This portion is for needed fixed or changes
*   fix  when additem is left blank and you click ok instead of cancel it leaves a ", " - should be null
*
*/
var fruits = ["Any Item you want"];
var totalClicks = 0;
var randomMultiplier = 47; // must be 1 more than number of cases
var mymodal = $('#myModal');
var mess = "Sorry, I didn't get that. Try again.";
document.getElementById("list").innerHTML = fruits;  // this shows the content
function randomAdd(){
   callFruit();
   btnCount();
    var random = function(){
        var ran = Math.floor(Math.random() * randomMultiplier);
        return Math.floor(Math.random() * ran); // added second math.random to decrease odds of same item back to back
    };
  var r = random();
    switch(r) {
    /*  quick add case words.                  copy paste to quickly add new cases
       case  :
            addItem("");
            callFruit();
            break;
    */
        case 0:
            addItem("Apple");
            callFruit();
            break;
        case 1:
            addItem("Toilet seat");
            callFruit();
            break;
        case 2:
            addItem("Kitty litter");
            callFruit();
            break;
        case 3:
            addItem("Wooden block");
            callFruit();
            break;
        case 4:
            addItem("Garage door ");
            callFruit();
            break;
        case 5:
            addItem("Bunny Slippers");
            callFruit();
            break;
        case 6:
            addItem("Fart");
            callFruit();
            break;
        case 7:
            addItem("Dirty Sock");
            callFruit();
            break;
        case 8:
            addItem("Cow");
            callFruit();
            break;
        case 9:
            addItem("Ewok");
            callFruit();
            break;
        case 10:
            addItem("Sticky Joe");
            callFruit();
            break;
        case 11:
            addItem("42");
            callFruit();
            break;
        case 12:
            addItem("FizGig");
            callFruit();
            break;
        case 13:
            addItem("Small statue of Elvis");
            callFruit();
            break;
        case 14:
            addItem("Goat Cheese");
            callFruit();
            break;
        case 15:
            addItem("Purple People Eater");
            callFruit();
            break;
        case 16:
            addItem("Lego man");
            callFruit();
            break;
        case 17:
            addItem("Ocelot");
            callFruit();
            break;
         case 18:
            addItem("Spider");
            callFruit();
            break;
        case 19:
            addItem("Booger");
            callFruit();
            break;
        case 20:
            addItem("Yoda");
            callFruit();
            break;
        case 21:
            addItem("Pepper spray");
            callFruit();
            break;
        case 22:
            addItem("Bowl");
            callFruit();
            break;
        case 23:
            addItem("Yoda");
            callFruit();
            break;
        case 24:
            addItem("Beaver");
            callFruit();
            break;
        case  25:
            addItem("Coffee");
            callFruit();
            break;
        case 26 :
            addItem("Monocle");
            callFruit();
            break;
        case 27 :
            addItem("Cartman");
            callFruit();
            break;
        case 28 :
            addItem("Ran");
            callFruit();
            break;
        case 29 :
            addItem("The Rock");
            callFruit();
            break;
        case 30 :
            addItem("Vsauce");
            callFruit();
            break;
        case 31 :
            addItem("Michael Stevens");
            callFruit();
            break;
        case 32 :
            addItem("Aardvark");
            callFruit();
            break;
        case 33 :
            addItem("Peanut butter");
            callFruit();
            break;
        case 34 :
            addItem("Sloth");
            callFruit();
            break;
        case 35 :
            addItem("Licked");
            callFruit();
            break;
        case 36 :
            addItem("Tree");
            callFruit();
            break;
        case 37 :
            addItem("Coddled");
            callFruit();
            break;
        case 38 :
            addItem("Hairball");
            callFruit();
            break;
        case 39 :
            addItem("Toe");
            callFruit();
            break;
        case 40 :
            addItem("Tac");
            callFruit();
            break;
        case 41 :
            addItem("Tic");
            callFruit();
            break;
        case 42 :
            addItem("Glasses");
            callFruit();
            break;
        case 43 :
            addItem("Shades");
            callFruit();
            break;
        case 44 :
            addItem("Dinosaur");
            callFruit();
            break;
        case 45 :
            addItem("Deep");
            callFruit();
            break;
        case 46 :
            addItem("Potatoe");
            callFruit();
            break;
        default:
            break;
    }
};  // End of randomAdd()
/*  quick case add messages.
    case * :
            document.getElementById("clicks").innerHTML =  totalClicks + " times" ;
            mess = "";
            showModal();
            break;
*/
function btnCount(){
    totalClicks += 1 ;
    switch(totalClicks){
        case 1 :
            document.getElementById("clicks").innerHTML =  totalClicks + " time" ;
            break;
        case 8:
            document.getElementById("clicks").innerHTML =  totalClicks + " times" ;
            mess = "OMG, What random words!";
            showModal();
            break;
        case 19:
            document.getElementById("clicks").innerHTML =  totalClicks + " times" ;
            mess = "Have you see Tic Tac Toe yet?";
            showModal();
            break;
        case 30 :
            document.getElementById("clicks").innerHTML =  totalClicks + " times" ;
            mess = "WOW.. you've clicked 30 times already. ";
            showModal();
            break;
        case 48 :
            document.getElementById("clicks").innerHTML =  totalClicks + " times" ;
            mess = "Because of doubles you still haven't seen all the words yet.";
            showModal();
            break;
        default :
            document.getElementById("clicks").innerHTML =  totalClicks + " times" ;
            break;
    };
};
function callFruit(){
    document.getElementById("list").innerHTML = fruits.join(",  ") ;
};
function chomp() {
    fruits.shift();
    callFruit();
    btnCount();
};
function addItem(item){
    return fruits.push(item);
};
function addInput1(){
    var i = prompt("Please tell me what to add.")
    if (i === null){              //  need to keep function from adding " , "  If you click ok on input vs cancel
        showModal();
    }else{
      addItem(i);
      callFruit();
      btnCount();
    }
};


// ---------------------------- modal operations

function showModal(){
    mymodal.find('#message').text(mess);
        mymodal.modal('show');
}

//=======END OF DOC============
 $(document).ready(function() {
    console.log('Document Fully loaded');
 });
