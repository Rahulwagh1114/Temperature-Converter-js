

let input=document.querySelector(".input");
let sel=document.querySelector(".sel")
let display=document.querySelector(".showDiv");
let btn=document.querySelector("button");

btn.addEventListener("click",()=>{
let value=Number(input.value);
let show;

if(sel.value==="fah"){
    show=(value*9/5)+32;
    display.innerText=show.toFixed(2)+ " °F";
} else{
    show=(value-32)*5/9;
    display.innerText=show.toFixed(2)+"°C";
}
});








