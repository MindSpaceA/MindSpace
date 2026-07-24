const messages = document.getElementById("chatMessages");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

const replies = [
    "I'm here with you. Would you like to tell me more about what's on your mind?",
    "That sounds important. How long have you been feeling this way?",
    "Thank you for sharing that with me. Your feelings matter.",
    "Take your time. There is no pressure here.",
    "Sometimes talking is the first step toward feeling better.",
    "Can you describe what happened today?",
    "I'm listening. What do you think is causing these feelings?",
    "Remember to be kind to yourself. You're doing your best."
];

function addMessage(text, sender){

    const message = document.createElement("div");
    message.className = `message ${sender}`;

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.innerHTML = sender === "ai" ? "🧠" : "🙂";

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerHTML = text;

    if(sender === "user"){
        message.appendChild(bubble);
        message.appendChild(avatar);
    }else{
        message.appendChild(avatar);
        message.appendChild(bubble);
    }

    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function showTyping(){

    const typing = document.createElement("div");
    typing.className = "message ai";
    typing.id = "typing";

    typing.innerHTML = `
        <div class="avatar">🧠</div>
        <div class="bubble">Typing...</div>
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

function sendMessage(){

    const text = input.value.trim();

    if(text === "") return;

    addMessage(text,"user");

    input.value = "";

    showTyping();

    setTimeout(()=>{

        removeTyping();

        const randomReply =
            replies[Math.floor(Math.random()*replies.length)];

        addMessage(randomReply,"ai");

    },1500);

}

sendBtn.addEventListener("click",sendMessage);

input.addEventListener("keydown",function(e){

    if(e.key==="Enter"){
        sendMessage();
    }

});
