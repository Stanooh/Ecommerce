 import { useState} from 'react'
 import{chatbot} from 'supersimpledev';
 import './ChatInput.css';
 
 
 
 export function ChatInput({chatMessages,setChatMessages,}){
      const[inputText,setInputText]=useState('');
      
function saveInputText(event){
  setInputText(event.target.value);

}

async function sendMessage(){
const newChatMessages=[
  ...chatMessages,
  {
    message:inputText,
    sender:'user',
    id:crypto.randomUUID()
  }
]


setChatMessages(newChatMessages);

const response= await chatbot.getResponseAsync(inputText);
setChatMessages([
  ...newChatMessages,
  {
    message:response,
    sender:'robot',
    id:crypto.randomUUID()
  }
]);
setInputText('')
}
function handleKey(event){
   if(event.key==='Enter'){
    sendMessage();
   }else if
 (event.key==='Escape'){
    setInputText('')
   }
   
};

      return(
        <div className="chat-input-container">
                  <textarea 
                    placeholder="Send a message to Chatbot" 
                    size="30"
                    onChange={saveInputText}
                    onKeyDown={handleKey}
                    
                    value={inputText}
                    className="chat-input"
                  />
                  <button
                  onClick={sendMessage}
                  className="send-button"
                  >Send</button>
          </div>
      );
    }