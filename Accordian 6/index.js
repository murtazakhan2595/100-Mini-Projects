// const items= document.querySelectorAll(".item");
const iconDown= document.querySelectorAll(".icon");

let item;
iconDown.forEach(icon => {
    icon.addEventListener("click",()=>{
        item= icon.closest(".item");
        item.classList.toggle("open");

    });
});




