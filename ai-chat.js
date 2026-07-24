const messages = document.getElementById("chatMessages");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");


function addMessage(text, type){

    const message = document.createElement("div");
    message.classList.add("message", type);

    if(type === "ai"){

        message.innerHTML = `
            <div class="avatar">🧠</div>
            <div class="bubble">${text}</div>
        `;

    } else {

        message.innerHTML = `
            <div class="bubble">${text}</div>
            <div class="avatar">🙂</div>
        `;

    }

    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;

}



function showTyping(){

    const typing = document.createElement("div");

    typing.id = "typing";
    typing.className = "message ai";

    typing.innerHTML = `
        <div class="avatar">🧠</div>
        <div class="bubble">
            AI is thinking...
        </div>
    `;

    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

}



function removeTyping(){

    const typing = document.getElementById("typing");

    if(typing){
        typing.remove();
    }

}



function getAIResponse(message){

    message = message.toLowerCase();


    if(message.includes("hello") || message.includes("hi")){

        return "Hello 👋 I'm MindSpace AI. How are you feeling today?";

    }


    if(message.includes("sad") || message.includes("depressed")){

        return "I'm sorry you are feeling this way 💙. I'm here to listen. Would you like to share what happened?";

    }


    if(message.includes("stress") || message.includes("anxiety")){

        return "I understand. Stress can feel overwhelming. What is causing you the most pressure right now?";

    }


    if(message.includes("tired") || message.includes("sleep")){

        return "Feeling tired can affect your emotions. How has your sleep been recently?";

    }


    if(message.includes("alone") || message.includes("lonely")){

        return "Feeling alone can be difficult. I'm here with you. Would you like to talk about it?";

    }


    return "Thank you for sharing with me 💙. Can you tell me a little more about how you feel?";

}



function sendMessage(){

    const text = input.value.trim();


    if(text === ""){
        return;
    }


    addMessage(text,"user");

    input.value = "";


    showTyping();


    setTimeout(()=>{

        removeTyping();

        const response = getAIResponse(text);

        addMessage(response,"ai");


    },1500);


}



sendBtn.addEventListener("click", sendMessage);


input.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        sendMessage();

    }

});
