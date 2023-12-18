// Utility function to get elements by ID
function get(element) {
    return document.getElementById(element);
}

// Function to show the modal and backdrop
function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

// Function to hide the modal and backdrop, and clear modal text
function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    // Clear modal text
    title.value = "";
    text.value= "";

    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

// Function to handle saving user input as a new blog post
function saveContent() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    //Create content elements
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    //Add elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

window.addEventListener('load', function(){
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click',openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click',saveContent);

});
