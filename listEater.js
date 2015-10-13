
var fruits = ["Any Item you want"];
var totalClicks = 0;
var randomMultiplier = 47; // must be 1 more than number of cases
document.getElementById("list").innerHTML = fruits;
function randomAdd(){
    btnCount();
   callFruit();
   var random = function(){
   var ran = Math.floor(Math.random() * randomMultiplier);
   return Math.floor(Math.random() * ran); // added second math.random to decrease odds of same item back to back
  }
  var r = random();
  switch(r) {
/*  quick add case.
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
        callFruit();

}};

function btnCount(){
    totalClicks += 1;
   document.getElementById("clicks").innerHTML =  totalClicks ;
};


function callFruit(){
    document.getElementById("list").innerHTML = fruits.join(",  ") ;
};
function chomp() {
    fruits.shift();
    btnCount();
    callFruit();
};

function addItem(item){
    return fruits.push(item);
};

function addInput1(){
    var i = prompt("Please tell me what to add.")
    if (i === null){
        return;
    }else{
      addItem(i);
      btnCount();
      callFruit();
    }
};

// ----------------------------new


