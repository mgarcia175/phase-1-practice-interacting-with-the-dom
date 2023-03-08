//Counter
const timerText = document.getElementById("counter")

//BUTTONS
const minusButton = document.getElementById("minus")

const plusButton = document.getElementById("plus")

const heartButton = document.getElementById("heart")

const pauseButton = document.getElementById("pause")

const submitButton = document.querySelector("form")
//BUTTONS

//Responsible for making timer tick by 1
let count = 0

let obj = setInterval(function() {
        timerText.textContent = ++count
    }, 1000)
//Responsible for making timer tick by 1

//Decreases timer by 1
minusButton.addEventListener("click", function() {
    timerText.textContent = --count
})
//Decreases timer by 1

//Increments timer by 1
plusButton.addEventListener("click", function() {
    timerText.textContent = ++count
})
//Increments timer by 1

//Likes current count and logs it

heartButton.addEventListener("click", result)



function result() {
    let likesUl = document.querySelector(".likes")
    

    let found = document.getElementById(count)

    if(found) {
        found.dataset.like_count++
        found.textContent = `${count} was liked ${found.dataset.like_count} time(s)!`
    } else {
        let likesLi = document.createElement("li")
        likesLi.id = count
        likesLi.dataset.like_count = 1
        //Relook
        likesLi.textContent = `${count} was liked 1 time(s)!`
        likesUl.append(likesLi)
    }
}

//Logs comments
let Ul = document.createElement("ul")
let div = document.getElementById("list")
div.append(Ul)

submitButton.addEventListener("submit", (e) => {
    e.preventDefault()
    let submitText = document.getElementById("comment-input").value
    let commentsLi = document.createElement("li")
    commentsLi.textContent = submitText
    Ul.append(commentsLi)
    document.getElementById("comment-input").value = ""
})
//Logs comments



//Controls timer
pauseButton.addEventListener("click", function() {
    if(pauseButton.id === "pause") {
        clearInterval(obj)
        pauseButton.id = "resume"
        pauseButton.textContent = "resume"
    } else if (pauseButton.id === "resume") {
            pauseButton.id = "pause"
            pauseButton.textContent = "pause"
            obj = setInterval(function() {
                timerText.textContent = ++count
            }, 1000)
    }
  } 
)
//Controls timer