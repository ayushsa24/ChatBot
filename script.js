let prompt = document.querySelector("#prompt")
let submitbtn = document.querySelector("#submit")
let chatContainer = document.querySelector(".chat-container")
let imagebtn = document.querySelector("#imagebtn")
let image = document.querySelector("#imagebtn img")
let imageinput = document.querySelector("#imageinput")

const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyC4Zb6eqpB87E0aTl50v1C6ijFBIM_l4NY"

let user = {
    message: null,
    file: {
        mime_type: null,
        data: null
    }
}

async function generateResponse(aiChatBox) {
    let text = aiChatBox.querySelector(".ai-chat-area")

    let parts = [{ "text": user.message }]
    if (user.file.data) {
        parts.push({
            "inline_data": {
                "mime_type": user.file.mime_type,
                "data": user.file.data
            }
        })
    }

    let RequestOption = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "contents": [{ "parts": parts }]
        })
    }

    try {
        let response = await fetch(Api_Url, RequestOption)
        let data = await response.json()
        console.log("API Response:", data)

        let apiResponse = data.candidates[0].content.parts[0].text.trim()
        text.innerHTML = marked.parse(apiResponse)

    } catch (error) {
        console.log("Error:", error)
        text.innerHTML = "Error fetching response!"
    } finally {
        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" })
        image.src = `image.png`
        image.classList.remove("choose")
        user.file = {}
    }
}

function createChatBox(html, classes) {
    let div = document.createElement("div")
    div.innerHTML = html
    div.classList.add(classes)
    return div
}

function handlechatResponse(userMessage) {
    user.message = userMessage

    let html = `<img src="user.png" id="userImage" width="50px" >
    <div class="user-chat-area">
    ${user.message}
    ${user.file.data?`<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimg" />`:" "}
    </div>`
    prompt.value = ""
    let userChatBox = createChatBox(html, "user-chat-box")
    chatContainer.appendChild(userChatBox)

    chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" })

    setTimeout(() => {
        let html = `<img src="ai.png" id="aiImage">
      <div class="ai-chat-area">
        <img src="loading.webp" alt="" class="load" width="100px">
      </div>`
        let aiChatBox = createChatBox(html, "ai-chat-box")
        chatContainer.appendChild(aiChatBox)
        generateResponse(aiChatBox)
    }, 600)
}

prompt.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && prompt.value.trim() !== "") {
        handlechatResponse(prompt.value)
    }
})

submitbtn.addEventListener("click",()=>{
    handlechatResponse(prompt.value)
})

imageinput.addEventListener("change", () => {
    const file = imageinput.files[0]
    if (!file) return
    let reader = new FileReader()
    reader.onload = (e) => {
        let base64string = e.target.result.split(",")[1]
        user.file = {
            mime_type: file.type,
            data: base64string
        }
        console.log("File ready:", user.file) 
        image.src=`data:${user.file.mime_type};base64,${user.file.data}`
        image.classList.add("choose")
    }
   
    reader.readAsDataURL(file)
})

imagebtn.addEventListener("click", () => {
    imageinput.click()
})

const openBtn = document.getElementById("openContact");
const modal = document.getElementById("contactModal");
const closeBtn = document.getElementById("closeContact");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});