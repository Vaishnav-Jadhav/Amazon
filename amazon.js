let categories=["All","Electronics","Footwere","Fashion","Style"];

function bodyLoad()
{
    loadCategories();
}

function loadCategories()
{
    for(let value of categories)
    {
        let option=document.createElement("option");
        option.value=value;
        option.text=value;

        document.getElementById("selectCategory").appendChild(option);
    }
}


let menuIcon=document.getElementById("menu");
menuIcon.addEventListener("click",function(){
    let menu=document.getElementById("hiddenMenuBar");
    let dark=document.getElementById("dark");

    menu.style.position="absolute";
    menu.style.left="0px";
    dark.style.display="block";
    menu.style.transition="all ease 0.3s";
    dark.style.transition="all ease 4s";
})

let btn=document.getElementById("btnClose");
btn.addEventListener("click",function(){
    let menu=document.getElementById("hiddenMenuBar");
    let dark=document.getElementById("dark");

    menu.style.position="absolute";
    menu.style.left="-100%";
    dark.style.display="none";
    menu.style.transition="all ease 1s";
});

function scrollLeft()
{
    let left=document.getElementById()
}


let togglerBtn=document.getElementById("primeToggleBtn");
let toggleImg=document.getElementById("primeToggle");
let bgDark=document.getElementById("darkBg");


togglerBtn.addEventListener("mouseover",function(){
        toggleImg.style.display="block";
        bgDark.style.display="block";
})

togglerBtn.addEventListener("mouseout",function(){
         toggleImg.style.display="none";
         bgDark.style.display="none";
})