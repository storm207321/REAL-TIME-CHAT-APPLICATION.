document.addEventListener("DOMContentLoaded", () => {
  const chatMessages = document.getElementById("chat-messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  // Simple responses for the chatbot
  const botResponses = {
    hello: "Hello! How can I help you today?",
    hi: "Hi there! How can I assist you?",
    "how are you": "I'm doing well, thank you! How about you?",
    "what is your name":"I'm your AI assistant 'Rosy'",
  "hello": "Hi there! How can I help you today?",
  "hi": "Hey! What can I do for you?",
  "how are you": "I'm a bot, but I'm doing great! How can I assist you?",
  "who are you": "I'm a virtual assistant designed to help you. What's on your mind?",
  "what can you do": "I can answer common questions, find information, or guide you through tasks. What would you like to do?",
  "what is your name": "I don't have a name, but you can call me Bot. How can I help?",

  // Basic information requests
  "what is a chatbot": "A chatbot is a computer program that simulates human conversation. It uses natural language processing (NLP) to understand and respond to user queries.",
  "who made you": "I was created by a developer team using modern conversational AI technology.",
  "what is the weather": "I don't have access to real-time weather information. For the latest forecast, please check a weather website.",
  "where are you located": "I exist in the cloud, so I'm everywhere and nowhere at once! How can I help you from here?",
  "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
  "tell me a fact": "Did you know that a group of flamingos is called a flamboyance?",

  // Customer service-related questions
  "help": "I'm here to help! What can I assist you with?",
  "contact support": "If you need to speak with a human agent, I can connect you. Please provide your name and a brief description of your issue.",
  "talk to a human": "Sure, let me transfer you to a human agent. Please wait while I connect you.",
  "what are your business hours": "Our standard business hours are Monday to Friday, 9:00 AM to 5:00 PM. Support is available 24/7.",
  "how do i reset my password": "To reset your password, please go to the login page and click 'Forgot Password'.",
  "where is my order": "To track your order, please provide your order number. I can then give you the current status.",
  "what is your return policy": "Our return policy allows returns within 30 days of purchase for a full refund. You can find more details on our website.",
  "how do i make a complaint": "I'm sorry to hear you're having an issue. Please describe your complaint, and I'll forward it to the right team for review.",
  "how do i change my delivery address": "If your order has not shipped yet, we may be able to update your delivery address. Please provide your order number.",
  "how do i pay my bill": "You can pay your bill online through your account portal. Is there anything I can help you with regarding your bill?",
  "unsubscribe": "To unsubscribe from our newsletter, please provide your email address. You can also find an 'unsubscribe' link at the bottom of any of our emails.",

  // Tech support and troubleshooting
  "my account is locked": "I can help with that. Please verify your account details, and I can walk you through the unlocking process.",
  "how do i use this feature": "To help, I need more information. What feature are you trying to use? Describe the issue you are facing.",
  "i have an error message": "What does the error message say? Please provide the exact text, and I will try to help you troubleshoot.",

  // Small talk and empathy
  "thanks": "You're welcome! Is there anything else I can do for you?",
  "thank you": "My pleasure! Don't hesitate to reach out if you need anything else.",
  "sorry": "That's alright. How can we move forward?",
  "you are smart": "That's very kind of you to say! I'm designed to be helpful.",
  "goodbye": "Goodbye! Have a great day.",
  "bye": "Bye! Feel free to chat again whenever you need assistance.",
  "i love you": "I'm just a program, but I appreciate the sentiment! I'm here to assist you with any questions.",
  "you are the best": "I'm happy to help! Your satisfaction is my top priority.",

  // Basic search and navigation
  "where is your pricing page": "You can find our pricing details on the 'Pricing' page of our website. Do you have any specific questions about our plans?",
  "what products do you offer": "We offer a wide range of products, including [Product 1], [Product 2], and [Product 3]. Is there a specific product type you're interested in?",
  "where is the faq": "You can find a list of frequently asked questions on our website's FAQ page.",

  // Feedback and improvement
  "feedback": "Your feedback is valuable to us. Please share your thoughts, and I will pass them along to my human team.",
  "how can i give feedback": "You can provide feedback directly in this chat or by visiting the 'Contact Us' section of our website.",
  "i don't understand": "I'm sorry, I don't understand that request. Could you please rephrase it?",
  "can you explain that differently": "I'm not sure I understood. Could you ask me in a different way or choose an option from the menu?",
  "fallback response": "I'm not sure how to help with that. Maybe try rephrasing your question, or I can connect you to a support agent.",
  "unclear query": "Could you provide more context? For example, are you asking about a product, your order, or something else?",
  "what can you do":"I can answer simple questions and have basic conversations. Try asking me something!",
    bye: "Goodbye! Have a great day!",
    default: "I'm not sure I understand. Could you try asking something else?",
  };

  // Function to add a message to the chat
  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.classList.add(isUser ? "user-message" : "bot-message");

    const messageText = document.createElement("p");
    messageText.textContent = message;
    messageDiv.appendChild(messageText);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // scrolls to the bottom of the chat messages
  }

  // Function to get bot response
  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    for (const [key, value] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return value;
      }
    }

    return botResponses.default;
  }

  // Function to handle sending messages
  function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
      addMessage(message, true);
      userInput.value = "";

      // Simulate bot thinking
      setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse);
      }, 500);
    }
  }

  // Event listeners
  sendButton.addEventListener("click", sendMessage);

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});
