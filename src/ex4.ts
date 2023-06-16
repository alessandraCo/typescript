//Welcome Message
console.log(`Ex4: Il Lonfo`);
console.log(`Returning 'Il Lonfo' alphabetically ordered`);

//input
const ilLonfo: string =
  "Il Lonfo non vaterca né gluisce e molto raramente barigatta, ma quando soffia il bego a bisce bisce sdilenca un poco e gnagio s'archipatta. È frusco il Lonfo! È pieno di lupigna arrafferia malversa e sofolenta! Se cionfi ti sbiduglia e ti arrupigna se lugri ti botalla e ti criventa. Eppure il vecchio Lonfo ammargelluto che bete e zugghia e fonca nei trombazzi fa lègica busìa, fa gisbuto; e quasi quasi in segno di sberdazzi gli affarferesti un gniffo. Ma lui zuto t'alloppa, ti sbernecchia; e tu l'accazzi.";

//output
let orderedLonfo: string[];

//this function serch duplicates in array
function isDuplicated(word : string, array : string[]) : boolean {
    return array.includes(word);
}

//this function alphabetically order the input
function computeAlphabeticallyOrder(input: string) : string{
  //output
  let output: string[] = [];
  //wordArray : arrayString[] containing the 'il Lonfo' words
  let wordArray: string[] = input.split(" ");
  //removing puntuations and apostrophes
  wordArray.forEach((word) => {
    //toLowerCase
    word = word.toLocaleLowerCase();
    //removing apostrophes
    if (word.includes("'")) {
      let apostropheWord: string[] = word.split("'");
      let newWord = apostropheWord.slice(1).toString();
      word = newWord;
    }
    //letterArray: arrayString[] containing every letter of the word
    let letterArray: string[] = word.split("");
    letterArray.forEach((letter) => {
      //removing punctuation
      if (
        letter === "." ||
        letter === ":" ||
        letter === "," ||
        letter === ";" ||
        letter === "?" ||
        letter === "!"
      ) {
        letterArray.pop();
      }
    });
    let newWord : string = letterArray.join("");
    if(!isDuplicated(newWord, output)) {
        output.push(letterArray.join(""));
    }
  });
  output = output.sort();
  return output.join(" ");
}

console.log(computeAlphabeticallyOrder(ilLonfo));
