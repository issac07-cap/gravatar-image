/*
This project takes emailID or domain name from the user 
and displays the gravatar image or domain logo 
*/ 
const http = require("http");
const express = require("express");
const app = express();
const crypto = require("crypto");

// extract form data form post request body
app.use(
  express.urlencoded({
    extended: true,
  })
);

// display the form 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/userinfo.html");
});

/* 
for email, creates md5 hash emailid,
checks whether it is emailId and display it's gravatar
if it's domain displays logo 
*/
app.post("/", function (request, response, next) {
  var displayText="";
  var output = "";
  var input = request.body.emailId; //website domain
  const emailRegex = new RegExp("[a-z0-9]+@[a-z0-9]+\\.[a-z0-9]+", "g");
  const domainRegex = new RegExp("[a-z0-9]+\\.[a-z]+", "g");
  let emailHash, gravatarUrl,clearbitUrl;
  

  if (emailRegex.test(input)) {
    output = "The entered texttype is email";
    // md5 algo to create hash
    emailHash = crypto.createHash("md5").update(input).digest("hex");
    gravatarUrl = "https://s.gravatar.com/avatar/" + emailHash + "?s=80";
    displayText = "the entered text is :" +input +"<br>" +
                  output +"<br>" +
                  "<img src=" +gravatarUrl +">";

  } else if (domainRegex.test(input)) {
    output = " The entered text type is domain";
    clearbitUrl = "https://logo.clearbit.com/"+input;
    displayText = "the entered text is :" +input +"<br>" +
                  output +"<br>" +
                  "<img src=" + clearbitUrl +">";

  } else {
     displayText = "The entered text type is neither email nor domain";
  }
  
 response.send(displayText);

});
app.listen(2000);

