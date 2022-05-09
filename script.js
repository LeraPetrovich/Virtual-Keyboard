const keyboard = [
    "~","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "Backspace",
    "Tab","q", "w", "e", "r", "t","y",  "u", "i", "o", "p", "[","]","/","Del","CapsLk",
    "a", "s", "d", "f", "g", "h", "j", "k", "l",";","'","Enter","Shift","/",
    "z","x", "c", "v", "b", "n", "m", ",",".","/","↑","Shft","Ctrl","Win","Alt"," ","Alt","Ctrl","←","↓","→"
];
// заполнение клавиатуры
function init(){
    let out = '';
    for(let i = 0; i < keyboard.length; i++){
        if(i == 14 || i == 29 || i == 42|| i == 56){
            out +='<div class="clearfix"></div>';  //перенос
        }
       
        out +='<div class="k-key" data="' + keyboard[i] + '" >'+keyboard[i]+'</div>'; // создание элементов div
    }
    document.querySelector('#keyboard').innerHTML = out;


}           
init();
document.onkeypress = function (event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('#keyboard .k-key').forEach(function(element){
        element.classList.remove('active');
    });
    document.querySelector('#keyboard .k-key[data="' +event.keyCode + '"]').classList.add('active');
    
}
document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
element.onclick = function(event){
    document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
        element.classList.remove('active');
    });
    let code  = this.getAttribute('data');
    this.classList.add('active');
    console.log(code);
}
});

  //вывод на элемент texteria

  (function () {
      for (var btns = document.getElementById ('keyboard').getElementsByTagName ('div'),
  j = 0, J = btns.length; j < J; j++) with (btns [j])
if(j<13||j>15){
    if(j<29||j>31){
        if(j<43||j>45){
            if(j<58||j>62){
                if(j<64||j>65){
  if (!id)
onclick = function () {document.getElementById('windowScreen').value += this.innerHTML;
this.classList.add('active');}
}}}}}}) ();

document.addEventListener ('keydown', function (event){
  console.log (event);
}); 
var evt = new KeyboardEvent('keydown', {'keyCode':65, 'which':65});
document.dispatchEvent(evt);



var xy='';
var FcapsLock='0';
var Fshift='0';

//BackSpace
function funcDel(){
    var valu=document.getElementById('windowScreen').value;
    var x= document.getElementById('windowScreen').value.length;
var y=1;
var z=x-y;
document.getElementById('windowScreen').value=valu.slice(0,z);


}
var capslock = false;
//Capslock
function funcCL(){
    var color  = ['mediumslateblue','darkgrey'];
    if (document.querySelector("[data='CapsLk']").style.background != color[0]){
        document.querySelector("[data='CapsLk']").style.background = color[0];
        (function () {
            for (var btns = document.getElementById ('keyboard').getElementsByTagName ('div'),
        j = 0, J = btns.length; j < J; j++) with (btns [j])
      if(j<13||j>15){
          if(j<29||j>31){
              if(j<43||j>45){
                  if(j<58||j>62){
                      if(j<64||j>65){
        if (!id)
      onclick = function () {document.getElementById('windowScreen').value += this.innerHTML.toUpperCase();
      this.classList.add('active');
      
    }
      }}}}}}) ();
    }
    else{
        document.querySelector("[data='CapsLk']").style.background = color[1];
        (function () {
            for (var btns = document.getElementById ('keyboard').getElementsByTagName ('div'),
        j = 0, J = btns.length; j < J; j++) with (btns [j])
      if(j<13||j>15){
          if(j<29||j>31){
              if(j<43||j>45){
                  if(j<58||j>62){
                      if(j<64||j>65){
        if (!id)
      onclick = function () {document.getElementById('windowScreen').value += this.innerHTML;
      this.classList.add('active');
      
    }
      }}}}}}) ();
    }

   
  
 
    
} //при повторном нажатии не работает 


//Clear
function funcClear(){
    var valu=document.getElementById('windowScreen').value='';
    FcapsLock='0';
    Fshift='0';
}

//Shift
function funcShift(){
}


//Enter
function funcEnter(){
    var valu=document.getElementById('windowScreen').value;
    document.getElementById('windowScreen').value=valu+"                                                                                  ";
     
    var valu=document.getElementById('windowScreen').value;
  
}
//Tab
function funcTab(){
    var valu=document.getElementById('windowScreen').value;
    document.getElementById('windowScreen').value=valu+' ';
}

//Space
function funcSpase(){
    var valu =document.getElementById('windowScreen').value;
    document.getElementById('windowScreen').value=valu+' ';
}


/// поиск элемента по data и присвоение ему каких либо событий


const del = document.querySelector("[data='Del']");
del.addEventListener('click',funcClear);
const Backspace = document.querySelector("[data='Backspace']");
Backspace.addEventListener('click',funcDel);
const CapsLk = document.querySelector("[data='CapsLk']");
CapsLk.addEventListener('click',funcCL);


const Enter = document.querySelector("[data='Enter']");
Enter.addEventListener('click',funcEnter);
const Tab = document.querySelector("[data='Tab']");
Tab.addEventListener('click',funcTab);
const Shift = document.querySelector("[data='Shift']");
Shift.addEventListener('click',funcShift);


//сочетание клавишь
var ispressbtn=false;
let flag = false;
document.onkeydown=function(event){
    
    if(event.code='Ctrl') flag=true;
    if(event.code='AltLeft'&& flag)
    { flag=false;
         //даёт возможность при удерживании срабатывать только один раз
     if(!ispressbtn){
    const keyboard = [
        "ё","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "Backspace",
    "Tab","й", "ц", "у", "к", "е","н",  "г", "ш", "щ", "з", "[","]","/","Del","CapsLk",
    "ф", "ы", "в", "а", "п", "р", "о", "л", "д",";","'","Enter","Shift","/",
    "я","ч", "с", "м", "и", "т", "ь", "б","ю","/","↑","Shft","Ctrl","Win","Alt"," ","Alt","Ctrl","←","↓","→"
    ];
    function init(){
        let out = '';
        for(let i = 0; i < keyboard.length; i++){
            if(i == 14 || i == 29 || i == 42|| i == 56){
                out +='<div class="clearfix"></div>';  //перенос
            }
           
            out +='<div class="k-key" data="' + keyboard[i] + '" >'+keyboard[i]+'</div>'; // создание элементов div
        }
        document.querySelector('#keyboard').innerHTML = out;
    
    
    }           
    init();
    document.onkeypress = function (event) {
        console.log(event.code);
        console.log(event.keyCode);
        document.querySelectorAll('#keyboard .k-key').forEach(function(element){
            element.classList.remove('active');
        });
        document.querySelector('#keyboard .k-key[data="' +event.keyCode + '"]').classList.add('active');
        
    }
    document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
    element.onclick = function(event){
        document.querySelectorAll('#keyboard .k-key').forEach(function (element) {
            element.classList.remove('active');
        });
        let code  = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
    }
    });
    
      //вывод на элемент texteria
    
      (function () {
          for (var btns = document.getElementById ('keyboard').getElementsByTagName ('div'),
      j = 0, J = btns.length; j < J; j++) with (btns [j])
    if(j<13||j>15){
        if(j<29||j>31){
            if(j<43||j>45){
                if(j<58||j>62){
                    if(j<64||j>65){
      if (!id)
    onclick = function () {document.getElementById('windowScreen').value += this.innerHTML;
    this.classList.add('active');}
    }}}}}}) ();
    
    document.addEventListener ('keydown', function (event){
      console.log (event);
    }); 
    var evt = new KeyboardEvent('keydown', {'keyCode':65, 'which':65});
    document.dispatchEvent(evt);
    
    const del = document.querySelector("[data='Del']");
del.addEventListener('click',funcClear);
const Backspace = document.querySelector("[data='Backspace']");
Backspace.addEventListener('click',funcDel);
const CapsLk = document.querySelector("[data='CapsLk']");
CapsLk.addEventListener('click',funcCL);


const Enter = document.querySelector("[data='Enter']");
Enter.addEventListener('click',funcEnter);
const Tab = document.querySelector("[data='Tab']");
Tab.addEventListener('click',funcTab);
const Shift = document.querySelector("[data='Shift']");
Shift.addEventListener('click',funcShift);

}}
else{
    ispressbtn=false;
    
}





}
//работает построение клавы, но не работает вывод элементов и обратное переключение 





  