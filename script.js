const keyboard = [
    "~","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "Backspace",
    "Tab","q", "w", "e", "r", "t","y",  "u", "i", "o", "p", "[","]","/","Del","CapsLk",
    "a", "s", "d", "f", "g", "h", "j", "k", "l",";","'","Enter","Shift","/",
    "z","x", "c", "v", "b", "n", "m", ",",".","/","↑","Shft","Ctrl","Win","Alt"," ","Alt","Ctrl","←","↓","→"
];
function init(){
    let out = '';
    for(let i = 0; i < keyboard.length; i++){
        if(i == 14 || i == 29 || i == 42|| i == 56){
            out +='<div class="clearfix"></div>';  //перенос
        }
       
        out +='<div class="k-key" data="' + keyboard[i] + '">'+keyboard[i]+'</div>'; // создание элементов div
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
    
  (function () {for (var btns = document.getElementById ('keyboard').getElementsByTagName ('div'),
  j = 0, J = btns.length; j < J; j++) with (btns [j]) if (!id)
onclick = function () {document.getElementById('windowScreen').value += this.innerHTML;
this.classList.add('active');
}}) ();
  

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
    var valu=document.getElementById('windowScreen').value;
    document.getElementById('windowScreen').value=valu.toUppercase();
     
    var valu=document.getElementById('windowScreen').value;
/*
    if(FcapsLock=='0'){
        FcapsLock=='1';
    }
    else if(FcapsLock=='1'){
        FcapsLock=='0';
    }
    */
}


//Clear
function funcClear(){
    var valu=document.getElementById('windowScreen').value='';
    FcapsLock='0';
    Fshift='0';
}

//Shift
/*
document.getElementById('sh').addEventListener('click',funcSift)
function funcShift(){

    (function () {for (var btns = document.getElementById ('keyboard').getElementsByTagName ('div'),
    j = 0, J = btns.length; j < J; j++) with (btns [j]) if (!id)
onclick = function () {var text=document.getElementById('windowScreen').value += this.innerHTML;
text.toUppercase();
this.classList.add('active');
}}) ();
    
    /*
    if(Fshift=='0'){
        Fshift=='1';
    }
    else if(Fshift=='1'){
        Fshift=='0';
    }
}
*/
//Enter
function funcEnter(){
    
    var valu=document.getElementById('windowScreen').value;
    document.getElementById('windowScreen').value=valu+"                                                                                  ";
     
    var valu=document.getElementById('windowScreen').value;
   /*
    if(valu==''){
        alert('Not inserted: Emply Value');
    }
    else{
        alert('Data Inserted: '+valu);
    }
    */
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








