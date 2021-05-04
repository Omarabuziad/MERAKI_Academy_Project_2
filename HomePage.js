function homeShow(){
    $("#pg1").show()
    $("#pg2").hide()
    if(localStorage.getItem("hide") === "true"){
        $("#pg2").show()
        $("#pg1").hide()
    }
}

homeShow()

function datemain(){
 now = new Date();

 const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 let month = now.getMonth();
 let year = now.getFullYear();
 

 localStorage.setItem("lsDatee" , (months[month] + " " + year) )
 $("#dateSpan").text(localStorage.getItem("lsDatee"))

}

$("#dateSpan").text(localStorage.getItem("lsDatee"))







function pageOne(){
  localStorage.setItem("curr" , $('#bg1sel1').val())
  localStorage.displayName = $('#inp1').val()+"'s" + ' Wallet'

 $("#pg1").hide()
 $('#pg2').show() 
 datemain()
 localStorage.hide = true
}

$('#curr').text(localStorage.getItem("curr"))
$('#currInc').text(localStorage.getItem("curr"))
$("#pg2name").html(localStorage.getItem("displayName"))




let sideBar = false

function sideBarShow(){
    if(sideBar === false) {
      $('#sidebar').show()
      sideBar = true } else {
        $('#sidebar').hide()
        sideBar = false }  
}



let j
function showValueBoxExp(){
    j = event.target
    $('#categh2').html(j.id)
    $('#box-amount').show()
}


function closShowValueBoxExp(){
    $('#box-amount').hide()
}


let u
function showValueBoxInc(){
    u = event.target
    $('#categh2Inc').html(u.id)
    $('#box-amountInc').show()
}

function closShowValueBoxInc(){
    $('#box-amountInc').hide()
}






function moveToCategory(){
    $('#pg3').hide()
    $('#pg2D1').show()
    $('#sidebar').hide()
}

function moveToTransction(){
    $('#pg3').show()
    $('#sidebar').hide()
   
}



let expenValue = 0
function addValue(){ 
    expenValue = expenValue + Number($("#valueinput").val())
    $('#expenvalue').html(`- ${expenValue}`) 
    $('#box-amount').hide()
    availableBudget()
}


let incomeValue = 0
function addIncomeValue(){ 
    incomeValue = incomeValue + Number($("#valueinputInc").val())
    $('#incomevalue').html(`+ ${incomeValue}`)
    $('#box-amountInc').hide()
    availableBudget()
}


let availableBudget1 = 0
function availableBudget(){
    availableBudget1 = incomeValue - expenValue
    $('#budget').html(availableBudget1)
    if(availableBudget1 < 0 ) {
        sound2()
        alert("Careful from bankrupt , you exceed the limits")
        setTimeout(function(){ sound3() }, 1750);

    }
}


















const inCategory = []
const inDate = []
const inValue = []
const inNote = []
const inulCategory = $("#inluCategory")
const inulDate = $("#inluDate")
const inulValue = $("#inluValue")
const inulNote = $("#inluNote")

const renderIncomeList = function() {
    for (let i = 0; i < inCategory.length; i++) {
        let li = $("<li></li>")
        li.text(inCategory[i])
        inulCategory.append(li)

        let cB = $("<button></button>")
        cB.text('X')
        cB.show("inline-block")
        cB.addClass("delbot")
        cB.on("click", ()=> { deleteIncomeInformation(i) });
        li.append(cB) 
    }
    
    


    for (let i = 0; i < inDate.length; i++) {
        let li = $("<li></li>")
        li.text(inDate[i])
        inulDate.append(li)

    }

    for (let i = 0; i < inValue.length; i++) {
        let li = $("<li></li>")
        li.text(inValue[i])
        inulValue.append(li)
        
    }

    for (let i = 0; i < inNote.length; i++) {
        let li = $("<li></li>")
        li.text(inNote[i])
        inulNote.append(li)

       
    }

}

const addToIncomeList = function() {
    

    let cat = u.id
    let date = $('#dateinputInc').val()
    let value = $('#valueinputInc').val()
    let note = $('#noteinputInc').val()

    inCategory.push(cat)
    inDate.push(date)
    inValue.push(value)
    inNote.push(note)


    
    inulCategory.html('')
    inulDate.html('')
   inulValue.html('')
   inulNote.html('')

   renderIncomeList()

}


const deleteIncomeInformation = function(i) {
    
    incomeValue = incomeValue - inValue[i]

    
    $('#incomevalue').html(`+ ${incomeValue}`)
    availableBudget()


    inCategory.splice(i, 1)
    inDate.splice(i, 1)
    inValue.splice(i, 1)
    inNote.splice(i, 1)

    inulCategory.html('')
    inulDate.html('')
   inulValue.html('')
   inulNote.html('')


   
   renderIncomeList()
}




let expCategory = []
let expDate = []
let expValue = []
let expNote = []
const expulCategory = $("#expluCategory")
const expulDate = $("#expluDate")
const expulValue = $("#expluValue")
const expulNote = $("#expluNote")

const renderExpList = function() {
    for (let i = 0; i < expCategory.length; i++) {
        let li = $("<li></li>")
        li.text(expCategory[i])
        expulCategory.append(li)

        let cB = $("<button></button>")
        cB.text('X')
        cB.show("inline-block")
        cB.addClass("delbot")
        cB.on("click", ()=> { deleteExpInformation(i) });
        li.append(cB) 
    }


    for (let i = 0; i < expDate.length; i++) {
        let li = $("<li></li>")
        li.text(expDate[i])
        expulDate.append(li)

    }

    for (let i = 0; i < expValue.length; i++) {
        let li = $("<li></li>")
        li.text(expValue[i])
        expulValue.append(li)

        
    }

    for (let i = 0; i < expNote.length; i++) {
        let li = $("<li></li>")
        li.text(expNote[i])
        expulNote.append(li)

       
    }

}

const addToExpList = function() {
    

    let cat = j.id
    let date = $('#dateinput').val()
    let value = $('#valueinput').val()
    let note = $('#noteinput').val()

    expCategory.push(cat)
    expDate.push(date)
    expValue.push(value)
    expNote.push(note)


    
    expulCategory.html('')
    expulDate.html('')
   expulValue.html('')
   expulNote.html('')

   renderExpList()

}


const deleteExpInformation = function(i) {
    
    expenValue = expenValue - expValue[i]

    
    $('#expenvalue').html(`- ${expenValue}`)
    availableBudget()


    expCategory.splice(i, 1)
    expDate.splice(i, 1)
    expValue.splice(i, 1)
    expNote.splice(i, 1)

    expulCategory.html('')
    expulDate.html('')
   expulValue.html('')
   expulNote.html('')

   

   renderExpList()
}



function sound2() {
    sound.play()
}

function sound3() {
    sound.pause()
}