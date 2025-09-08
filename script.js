const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const humanBtn = document.getElementById('human-btn');

// Predefined AI responses (demo)
const aiResponses = [
  "Hello! How can I help you today?",
  "Sure, I can assist with that.",
  "Please provide more details.",
  "Thank you for reaching out!",
  "Our team will contact you shortly."
];

// Append messages
function appendMessage(msg, type) {
  const div = document.createElement('div');
  div.classList.add('message', type === 'user' ? 'user-msg' : 'ai-msg');
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Simulate AI response
function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage(message, 'user');
  userInput.value = '';

  appendMessage("AI is typing...", 'ai');

  setTimeout(() => {
    const aiMsg = aiResponses[Math.floor(Math.random() * aiResponses.length)];
    chatBox.lastChild.textContent = aiMsg;
  }, 1000);
}

// Human support fallback
function requestHuman() {
  appendMessage("Human support requested. Please fill out the Google Form: https://forms.gle/yourformlink", 'ai');
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => { if(e.key === 'Enter') sendMessage(); });
humanBtn.addEventListener('click', requestHuman);
