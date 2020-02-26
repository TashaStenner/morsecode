const alphabet = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": " ",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
  };
  
  const translateEnglishToMorseCode = () => {
    const input = document.getElementById("englishInput");
    const inputValue = input.value;
    // "Matt"
    const output = document.getElementById("morseOutput");
  
    const characters = inputValue.toLowerCase().split("");
    // characters = ["m", "a", "t", "t"]
    const morseCharacters = characters.map(char => alphabet[char]);
    // ["--", "..-"]
    const morseString = morseCharacters.join(" ");
    // "-- ..-"
  
    output.innerHTML = morseString;
  };
  
  document.getElementById("translateEnglishToMorse").addEventListener("click", translateEnglishToMorseCode);

  const morseAlphabet = {
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---": "o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    " ": " ",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    "-----":"0",
  };

  const translateMorseToEnglish = () => {
    const MorseInput = document.getElementById("morseInput");
    const morseInputValue = MorseInput.value;
    // "Matt"
    const englishOutput = document.getElementById("enOutput");
  
    const morseCharacters = morseInputValue.split(" ");
    // characters = ["m", "a", "t", "t"]
    const englishCharacters = morseCharacters.map(char => morseAlphabet[char]);
    // ["--", "..-"]
    const englishString = englishCharacters.join("");
    // "-- ..-"
  
    englishOutput.innerHTML = englishString;
  };
  
  document.getElementById("translateMorseCodeToEnglish").addEventListener("click", translateMorseToEnglish);

// const compareTextToArray = (morseCode, displayText) => {

//     const displayTextLoop = displayText.map();
//     document.getElementById("p").innerHTML(morseLoop);
    

// }

// const morseLoop = (result) => { 
//     return morseCode.char.includes(result);
// }


// compareTextToArray(morseCode, displayText);



// const getUserEmail = (people) => people.map(userEmail);

// const userEmail = (person) =>  person.email;

// console.log(getUserEmail(people));



    