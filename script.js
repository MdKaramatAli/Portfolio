// loader 
let loader = document.querySelector(".loader_box");
window.addEventListener("load", function()
{
    loader.style.display = "flex";
    setInterval(() => {
    loader.style.display = "none";
    }, 1500);
    
})


 // // Main conataint
const main = document.querySelector(".main");
setTimeout(() => {
    main.style.display='block';
}, 1500);

  // // Active tab changer
function openCity(evt, Tab_Name) {
    let i, x, tablinks;
    x = document.getElementsByClassName("Tab");
    for (i = 0; i < x.length; i++) {  
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("same");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(Tab_Name).style.display = "block";
    evt.currentTarget.className += " active";
}



const gear= document.querySelector(".color_changer");
const color_selector= document.querySelector(".color_selector");
const cross = document.querySelector("#cross");

gear.addEventListener("click",function()
{
    gear.style.display="none";
    color_selector.style.display="block";
    off = 1;
})
cross.addEventListener("click",function()
{
    color_selector.style.display="none";
    gear.style.display="block";
})



const colors = document.querySelector(".colors");//main color sample
const backgroundColor = document.querySelectorAll("#color_changer_effect");
const text_color = document.querySelectorAll("#color_changer_effect_text");

for (let i = 0; i < backgroundColor.length; i++)
{
   colors.addEventListener("click", function(x)
   {
        backgroundColor[i].style.backgroundColor = x.target.id;
        backgroundColor[i].style.transition=".8s" ;
    })
}
for (let i = 0; i < text_color.length; i++)
{
   colors.addEventListener("click", function(x)
   {
        text_color[i].style.color = x.target.id ;
        text_color[i].style.transition=".8s" ;
    })
}
const border_Color = document.querySelectorAll("#color_changer_effect_border");
for (let i = 0; i < border_Color.length; i++)
{
   colors.addEventListener("click", function(x)
   {
        border_Color[i].style.borderColor = x.target.id;
        border_Color[i].style.transition=".8s" ;
    })
}
const box_shadow = document.querySelectorAll("#color_changer_effect_box_shadow");
for (let i = 0; i < box_shadow.length; i++)
{
   colors.addEventListener("click", function(x)
   {
        const col = x.target.id;
        box_shadow[i].style.boxShadow = `0px 0px 10px ${col}`;
        box_shadow[i].style.transition=".8s" ;
    })
}




const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
document.body.style.color = "#fff";// default color
document.body.style.backgroundColor = "#111";// default color

const active = document.querySelector(".active"); // for active_tab
const person_photo = document.querySelector(".images");
person_photo.src = "images/dark.jpg";


dark.addEventListener("click", function(){
    dark.style.display = "none";
    light.style.display = "block";
    document.body.style.backgroundColor ="#fff";
    document.body.style.color = "#111";
    active.style.borderColor = "#000";

    person_photo.src = "";
})

light.addEventListener("click", function(){
    light.style.display = "none";
    dark.style.display = "block";
    document.body.style.backgroundColor ="#111";
    document.body.style.color = "#fff";
    active.style.borderColor = "#fff";

    person_photo.src = "images/dark.jpg";
    
})



