 // INITAILIZING VARIABLES
 var millisec = 0
 var sec = 0
 var timer = document.getElementById('timer')
 var Startbtn = document.getElementById('Startbtn')
 var settime
 var result = document.getElementById('result')
 var Usertext = document.getElementById("UserText");
 var TimeTaken = 0
 var compare
 var compareData
 var randomindex = Math.floor(Math.random() * 10)
 var sentenceToType = document.getElementById("sentenceToType");
 var RefSentence = ""
 var errorWords = 0;
 var correctWords = 0;
 var missedpunc
 var speedP = 0
 var speedWP = 0
 var obj
 var NameofPlayer = ""
 var difficulty = document.getElementById('DIFFICULTY').value
 var wordCount = 0;
 // ===================================================================================================================================


 



 console.log(RefSentence)
     // getting container list
 var containerList = document.getElementsByClassName("container");
 console.log(containerList.length)


 var ProceedBtn = document.getElementById("proceed")


 ProceedBtn.addEventListener("click", () => {
     NameofPlayer = document.getElementById("Name").value
     difficulty = document.getElementById('DIFFICULTY').value

     document.getElementById("resultMessage").innerText = " THANKS " + NameofPlayer + " FOR USING THIS TYPING TEST."
         containerList[0].style.display = "none";
         containerList[1].style.display = "block";
         document.getElementById("playerName").innerHTML = "HELLO " + NameofPlayer + " . ";
         document.getElementById("chosenDifficulty").innerHTML = "GLAD THAT YOU CHOSE " + difficulty + " LEVEL . ";
 })


 //  FUNCTION THAT STARTS THE GAME 
 function StartGame() {

     Startbtn.style.display = 'none' //hiding Start Button
   document.getElementById("SecondPageRule").style.display = "none"; //hiding Second page rule list
     document.getElementById("Submit").style.display = 'inline-block' //hiding Start Button
     document.getElementById('TypingBox').style.display = 'block' //displaying Text box


   
     // Timer Functions
     timer.innerHTML = 'Time ' + sec + ' : ' + millisec + 'seconds'

     if (millisec < 9) {
         timer.innerHTML = 'Time ' + sec + ' : ' + '0' + millisec + 'seconds'
     }
     if (sec <= 9) {
         timer.innerHTML = 'Time ' + '0' + sec + ' : ' + millisec + 'seconds'
     }
     millisec++
     if (millisec == 100) {
         sec++
         millisec = 0
     }
 }
 var StartTime = () => {
     settime = setInterval(StartGame, 10)
 }
 Startbtn.addEventListener('click', StartTime)

 function WordCounter(str) {
     var response = str.split(' ').length //Conting no. of space 
     console.log(response)
     return response
 }




 // FUNCTION THAT STOPS THE GAME
 function stopTimer() {
     clearInterval(settime)
     var NewSec = sec
     var Newmillisec = millisec - 1;
     document.getElementById('Submit').style.display = "none"
     document.getElementById('ShowResult').style.display = "inline-block"
     console.log(NewSec)
     console.log(Newmillisec)


 }




 function ShowResult() {
     containerList[1].style.display = "none";
     containerList[2].style.display = "block";
 }
