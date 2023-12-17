// Array to store messages
var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

var data = [
    {
        type: messageType.out,
        user: "Rodney",
        message: "Hey, do you have time to play basketball?"
    },
    {
        type: messageType.in,
        user: 'Michael',
        message: "Hi Rodney, I don't have time to play basketball. How about we get some lunch?"
    },
    {
        type: messageType.out,
        user: 'Rodney',
        message: "Sounds good to me. Let's go grab some lunch!"
    }
];

//Message constructor function.
function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

//Function to create and return an element for the supplied message.
function createMessageElement(message){
    //Create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    //Create the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //Add a class using the message type.
    messageEl.className = message.type;

    return messageEl;
}

//Button click event handler to add a new message.
function addMessageHandler(event){
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    //Determine message type and set message variable accordingly.
    switch(event.target.id){
        case'send-button':
            user = 'Rodney';
            type = messageType.out;
            break;
        case'reply-button':
            user = 'Michael';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    //Create new message.
    if(messageInput.value != ''){
        //Construct a message and add to the array.
        var message = new Message(type, user, messageInput.value);
        messages.push(message);
        var el = createMessageElement(message);

        //Add the message element to the DOM.
        messagesContainerEl.appendChild(el);

        //Reset input.
        messageInput.value = '';
    }

}

//Load seed data from data array above
function loadSeedData(){
    for (var i = 0; i<data.length; i++){
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }
    //Load view with pre-load messages
    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++){
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function(){
    //Write event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
    loadSeedData();
};

init();


