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

    }else{

        message.innerHTML = `
            <div class="bubble">${text}</div>
            <div class="avatar">🙂</div>
        `;

    }


    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;

}



function typing(){

    const typing = document.createElement("div");

    typing.id="typing";

    typing.className="message ai";

    typing.innerHTML=`
        <div class="avatar">🧠</div>
        <div class="bubble">
            <span>AI is thinking...</span>
        </div>
    `;


    messages.appendChild(typing);

    messages.scrollTop = messages.scrollHeight;

}



function removeTyping(){

    const element=document.getElementById("typing");

    if(element){
        element.remove();
    }

}



function getAIResponse(message){

    message = message.toLowerCase();


    if(message.includes("sad") || message.includes("depressed")){

        return "I'm sorry you are feeling this way. Would you like to share what has been making you feel sad? I'm here to listen.";

    }


    if(message.includes("stress") || message.includes("anxiety")){

        return "Stress can feel overwhelming. Try taking a slow breath and tell me what is causing the most pressure right now.";

    }


    if(message.includes("tired") || message.includes("sleep")){

        return "Feeling tired can affect your mood and thoughts. How has your sleep been recently?";

    }


    if(message.includes("hello") || message.includes("hi")){

        return "Hello 👋 I'm MindSpace AI. How are you feeling today?";

    }


    return "Thank you for sharing that with me. Can you tell me a little more about your thoughts and feelings?";

}

    

        return "Stress can feel overwhelming. Try taking a slow breath and tell me what is causing the most pressure right now.";

    }


    if(message.includes("tired") || message.includes("sleep")){

        return "Feeling tired can affect your mood and thoughts. How has your sleep been recently?";

    }


    if(message.includes("hello") || message.includes("hi")){

        return "Hello 👋 I'm MindSpace AI. How are you feeling today?";

    }


    return "Thank you for sharing that with me. Can you tell me a little more about your thoughts and feelings?";

}



function sendMessage(){

    const text=input.value.trim();


    if(text==="") return;


    addMessage(text,"user");


    input.value="";


    typing();



    setTimeout(()=>{

        removeTyping();


        const answer=getAIResponse(text);


        addMessage(answer,"ai");


    },1500);



}



sendBtn.addEventListener("click",sendMessage);



input.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        sendMessage();

    }

});
