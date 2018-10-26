// ==UserScript==
// @name     FindCommonLag
// @version  1
// @grant    none
// @run-at document-idle
// @include /^https://lichess\.org/([a-zA-Z0-9]+(/(white|black).*)?$|analysis|training)
// ==/UserScript==

// @include */lichess.org/*
 setTimeout(function(){
     var lichess = document.querySelector('#lichess');


      var newDiv = document.createElement("p");

    // document.getElementsByClassName("cg-board")[0].appendChild(newDiv);
  lichess.appendChild(newDiv);
 newDiv.id = "Lag";
     newDiv.innerHTML = "Lag Measurements";


 try {
        var script = document.querySelectorAll('script')[2].textContent;
        script = script.substr(script.indexOf('data: ') + 6);
        script = script.substr(0, script.indexOf('i18n:'));
        script = script.substr(0, script.lastIndexOf(',')).trim();
        var data = JSON.parse(script);
    } catch (e) {
         // console.log('clock extension: Lichess clock data not available on this page.');
      newDiv.innerHTML = "Lichess clock data not available on this page";
    }

     var clockthings = data['clock'];
     var initialtime = clockthings['initial'];
     var initialtimehalf = initialtime;
     initialtime = initialtime*2;
















     document.getElementById("user_tag").click();
     document.getElementById("user_tag").click();
     var movesall;
     var movesnumber;
     var n = 0;
     var timeduration;
     var howmanymoves;
     var commonlag;
     var arrayofperformancetimes = [];
         var arrayofcommonlagmeasurements = [];
     var myTime;
     var opTime;
     var timepassedonclock;
     var numberofmovesonfirstcheck;
     var clickpingonce = 0;
    // var yourpingaccordingtolichess;
     var yourpingaccordingtolichess, pingnumber, pingofopponent;

function toSeconds(time) {
        var parts = time.trim().split(':');
        var m = parseInt(parts[0]);
        var secParts = parts[1].split('.');
        var s = parseInt(secParts[0]);
        var h = secParts.length > 1 ? parseInt(secParts[1].substr(0, 1)) : 0;
        var val = m * 60 + s + h / 10;
        return val;
    }
 function readTime(clock) {
        var timer = clock.querySelector('.time');
        return timer ? toSeconds(timer.textContent) : 0;
    }
var myClock = lichess.querySelector('.clock.clock_bottom'),
        opClock = lichess.querySelector('.clock.clock_top');
//var myGameTime = readTime(myClock);
               // var opGameTime = readTime(opClock);
//console.log(myGameTime, opGameTime);
console.log(readTime(myClock), readTime(opClock));





function numberofmoves() {
    movesall = document.querySelectorAll(".moves move");
movesnumber = movesall.length;
return movesnumber;
}
     console.log(numberofmoves());


document.getElementsByClassName("cg-board")[0].onmouseup = function() {getCommonLag()};


     function getCommonLag() {

         var checkstatus = document.getElementsByClassName("result_wrap")[0];

      if ((readTime(myClock)< initialtimehalf || readTime(opClock)< initialtimehalf) && (checkstatus == undefined || checkstatus == null))
      {

if (n > 0) {
   // if ((n > 0) && ((numberofmoves())>numberofmovesonfirstcheck)) {
arrayofperformancetimes[n] = Date.now();
timeduration = arrayofperformancetimes[n] - arrayofperformancetimes[0];
    howmanymoves = numberofmoves();
    myTime = readTime(myClock);
    opTime = readTime(opClock);
    timepassedonclock = (initialtime-(myTime+opTime))*1000
    commonlag = Math.round(((timeduration-((initialtime-(myTime+opTime))*1000))/(howmanymoves-numberofmovesonfirstcheck))*2);
    n = n + 1;
  var yourpingaccordingtolichess = document.getElementsByClassName("ping hint--left")[0];
    if (document.getElementsByClassName("ping hint--left")[0] === undefined || document.getElementsByClassName("ping hint--left")[0] === null){
 document.getElementById("user_tag").click();
     document.getElementById("user_tag").click();
        /*
        if (clickpingonce = 0) {
            document.getElementById("user_tag").click();
            console.log("it should click");
        }

        // setTimeout(function(){
       // document.getElementsByClassName("dropdown")[0].style.display = "none";
        document.getElementById("dasher_app").style.display = "none";
        console.log("this should work");
             //   }, 0);
        yourpingaccordingtolichess = document.getElementsByClassName("ping hint--left")[0];
        clickpingonce = 1;
        */
    }

   /* if (document.getElementsByClassName("ping hint--left")[0] != undefined && document.getElementsByClassName("ping hint--left")[0] != null)
    {
      if (clickpingonce = 1) {
          console.log(clickpingonce);
          document.getElementById("user_tag").click();
           document.getElementsByClassName("dropdown")[0].style.display = "";
      }
    } */
yourpingaccordingtolichess = document.getElementsByClassName("ping hint--left")[0];
    pingnumber = yourpingaccordingtolichess.getElementsByTagName("strong")[0].innerText;
    pingofopponent = commonlag - pingnumber;
    newDiv.innerHTML = "Opponent's approximate lag: " + pingofopponent + "<br />" + " Common lag: " + commonlag + "<br />" + " Your ping according to Lichess: " + pingnumber;






console.log("Opponent's ping:", pingofopponent,
            "Common lag:", commonlag,
            "Your ping:", pingnumber,
            timepassedonclock, timeduration, howmanymoves, n);
}
          if (n == 0)
          {
arrayofperformancetimes[0] = (Date.now())-((initialtime-(readTime(myClock)+readTime(opClock)))*1000);
                n = 1;
              numberofmovesonfirstcheck = numberofmoves();
             // console.log(arrayofperformancetimes[0], n);


          }


      }
     }










     /*
var result = [];
for (var i = 0, l = movesall.length; i < l; i++) {
result[i] = movesall[i].innerText;
}
console.log(result);
*/





















 }, 500);
