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
  
  const translateEnglishToMorseCode = () => {
    const inputValue = input().value;
    
    const output = document.getElementById("morseOutput");
  
    const characters = inputValue.toLowerCase().split("");
 
    const morseCharacters = characters.map(char => alphabet[char]);
    
    const morseString = morseCharacters.join(" ");
    
    output.innerHTML = morseString;
  };
  
  const input = () =>  document.getElementById("englishInput");
  
  
  document.getElementById("translateEnglishToMorse").addEventListener("click", translateEnglishToMorseCode);

  const translateMorseToEnglish = () => {
    const morseInputValue = MorseInput().value;
    
    const englishOutput = document.getElementById("enOutput");
    
    const morseCharacters = morseInputValue.split(" ");
    
    const englishCharacters = morseCharacters.map(char => morseAlphabet[char]);
    
    const englishString = englishCharacters.join("");
    
    englishOutput.innerHTML = englishString;
  };

  const MorseInput = () => document.getElementById("morseInput");
  
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



    