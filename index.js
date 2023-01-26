function CaesarCipher(str,num) { 

  // code goes here  
  let newstr=[]
  let alpha = ['=','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  for (let i=0; i<str.length;i++) {
    if (alpha.indexOf(str[i])>0) {
      newstr.push(alpha[alpha.indexOf(str[i]) + num])
    }
     else {
      newstr.push(str[i])
    }
  } 
  return newstr.join('').toString()

}
   
// keep this function call here 
console.log(CaesarCipher("some change",1));