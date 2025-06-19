const socket = io();

const clientCount = document.getElementById('clientCount');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const chatList = document.getElementById('chatList');

// Submit message
messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const msg = messageInput.value.trim();
  if (msg !== '') {
    addMessage(msg, true); // Add own message
    socket.emit('message', msg); // Send to server
    messageInput.value = '';
  }
});

// Receive updated client count
socket.on('client-connected', (count) => {
  clientCount.textContent = count;
});

// Receive incoming message
socket.on('message', (msg) => {
  addMessage(msg, false);
});

// Add message to UI
function addMessage(text, isSelf = false) {
  const li = document.createElement('li');
  li.className = `flex flex-col ${isSelf ? 'items-end' : 'items-start'}`;
  li.innerHTML = `
    <div class="text-xs">${getTime()}</div>
    <div class="w-fit rounded-lg ${isSelf ? 'bg-blue-600/70 text-white' : 'bg-gray-100'} px-2 py-1 text-sm">
      ${text}
    </div>
  `;
  chatList.appendChild(li);
  chatList.scrollTop = chatList.scrollHeight;
}

function getTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
