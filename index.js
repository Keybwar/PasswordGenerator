const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "?","=",".","*"];

const charactersOdd = ["$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/","~","`","!","@","#"]

let pw1 = document.querySelector("#pw1")
let passwordEl1 = document.querySelector("#password-el1")

function genPass(){
    for (let i = 0; i < characters.length; i++){
        let randomIndex = Math.floor(Math.random()*characters.length)
        let randomIndex1 = Math.floor(Math.random()*characters.length)
        let randomIndex2 = Math.floor(Math.random()*characters.length)
        let randomIndex3 = Math.floor(Math.random()*characters.length)
        let randomIndex4 = Math.floor(Math.random()*characters.length)
        let randomIndex5 = Math.floor(Math.random()*characters.length)
        let randomIndex6 = Math.floor(Math.random()*characters.length)
        let randomIndex7 = Math.floor(Math.random()*characters.length)
        let randomIndex8 = Math.floor(Math.random()*characters.length)
        let randomIndex9 = Math.floor(Math.random()*characters.length)
        let randomIndex10 = Math.floor(Math.random()*characters.length)
        let randomIndex11 = Math.floor(Math.random()*characters.length)
        pw1.textContent = characters[randomIndex] + characters[randomIndex1] + characters[randomIndex2] + characters[randomIndex3] + characters[randomIndex4] + characters[randomIndex5] + characters[randomIndex6] + characters[randomIndex7] + characters[randomIndex8] + characters[randomIndex9] + characters[randomIndex10] + characters[randomIndex11]
        
        let savePass = characters[randomIndex] + characters[randomIndex1] + characters[randomIndex2] + characters[randomIndex3] + characters[randomIndex4] + characters[randomIndex5] + characters[randomIndex6] + characters[randomIndex7] + characters[randomIndex8] + characters[randomIndex9] + characters[randomIndex10] + characters[randomIndex11]
        return savePass
    }
    console.log("click")
    
}

function copyToClip(){
    let text = document.getElementById(clickedID).innerText
    navigator.clipboard.writeText(text)
    alert("Copied the text: " + copyText.value);
    return
}
