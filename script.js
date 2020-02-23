const morseCode = [
    {char: 'a , ._'},
    {char: 'b , _...'},
    {char: 'c , _._.'},
    {char: 'd ,_..'},
    {e: '.'},
    {f: '.._.'},
    {g: '__.'},
    {h: '....'},
    {i: '..'},
    {j: '.___'},
    {k: '_._'},
    {l: '._..'},
    {m: '__'},
    {n: '_.'},
    {o: '___'},
    {p: '.__.'},
    {q: '__._'},
    {r: '._.'},
    {s: '...'},
    {t: '_'},
    {u: '.._'},
    {v: '..._'},
    {w: '.__'},
    {x: '_.._'},
    {y: '_.__'},
    {z: '__..'},
    {0: '_____'},
    {1: '.____'},
    {2: '..___'},
    {3: '...__'},
    {4: '...._'},
    {5: '.....'},
    {6: '_....'},
    {7: '__...'},
    {8: '___..'},
    {9: '____.'}
];



const displayText = () => document.getElementById("translate").value.split("");

const compareTextToArray = (morseCode, displayText) => {

    const displayTextLoop = displayText.map();
    document.getElementById.innerHTML(compareLoop);
    

}

const morseLoop = (result) => { \
    return morseCode.char.includes(result);
}


compareTextToArray(morseCode, displayText);



// const getUserEmail = (people) => people.map(userEmail);

// const userEmail = (person) =>  person.email;

// console.log(getUserEmail(people));



    