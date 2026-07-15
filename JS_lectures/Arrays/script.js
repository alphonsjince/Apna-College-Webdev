let country = ["Australia", "Germany", "United States of America"];

function longestCountry(countryName) {
    let storedBiggest = 0;
    let storedName = "";
    for (let i = 0; i < country.length; i++){

        let current = country[i].length;

        if (current > storedBiggest) {
            storedBiggest = current;
            storedName = country[i];
            
        }
        else if (current < storedBiggest) {
        } 
    }
    console.log(storedBiggest);
    console.log(storedName)

    
}

longestCountry(country);

