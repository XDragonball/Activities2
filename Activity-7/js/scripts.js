//Initialize an empty array to hold tasks
var tasks = [];

//var for task status
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//Task constructor function
function Task(id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

//Function for new task
function addTaskElement(task){
    //create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //Set attributes
    taskEl.setAttribute('id',task.id);
    //Add text to task element
    taskEl.appendChild(textEl);
    //Add task element to list
    listEl.appendChild(taskEl);
}

//Add new task event handler
function addTask(event){
    var inputEl = document.getElementById('input-task');
    if(inputEl.value !=""){
        //Create a new unique id for a new task
        var id ='item-'+tasks.length;
        //Create a new task via the Task constructor function
        var task = new Task(id, inputEl.value, taskStatus.active);
        //Add new task to  task array
        tasks.push(task);
        //Add task to the DOM
        addTaskElement(task);
        //Reset input
        inputEl.value="";
    }
}

//Complete tasks Event handler
function completeTask(event){
    var taskEl = event.target;
    var id = taskEl.id;
    //Find task in Tasks array and update status
    for (var i=0; i<tasks.length; i++){
        if (tasks[i].id === id){
          tasks[i].status=taskStatus.completed;
          break;
        }
    }

    //Move task element from active to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}


//Initialize app

function init(){
    ///Connect add task button
    document.getElementById('add-task').onclick = addTask;
    //Connect completed list
    document.getElementById('active-list').onclick = completeTask;
    
}


init();