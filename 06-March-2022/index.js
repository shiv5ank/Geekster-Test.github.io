function Apple(){
    var iphone=document.getElementById("apple");
    if(iphone.classList.contains("apple")){
        iphone.classList.replace("apple","apple_specs");
    }else{
        iphone.classList.replace("apple_specs","apple");
    }
}
function Samsung(){
    var sam=document.getElementById("samsung");
    if(sam.classList.contains("samsung")){
        sam.classList.replace("samsung","samsung_specs");
    }else{
        sam.classList.replace("samsung_specs","samsung");
    }
}
function Mi(){
    var redmi=document.getElementById("mi");
    if(redmi.classList.contains("mi")){
        redmi.classList.replace("mi","mi_specs");
    }else{
        redmi.classList.replace("mi_specs","mi");
    }
}
function Vivo(){
    var viv=document.getElementById("vivo");
    if(viv.classList.contains("vivo")){
        viv.classList.replace("vivo","vivo_specs");
    }else{
        viv.classList.replace("vivo_specs","vivo");
    }
}