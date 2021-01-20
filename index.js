//scroll
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let navbar = document.getElementById("navbar");
    if  (scroll>0) {
        navbar.style.backgroundColor="#6f5a5a";
    } else{
        navbar.style.backgroundColor="transparent";
    }
});

//carousel
let slI=-1;
let flag=false;
auto_Carousel();
//auto next
async function auto_Carousel(){
    if (flag == false) {
        let elements = await document.getElementsByClassName("carousel-element");
        let show_elements = await document.getElementsByClassName("carousel-show");
        slI += 1;
        if (slI >= elements.length) slI = 0;
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("carousel-element-trigged");
            show_elements[i].style.display = "none";
        }
        elements[slI].className += " carousel-element-trigged";
        show_elements[slI].style.display = "flex";
    }
    setTimeout(auto_Carousel, 10000);
}
//when hover
carousel_Hover();
async function carousel_Hover(){
    let elements=await document.getElementsByClassName("carousel-element");
    let show_elements=await document.getElementsByClassName("carousel-show");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", () => {
            slI = i;
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove("carousel-element-trigged");
                show_elements[i].style.display = "none";
            }
            elements[slI].className += " carousel-element-trigged";
            show_elements[slI].style.display = "flex";
            flag=true;
        });
        elements[i].addEventListener("mouseleave",()=>{
            flag=false;
        });
    }
}

//slide
function change_Transform(name,position){
    document.getElementById("change-name").innerText=name;
    document.getElementById("change-div").style.transform=position;
}