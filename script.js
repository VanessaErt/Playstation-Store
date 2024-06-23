const menulist = document.getElementById("menu-list")
    menulist.style.maxHeight = "0px"
    let timer; 

    function showMenu() {
        clearTimeout(timer)
        console.log(menulist.style.maxHeight)
        if(menulist.style.maxHeight == "0px"){
            menulist.style.maxHeight = "120px"
        } else {
            menulist.style.maxHeight = "0px"
        }
        timer = setTimeout(function() {
            if(menulist.style.maxHeight == "120px"){
            menulist.style.maxHeight = "0px"
        }
        }, 4000)
}   