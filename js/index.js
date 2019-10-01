//Mouseover
const funbus = document.querySelector(".logo-heading");
funbus.addEventListener("mouseover", () => {
    funbus.style.color = "yellow";
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
        e.style.color = "green";
            }
        ); 
    }
);

    