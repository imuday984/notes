const addcardform = document.querySelector('.addcardform')
const notetext=document.getElementById('noteText')
const notes=[]
const maincard=document.querySelector('.maincard')

function addnote(){
    // alert()
    addcardform.classList.remove('hideelement')
    console.log(addcardform.classList)
}

function removenote(){
    alert('removing note')
}

function createnotes(){
    maincard.innerHTML=''
    notes?.map((note,index)=>{
        let html=
        `<div class="notecard card" id='${index}'>
            <h1 class="note">
                ${note}
            </h1>
            <button id="closebutton" onclick="removenote()">X</button>

        </div>`
        maincard.insertAdjacentHTML('afterbegin',html)
    })
}

function submitnote(e){
    e.preventDefault()
    notes.push(notetext.value)
    notetext.value=''

    createnotes()
    addcardform.classList.add('hideelement')
}