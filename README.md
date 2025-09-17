# 🤖 Gemini Vision Chatbot

A powerful and intuitive chatbot built with HTML, CSS, and JavaScript, powered by the Google Gemini API. Ask any question, get intelligent answers, and even have conversations about the images you upload!

![Recording 2025-09-17 225645](https://github.com/user-attachments/assets/4af8e805-7812-4549-99b0-ce417a86a9fd)

## ✨ Features

-   **Intelligent Text Conversation:** Ask complex questions and get detailed, context-aware answers thanks to the Gemini Pro model.
-   **Image Understanding (Multimodal):** Upload an image and ask questions about it. The chatbot uses the Gemini Pro Vision model to see and understand what's in the picture.
-   **Sleek & Modern UI:** A clean, user-friendly chat interface built with pure HTML, CSS, and JavaScript.
-   **Responsive Design:** Looks great on both desktop and mobile browsers.
-   **Lightweight & Fast:** No backend server needed. The application runs entirely in the user's browser and communicates directly with the Gemini API.
-   **Easy to Set Up:** Get started in just a few minutes with a simple configuration step.

## 🛠️ Tech Stack

-   **Frontend:** HTML5, CSS3, JavaScript (ES6+)
-   **Core Logic:** Google Gemini API (using `gemini-pro` and `gemini-pro-vision` models)
-   **API Communication:** Fetch API (Native in JavaScript)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need a Google Gemini API key. You can get one for free from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Configuration

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/ayushsa24/ChatBot].git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd [ChatBot]
    ```

3.  **Create a `config.js` file:**
    In the main project folder, create a new file named `config.js`. This file will hold your secret API key.

4.  **Add your API key to `config.js`:**
    Open `config.js` and add the following line, replacing `"YOUR_GEMINI_API_KEY"` with your actual key:
    ```javascript
    const API_KEY = "YOUR_GEMINI_API_KEY";
    ```
    **Important:** This file should *not* be committed to a public Git repository. Add `config.js` to your `.gitignore` file to prevent accidentally sharing your secret key.

5.  **Link the config file in `index.html`:**
    Open your `index.html` file and add the following script tag inside the `<head>` section, **before** your main script file (`script.js` or `main.js`).
    ```html
    <head>
      <script src="config.js"></script>
      <script src="script.js" defer></script>
    </head>
    ```

### Running the Application

Simply open the `index.html` file in your favorite web browser (like Chrome, Firefox, or Edge). That's it!

## Usage

1.  **Ask a Text Question:**
    -   Type your question into the input box at the bottom.
    -   Press Enter or click the send button.
    -   Wait for the intelligent response from the Gemini API.

2.  **Ask about an Image:**
    -   Click the attachment (📎) or image icon.
    -   Select an image file from your device (`.png`, `.jpg`, `.webp`, etc.).
    -   Once the image preview appears, type your question related to the image (e.g., "What is in this picture?", "Describe this scene.", "What color is the car?").
    -   Press Enter or click the send button to get a vision-based answer.
