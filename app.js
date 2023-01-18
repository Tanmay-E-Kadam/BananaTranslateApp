var btnTranslate = document.querySelector("#btnTranslate")
var txtInpt = document.querySelector("#txtInput")
var opttxt = document.querySelector("#output")
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(text){
    return serverUrl + "?" +"text=" + text
} 

function errorHandler(error){
    console.log("error occured", error)
    alert("Something went wrong with Server!!")
}

function clickHandler() {
    console.log("input",txtInpt.value)
    fetch(getTranslatedURL(txtInpt.value))
    .then(Response => Response.json())
    .then(json => {
        var op = json.contents.translated;
        opttxt.innerText = op;
    })
    .catch(errorHandler)
}
btnTranslate.addEventListener("click",clickHandler) 