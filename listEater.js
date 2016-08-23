/*When I first started this it was for a shopping quick list, But evoled into this Funny game*/

/*     ------------------ This top portion of comments is wish list-----------
*    Change the imput from standard to modal imput
*    Animation to words coming and going.
*    want to add a random sound to the buttons.
*
*      --------------- This portion is for needed fixed or changes
*   fix  when additem is left blank and you click ok instead of cancel it leaves a ", " - should be null
*
*/
const mymodal = $('#myModal');
var fruits = [""];
var totalClicks = 0;
var randomMultiplier = 70; // must be 1 more than number of cases
var mess = "Sorry, I didn't get that. Try again.";
document.getElementById("list").innerHTML = fruits;  // this shows the content
// --------let the functions start ----------
function randomAdd(){
   callFruit();
   btnCount();
    var random = function(){
        var ran = Math.floor(Math.random() * randomMultiplier);
      //  return Math.floor(Math.random() * ran); // added second math.random to decrease odds of same item back to back
          return ran;
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
            addItem("apple");
            callFruit();
            break;
        case 1:
            addItem("toilet seat");
            callFruit();
            break;
        case 2:
            addItem("kitty litter");
            callFruit();
            break;
        case 3:
            addItem("wooden block");
            callFruit();
            break;
        case 4:
            addItem("garage door");
            callFruit();
            break;
        case 5:
            addItem("bunny Slippers");
            callFruit();
            break;
        case 6:
            addItem("fart");
            callFruit();
            break;
        case 7:
            addItem("dirty sock");
            callFruit();
            break;
        case 8:
            addItem("cow");
            callFruit();
            break;
        case 9:
            addItem("ewok");
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
            addItem("Fizgig");
            callFruit();
            break;
        case 13:
            addItem("Small statue of Elvis");
            callFruit();
            break;
        case 14:
            addItem("goat cheese");
            callFruit();
            break;
        case 15:
            addItem("purple people eater");
            callFruit();
            break;
        case 16:
            addItem("Lego man");
            callFruit();
            break;
        case 17:
            addItem("ocelot");
            callFruit();
            break;
         case 18:
            addItem("spider");
            callFruit();
            break;
        case 19:
            addItem("booger");
            callFruit();
            break;
        case 20:
            addItem("Yoda");
            callFruit();
            break;
        case 21:
            addItem("pepper spray");
            callFruit();
            break;
        case 22:
            addItem("bowl");
            callFruit();
            break;
        case 23:
            addItem("does");
            callFruit();
            break;
        case 24:
            addItem("beaver");
            callFruit();
            break;
        case  25:
            addItem("coffee");
            callFruit();
            break;
        case 26 :
            addItem("monocle");
            callFruit();
            break;
        case 27 :
            addItem("Cartman");
            callFruit();
            break;
        case 28 :
            addItem("ran");
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
            addItem("aardvark");
            callFruit();
            break;
        case 33 :
            addItem("peanut butter");
            callFruit();
            break;
        case 34 :
            addItem("sloth");
            callFruit();
            break;
        case 35 :
            addItem("licked");
            callFruit();
            break;
        case 36 :
            addItem("tree");
            callFruit();
            break;
        case 37 :
            addItem("coddled");
            callFruit();
            break;
        case 38 :
            addItem("hairball");
            callFruit();
            break;
        case 39 :
            addItem("toe");
            callFruit();
            break;
        case 40 :
            addItem("tac");
            callFruit();
            break;
        case 41 :
            addItem("tic");
            callFruit();
            break;
        case 42 :
            addItem("glasses");
            callFruit();
            break;
        case 43 :
            addItem("shades");
            callFruit();
            break;
        case 44 :
            addItem("dinosaur");
            callFruit();
            break;
        case 45 :
            addItem("deep");
            callFruit();
            break;
        case 46 :
            addItem("potato");
            callFruit();
            break;
        case  47:
            addItem("a");
            callFruit();
            break;
        case  48:
            addItem("and");
            callFruit();
            break;
        case  49:
            addItem("the");
            callFruit();
            break;
        case  50:
            addItem("do");
            callFruit();
            break;
        case  51:
            addItem("also");
            callFruit();
            break;
        case  52:
            addItem("can");
            callFruit();
            break;
        case  53:
            addItem("will");
            callFruit();
            break;
        case  54:
            addItem("high");
            callFruit();
            break;
        case  55:
            addItem("little");
            callFruit();
            break;
        case  56:
            addItem("last");
            callFruit();
            break;
        case  57:
            addItem("young");
            callFruit();
            break;
        case  58:
            addItem("bad");
            callFruit();
            break;
        case  59:
            addItem("small");
            callFruit();
            break;
        case  60:
            addItem("old");
            callFruit();
            break;
        case  61:
            addItem("own");
            callFruit();
            break;
        case  62:
            addItem("on");
            callFruit();
            break;
        case  63:
            addItem("wearing");
            callFruit();
            break;
        case  64:
            addItem("have");
            callFruit();
            break;
        case  65:
            addItem("with");
            callFruit();
            break;
        case  66:
            addItem("over");
            callFruit();
            break;
        case  67:
            addItem("Jake Roper");
            callFruit();
            break;
        case  68:
            addItem("Kevin Lieber");
            callFruit();
            break;
        case  69:
            addItem("hot");
            callFruit();
            break;
        default:
            break;
    }
    scrollUp();
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
    document.getElementById("list").innerHTML = fruits.join("  ") ;
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
      scrollUp();
    }
};
// --- scroll animation to keep box ontop of nav
function scrollUp(){
    window.scrollTo(0, document.body.scrollHeight);
}

// ---------------------------- modal operations

function showModal(){
    mymodal.find('#message').text(mess);
        mymodal.modal('show');
}

// ========== add one item to the list to start.
randomAdd();

//=======END OF DOC============
 $(document).ready(function() {
    console.log('Document Fully loaded');
 });
