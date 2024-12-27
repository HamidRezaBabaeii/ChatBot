async function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const chatBox = document.getElementById('chat-box');
    const userMessage = messageInput.value.trim();

    if (!userMessage) return;

    const userMessageDiv = document.createElement('div');
    userMessageDiv.textContent = `You: ${userMessage}`;
    chatBox.appendChild(userMessageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

    try {
      const response = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      const botMessageDiv = document.createElement('div');
      botMessageDiv.textContent = `Bot: ${data.reply}`;
      chatBox.appendChild(botMessageDiv);

      chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
      console.error('Error:', error);
      const errorMessageDiv = document.createElement('div');
      errorMessageDiv.textContent = 'Error: Unable to get a response!';
      chatBox.appendChild(errorMessageDiv);
    }

    messageInput.value = '';
  }