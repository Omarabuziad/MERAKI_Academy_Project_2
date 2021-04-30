let sideBar = false

function sideBarShow(){
    if(sideBar === false) {
      document.querySelector('#sidebar').style.display = ''
      sideBar = true } else {
        document.querySelector('#sidebar').style.display = 'none'
        sideBar = false }  
}
