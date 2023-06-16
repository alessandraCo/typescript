//Welcome Message
console.log(`Ex2: Spin Sdrow`);
console.log(`I reverte all five or more letters words`);

//input
const stringIn: string = `Lorem ipsum dolor sit amet. Est facilis eligendi et consequatur vitae nam molestias nobis et amet voluptatem eos neque quidem et voluptas Quis. Qui quos ipsa est perspiciatis cumque et veniam nisi ad dolor saepe id rerum necessitatibus? Aut placeat blanditiis et excepturi quisquam sit delectus reiciendis sit velit officia. Est odit sunt ut maxime voluptates ut eius omnis At mollitia omnis sed culpa minima. Quo ipsum dolor sit voluptatem quia ut voluptatem assumenda et enim sequi! Vel labore galisum qui voluptas fugit aut nihil incidunt hic doloribus commodi. Et itaque assumenda qui tenetur aperiam 33 fugit asperiores qui sint nisi aut assumenda sunt non nobis corporis aut odio obcaecati! Sed molestiae provident ex quia distinctio non provident quibusdam aut modi doloribus. Ut reiciendis facilis cum illum asperiores est deserunt omnis.`;
//output
let stringOut: string[] = [];

//function that returns the given word reverted using the reverse() method of array (on an array char)
function reverteWord(word: string): string {
  let arrayChar = word.split("");
  let wordOut = arrayChar.reverse();
  return wordOut.join("");
}

//function that reverves only five or more letters words in a string
function reverteTest(testIn: string) : string{
  //words array from input
  let arrayWords = testIn.split(" ");
  arrayWords.forEach(word  => {
    if(word.length >= 5) {
        const reverted = reverteWord(word);
        stringOut.push(reverted);
    } else {
        stringOut.push(word);
    }
  })
  return stringOut.join(" ");
}

console.log(reverteTest(stringIn));
