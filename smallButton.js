const smallContactButton = document.getElementById('contactButton-small')

smallContactButton.addEventListener("click",
    ()=>{
        smallContactButton.classList.toggle("contactButton-small-active");
        if(smallContactButton.classList.contains("contactButton-small-active")){
            setTimeout(()=>{smallContactButton.classList.toggle("contactButton-small-active")}, 5000)
        }
    }
)