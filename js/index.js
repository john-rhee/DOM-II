//Mouseover
const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("mouseover", () => {
    funBus.style.transform = "scale(2)";
    funBus.style.color = "yellow";
    }
);

//Keydown
const wbody = document.querySelector("body");
wbody.addEventListener("keydown", function(){
    wbody.style.backgroundColor = "lightblue";
    }
);

//Wheel
const h2 = document.querySelectorAll("h2");
h2.forEach(e=>{
    e.addEventListener("wheel", ()=>{
        e.style.transform = "scale(1.2)";
        e.style.transition = "all 0.5s";
            }
        ); 
    }
);

//Drag/drop 
const dragImg = document.querySelectorAll("img");
dragImg.forEach(e=>{
e.addEventListener("drag", ()=>{
    e.style.transform = "scale(.01)";
    e.style.transition = "all 1s";
            }
        ); 
    }
);

//Load
const mainNav = document.querySelector(".main-navigation")
window.addEventListener('load', (event) => {
    mainNav.style.backgroundColor = "lightblue";
});

//Focus
const home = document.querySelectorAll("a")
home.forEach(e=>{
e.addEventListener("focus", ()=>{
    e.style.color ="red";
    });
});

//Resize
const dogsRule = document.querySelector(".img-content img")
window.addEventListener('resize', () => {
  dogsRule.src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
});

//Scroll
const font = document.querySelector("body")
window.addEventListener("scroll", () => {
    font.style.fontFamily="Indie Flower, cursive";
  });

//Dblclick & Propagation
const footer = document.querySelector(".footer p")
footer.addEventListener("dblclick", (e) => {
    footer.style.fontWeight="bold";
    footer.style.transform = "scale(5)";
    footer.style.color="pink";
    e.stopPropagation();
});

const footerWhole = document.querySelector(".footer")
const dogsRule2 = document.querySelector(".content-destination img")
footerWhole.addEventListener("dblclick", () => {
    dogsRule2.src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    
});

//Click
const button = document.querySelectorAll(".btn");
button.forEach(e=>{
    e.addEventListener("click", ()=>{
        e.textContent ="Nope !";
        const newtext = document.createElement("p");
        console.log(newtext);
        newtext.textContent = " Button !"
        e.append(newtext);
        });
    });

//PreventDefault
const stopRefresh = document.querySelector(".nav-link");
stopRefresh.addEventListener("click", (e) => {
  e.preventDefault();
});