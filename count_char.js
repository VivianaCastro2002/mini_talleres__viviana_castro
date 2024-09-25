https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
    const characterCount={};
    
    for (let char of string){
      if (characterCount[char]){
        characterCount[char]++;
      }else{
        characterCount[char] =1;
      } 
    }
    return characterCount;
  }