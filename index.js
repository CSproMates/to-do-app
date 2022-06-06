
//const notes = require('./notes');


//let salary = [23,4,3,5,4,3,434]
////console.log(salary.reduce = (a,b)=> a+b )


// map making copy of origin array

// foreach make changes to orginal array

// array.from  making an array of every thing
//const name = 'ahmad'

//Array.from(name.join)
let notes;
const notTitle = document.querySelector('#Note-Title')
const noteBody = document.querySelector('#Note-body')
const noteList = document.querySelector('.Note-list')

const addBTN = document.querySelector('.addBTN')

const globalArray = []
const persons = [{
    name: '',
    lastName: ''
}]


const eventHandler = ()=>{
    addBTN.addEventListener('click',()=>{
       
        const predata = LoadData()
        //console.log(predata[predata.length-1].name)

    if(predata[predata.length].name === '' && predata[predata.length].lastName === ''){
        localStorage.setItem('note', JSON.stringify(persons))
        console.log('if statement')
        predata[predata.length].name = notTitle.value
        predata[predata.length].lastName = noteBody.value
        localStorage.setItem('note',JSON.stringify(predata))
    }else{
        console.log('hello')
        const title = notTitle.value
        const body = noteBody.value
        predata[predata.length].push({title, body})
        localStorage.setItem('note', JSON.stringify(predata))
        
    }
    })
}
eventHandler()
LoadData = ()=>{
    const predata =  localStorage.getItem('note')
    return JSON.parse(predata)
}

displayData = (data)=>{
//    const Note = document.createElement('div')
//     const upper = document.createElement('div')
//     upper.classList.add('upper')
//     const buttom = document.createElement('div')
//     buttom.classList.add("buttom")
//     const p = document.createElement("p")
//     const bodyP = document.createElement('p')
// upper.appendChild(p)
// buttom.appendChild(bodyP)
// Note.appendChild(upper)
// Note.appendChild(buttom)
//noteList.appendChild

}


























