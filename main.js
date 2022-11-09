document.documentElement.addEventListener("contextmenu", ()=>{
    if(String(document.getSelection()).length != 0){
        return;
    }

    document.documentElement.style.userSelect = "none";
    setTimeout(() => {
        document.documentElement.style.userSelect = "auto";
    }, 1);
});

