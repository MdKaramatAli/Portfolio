// loader 
let loader = document.querySelector(".loader_box");
window.addEventListener("load", function()
{
    loader.style.display = "flex";
    setInterval(() => {
    loader.style.display = "none";
    }, 2000);
})

// Main content
const main = document.querySelector(".main");
setTimeout(() => {
    main.style.display='block';
}, 1300);





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

const main_container_photo = document.querySelector(".main_container_photo");
const img_cont = document.createElement('img');
img_cont.src = "https://images.unsplash.com/photo-1629613378258-fa6b82a22dcf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
main_container_photo.appendChild(img_cont);


dark.addEventListener("click", function(){
    dark.style.display = "none";
    light.style.display = "block";
    document.body.style.backgroundColor ="#fff";
    document.body.style.color = "#111";

    // creating image    
    img_cont.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    main_container_photo.appendChild(img_cont);
})

light.addEventListener("click", function(){
    light.style.display = "none";
    dark.style.display = "block";
    document.body.style.backgroundColor ="#111";
    document.body.style.color = "#fff";

    // creating image 
    img_cont.src = "https://images.unsplash.com/photo-1629613378258-fa6b82a22dcf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
    main_container_photo.appendChild(img_cont);
})

