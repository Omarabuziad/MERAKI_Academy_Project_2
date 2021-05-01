function pageOne(){
    
    $('#curr').text($('#bg1sel1').val())
    $('#currInc').text($('#bg1sel1').val())
    document.querySelector("#pg2name").innerHTML = document.querySelector('#inp1').value + ' Wallet'
    document.querySelector('#pg1').style.display = 'none'
    document.querySelector('#pg2').style.display = ''
    
}















let sideBar = false

function sideBarShow(){
    if(sideBar === false) {
      document.querySelector('#sidebar').style.display = ''
      sideBar = true } else {
        document.querySelector('#sidebar').style.display = 'none'
        sideBar = false }  
}

let j
function showValueBoxExp(){
    j = event.target
    
    document.querySelector('#categh2').innerHTML = j.id
    document.querySelector('#box-amount').style.display = ''
   

}

function closShowValueBoxExp(){
    document.querySelector('#box-amount').style.display = 'none'
}


let u
function showValueBoxInc(){
    u = event.target
    document.querySelector('#categh2Inc').innerHTML = u.id
    document.querySelector('#box-amountInc').style.display = ''
}

function closShowValueBoxInc(){
    document.querySelector('#box-amountInc').style.display = 'none'
}






function moveToCategory(){
    document.querySelector('#pg3').style.display = 'none'
    document.querySelector('#pg2D1').style.display = ''
    document.querySelector('#sidebar').style.display = 'none'
}

function moveToTransction(){
    document.querySelector('#pg3').style.display = ''
    document.querySelector('#sidebar').style.display = 'none'
   
}



let expenValue = 0
function addValue(){ 
    expenValue = expenValue + Number(document.querySelector("#valueinput").value)
    document.querySelector('#expenvalue').innerHTML = `- ${expenValue}`
    document.querySelector('#box-amount').style.display = 'none'
    availableBudget()
}


let incomeValue = 0
function addIncomeValue(){ 
    incomeValue = incomeValue + Number(document.querySelector("#valueinputInc").value)
    document.querySelector('#incomevalue').innerHTML = `+ ${incomeValue}`
    document.querySelector('#box-amountInc').style.display = 'none'
    availableBudget()
}

let availableBudget1 = 0
function availableBudget(){
    availableBudget1 = incomeValue - expenValue
    document.querySelector('#budget').innerHTML = availableBudget1

}














let inCategory = []
let inDate = []
let inValue = []
let inNote = []
const inulCategory = document.querySelector("#inluCategory")
const inulDate = document.querySelector("#inluDate")
const inulValue = document.querySelector("#inluValue")
const inulNote = document.querySelector("#inluNote")

const renderIncomeList = function() {
    for (let i = 0; i < inCategory.length; i++) {
        let li = document.createElement("li")
        li.innerText = inCategory[i]
        inulCategory.append(li)

        let cB = document.createElement("button")
        cB.innerText = 'X'
        cB.style.display = "inline-block"
        cB.className = "delbot"
        cB.onclick = function() { deleteIncomeInformation(i) };
        li.append(cB) 
    }


    for (let i = 0; i < inDate.length; i++) {
        let li = document.createElement("li")
        li.innerText = inDate[i]
        inulDate.append(li)

    }

    for (let i = 0; i < inValue.length; i++) {
        let li = document.createElement("li")
        li.innerText = inValue[i]
        inulValue.append(li)

        
    }

    for (let i = 0; i < inNote.length; i++) {
        let li = document.createElement("li")
        li.innerText = inNote[i]
        inulNote.append(li)

       
    }

}

const addToIncomeList = function() {

    let cat = u.id
    let date = document.querySelector('#dateinputInc').value
    let value = document.querySelector('#valueinputInc').value
    let note = document.querySelector('#noteinputInc').value

    inCategory.push(cat)
    inDate.push(date)
    inValue.push(value)
    inNote.push(note)


    
    inulCategory.innerHTML = ''
    inulDate.innerHTML = ''
   inulValue.innerHTML = ''
   inulNote.innerHTML = ''

   renderIncomeList()

}


const deleteIncomeInformation = function(i) {
    
    incomeValue = incomeValue - inValue[i]

    
    document.querySelector('#incomevalue').innerHTML = `+ ${incomeValue}`
    availableBudget()


    inCategory.splice(i, 1)
    inDate.splice(i, 1)
    inValue.splice(i, 1)
    inNote.splice(i, 1)

    inulCategory.innerHTML = ''
    inulDate.innerHTML = ''
   inulValue.innerHTML = ''
   inulNote.innerHTML = ''

   

   renderIncomeList()
}




let expCategory = []
let expDate = []
let expValue = []
let expNote = []
const expulCategory = document.querySelector("#expluCategory")
const expulDate = document.querySelector("#expluDate")
const expulValue = document.querySelector("#expluValue")
const expulNote = document.querySelector("#expluNote")

const renderExpList = function() {
    for (let i = 0; i < expCategory.length; i++) {
        let li = document.createElement("li")
        li.innerText = expCategory[i]
        expulCategory.append(li)

        let cB = document.createElement("button")
        cB.innerText = 'X'
        cB.style.display = "inline-block"
        cB.className = "delbot"
        cB.onclick = function() { deleteExpInformation(i) };
        li.append(cB) 
    }


    for (let i = 0; i < expDate.length; i++) {
        let li = document.createElement("li")
        li.innerText = expDate[i]
        expulDate.append(li)

    }

    for (let i = 0; i < expValue.length; i++) {
        let li = document.createElement("li")
        li.innerText = expValue[i]
        expulValue.append(li)

        
    }

    for (let i = 0; i < expNote.length; i++) {
        let li = document.createElement("li")
        li.innerText = expNote[i]
        expulNote.append(li)

       
    }

}

const addToExpList = function() {

    let cat = j.id
    let date = document.querySelector('#dateinput').value
    let value = document.querySelector('#valueinput').value
    let note = document.querySelector('#noteinput').value

    expCategory.push(cat)
    expDate.push(date)
    expValue.push(value)
    expNote.push(note)


    
    expulCategory.innerHTML = ''
    expulDate.innerHTML = ''
   expulValue.innerHTML = ''
   expulNote.innerHTML = ''

   renderExpList()

}


const deleteExpInformation = function(i) {
    
    expenValue = expenValue - expValue[i]

    
    document.querySelector('#expenvalue').innerHTML = `- ${expenValue}`
    availableBudget()


    expCategory.splice(i, 1)
    expDate.splice(i, 1)
    expValue.splice(i, 1)
    expNote.splice(i, 1)

    expulCategory.innerHTML = ''
    expulDate.innerHTML = ''
   expulValue.innerHTML = ''
   expulNote.innerHTML = ''

   

   renderExpList()
}



