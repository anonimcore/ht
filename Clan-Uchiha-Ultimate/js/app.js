
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(){
        document.body.style.opacity = 0.6;
        setTimeout(()=>{
            document.body.style.opacity = 1;
        },300);
    });
});
