const someString = "The evil that men do";

const countVowels = (phrase/*esto es lo que evaluo*/) => {
    const vowelsList = /[AEIOUaeiou]/g;
    const phraselength = phrase.length;
    let total = 0;

//for(inicio, condicion para terminar, incremento)
for(let i=0; i < phraselength; i++){
    let isVowel = vowelsList.test(phrase.charAt(i));
if(isVowel){
    total++
}
}
return total;

};

const test1 = countVowels(someString);
const test2 = countVowels("Amor de mis amores");
console.log(test1);
console.log(test2);