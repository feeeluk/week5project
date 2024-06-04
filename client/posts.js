let htmlForm = document.getElementById("commentForm")
let htmlCommentsSection = document.getElementById("commentsSection")

fetchComments()

htmlForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let data = new FormData(htmlForm)
    let newComment = Object.fromEntries(data)

    console.log(newComment)

    fetch("http://localhost:8080/comments", {
        method: "POST", headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newComment)
    })

    htmlForm.reset()

    setTimeout(fetchComments, 100)
    
})

async function fetchComments(){
    let response = await fetch("http://localhost:8080/comments")
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
