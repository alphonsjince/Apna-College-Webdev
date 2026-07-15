let str = "alphons";


function vowels(word) {
    let letter = "";
    let count = 0;
    for (let i = 0; i < word.length; i++){
        
        letter = word[i];

        if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
            console.log(letter);
            count += 1;
        }
        
    }
    return count;
}
console.log(vowels(str))