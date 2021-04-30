let sideBar = false

function sideBarShow(){
    if(sideBar === false) {
      document.querySelector('#sidebar').style.display = ''
      sideBar = true } else {
        document.querySelector('#sidebar').style.display = 'none'
        sideBar = false }  
}


function showValueBox(){
    document.querySelector('#box-amount').style.display = ''
}

function closShowValueBox(){
    document.querySelector('#box-amount').style.display = 'none'
}


let expenValue = 0


function addValue(){
    
    expenValue = expenValue + Number(document.querySelector("#valueinput").value)
    console.log(typeof(document.querySelector("#valueinput").value))
    console.log(expenValue)
    document.querySelector('#expenvalue').innerHTML = `- ${expenValue}`
    document.querySelector('#box-amount').style.display = 'none'



    







}
