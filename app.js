showNotes();
let addNotes = document.getElementById('add').addEventListener('click', ()=>{
    let text = document.getElementById('text');
    let notes = JSON.parse(localStorage.getItem('notes'));
    let notesList = [];
    if(notes !== null){
      notesList = notes;
    }
    notesList.push(text.value);
    localStorage.setItem('notes', JSON.stringify(notesList));
    showNotes();
    text.value = '';
})
function showNotes(){
    let notes = JSON.parse(localStorage.getItem('notes'));
    let notesList = [];
    if(notes !== null){
      notesList = notes;
    }
    let htmlContent = '';
    notesList.forEach((element, index) => {
        htmlContent += `
        <div class="notes card col-lg-3 mt-3" >
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>
    `
    }); 
    let noteContainer = document.getElementById('notes');
    noteContainer.innerHTML = htmlContent;
}
function deleteNode(id){
  let notes = JSON.parse(localStorage.getItem('notes'));
  notes.splice(id, 1);
  localStorage.setItem('notes', JSON.stringify(notes));   
}