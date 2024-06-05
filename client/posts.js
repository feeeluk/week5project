let domain = "https://week5project-server.onrender.com/comments"

// http://localhost:8080/comments
// https://week5project-server.onrender.com/comments

let htmlForm = document.getElementById("commentForm")
let htmlCommentsSection = document.getElementById("commentsSection")

fetchComments()

htmlForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    let data = new FormData(htmlForm)
    let newComment = Object.fromEntries(data)

    console.log(newComment)

    let response = await fetch(domain, {
        method: "POST", headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(newComment)
    })
    console.log(response)
    if (response.ok) {
        fetchComments()
    } else {
        // some sort of function that adds an error message ot the page
        alert(`Couldn't get comments`)
    }
    htmlForm.reset()  
})

async function fetchComments(){
    let response = await fetch(domain, {
        headers:{
            "Cache-Control": "no-cache"
        }
    })
    let final = await response.json()

    displayComments(final)
}

function displayComments(arrayOfComments){

    htmlCommentsSection.innerHTML = ''

    arrayOfComments.forEach( function (comment){

        let postD = document.createElement("div")
        let usernameP = document.createElement("p")
        let locationP = document.createElement("p")
        let commentP = document.createElement("p")

        postD.setAttribute("class","commentBox")
        usernameP.setAttribute("class","commentUsername")        
        locationP.setAttribute("class","commentLocation")
        commentP.setAttribute("class","commentContent")

        usernameP.innerText = "Username: " + comment.username
        locationP.innerText = "Location: " + comment.location
        commentP.innerText = "Content: " + comment.content

        postD.appendChild(usernameP)
        postD.appendChild(locationP)
        postD.appendChild(commentP)
        htmlCommentsSection.appendChild(postD)
    })
}
