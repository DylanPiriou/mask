const mask = document.querySelector(".mask");
let isHovered = false;

window.addEventListener("mousemove", (e) => {
    let { clientX } = e;
    let { clientY } = e;
    if(isHovered){
        mask.style.setProperty("-webkit-mask-size", "400px 400px");
        mask.style.setProperty("mask-size", "400px 400px");
        mask.style.setProperty("-webkit-mask-position", `${clientX - 200}px ${clientY - 200}px`);
        mask.style.setProperty("mask-position", `${clientX - 200}px ${clientY - 200}px`);
    } else {
        mask.style.setProperty("-webkit-mask-size", "40px 40px");
        mask.style.setProperty("mask-size", "40px 40px");
        mask.style.setProperty("-webkit-mask-position", `${clientX - 20}px ${clientY - 20}px`);
        mask.style.setProperty("mask-position", `${clientX - 20}px ${clientY - 20}px`);
    }
    
});

const txt = document.querySelector("p")
txt.addEventListener("mouseover", (e) => {
    isHovered = true;
})
txt.addEventListener("mouseleave", (e) => {
    isHovered = false;
})
