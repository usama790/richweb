const addBtn = document.getElementById('add')  
 const notes = JSON.parse(localStorage.getItem('notes'))  
 if(notes) {  
   notes.forEach(note => addNewNote(note))  
 }  
 addBtn.addEventListener('click', () => addNewNote())  
 function addNewNote(text = '') {  
   const note = document.createElement('div')  
   note.classList.add('note')  
   note.innerHTML = 
   `  
   <div class="tools">  
     <button class="edit"><i class="fas fa-edit"></i></button>  
     <button class="delete"><i class="fas fa-trash-alt"></i></button>  
     <button class="red">RED</button>  
     <button class="blue">BLUE</button> 
     <button class="green">GREEN</button> 
     
     
     
   </div>  
   <div class="main ${text ? "" : "hidden"}"></div>  
   <textarea id="textarea" class="${text ? "hidden" : ""}"></textarea>  
   ` 
   const greenbtn =  note.querySelector('.green') 
   const redbtn =  note.querySelector('.red') 
   const bluebtn =  note.querySelector('.blue') 
   const editBtn = note.querySelector('.edit')  
   const deleteBtn = note.querySelector('.delete')  
   const main = note.querySelector('.main')  
   const textArea = note.querySelector('textarea')  
   textArea.value = text  
   main.innerHTML = marked(text) 
   



   greenbtn.addEventListener('click', () => {  
    document.getElementById("textarea").style.backgroundColor = "green";
 })  

   bluebtn.addEventListener('click', () => {  
    document.getElementById("textarea").style.backgroundColor = "blue";
 })  

   redbtn.addEventListener('click', () => {  
    document.getElementById("textarea").style.backgroundColor = "red";

   
  })  
   deleteBtn.addEventListener('click', () => {  
     note.remove()  
     updateLS()  
   })  
   editBtn.addEventListener('click', () => {  
     main.classList.toggle('hidden')  
     textArea.classList.toggle('hidden')  
   })  
   textArea.addEventListener('input', (e) => {  
     const { value } = e.target  
     main.innerHTML = marked(value)  
     updateLS()  
   })  
   document.body.appendChild(note)  
 }  
 function updateLS() {  
   const notesText = document.querySelectorAll('textarea')  
   const notes = []  
   notesText.forEach(note => notes.push(note.value))  
   localStorage.setItem('notes', JSON.stringify(notes))  
 }  
