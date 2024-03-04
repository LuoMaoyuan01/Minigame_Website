// Button restart
var Restart = document.querySelector("#b")
console.log(" Function 1 Connected ")

// Grabing all the squares
var Squares = document.querySelectorAll("td")
console.log(" Function 2 Connected ")

//Clearing all the squares
function ClearBoard() {
    for(var i = 0; i < Squares.length; i++){
        Squares[i].textContent = '';
    }
}

Restart.addEventListener("click", function(){
    ClearBoard()
})
console.log(" Function 3 Connected ")

//Check the square marker
function changeMarker(){
    if (this.textContent === ''){
        this.textContent = 'X'
    }else if (this.textContent === 'X'){
        this.textContent = 'O'
    }else{
        this.textContent = ''
    }
}
console.log(" Function 4 Connected ")

//Running the loop
for (var x = 0; x < Squares.length; x++) {
    Squares[x].addEventListener("click", function() {
        if (this.textContent === ''){
            this.textContent = 'X'
    }else if (this.textContent === 'X'){
        this.textContent = 'O'
    }else{
        this.textContent = ''
    }
    })
}

console.log(" Function 5 Connected ")