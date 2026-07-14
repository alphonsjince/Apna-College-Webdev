let str = "abcdabcdefgggh";

function unique(mixedString) {

    let stored = "";

    for (let i = 0; i < str.length; i++) {
        let current = str[i];

        if (!stored.includes(current)) {
            console.log(current);
        }
        stored += current;
    }
}

unique(str);