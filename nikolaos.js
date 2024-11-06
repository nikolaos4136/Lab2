function containsOnlyLetters(string) {
    for (let i = 0; i < string.length; i++) {
        if (!(string[i] >= 'A' && string[i] <= 'Z') && !(string[i] >= 'a' && string[i] <= 'z')) {
            return false;
        }
    return true;
    }
}


document.getElementById('quizForm').addEventListener('submit', function(event){

    event.preventDefault();

    






    

})