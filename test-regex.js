var input= "nadar";     // neither email nor website
var input="nadarissac@gmail.com";      // only email
var input="youtube.com";               //website domain

const emailRegex = new RegExp("[a-z0-9]+@[a-z0-9]+\\.[a-z0-9]+", "g");
const domainRegex = new RegExp("[a-z0-9]+\\.[a-z]+","g");

   if(emailRegex.test(input)){
        console.log(input +" is email");
   }else if(domainRegex.test(input)){
        console.log(input+" is domain");
       
   }else{
        console.log(input +" neither is email nor domain");
   }