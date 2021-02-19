"use strict"

testing.addEventListener("click", () =>){
    if(main.classList.contains("theme-1")){
        main.classList.add("theme-2");
        main.classList.remove("theme-1");
    }else{
        main.classList.add("theme-1");
        main.classList.remove("theme-2")
    }
}