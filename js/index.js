// I know I could have done it all way simpler and with less code but I realized just that, when I was nearly done and thought to myself that for this exercise this simple approach will do as well


var fccOff = document.getElementById("s-fcc");
var fccCon = document.getElementById("c-fcc");
var fccNam = document.getElementById("fcc");

var storbeckOff = document.getElementById("s-storbeck");
var storbeckCon = document.getElementById("c-storbeck");
var storbeckNam = document.getElementById("storbeck");

var teraOff = document.getElementById("s-tera");
var teraCon = document.getElementById("c-tera");
var teraNam = document.getElementById("tera");

var habaOff = document.getElementById("s-haba");
var habaCon = document.getElementById("c-haba");
var habaNam = document.getElementById("haba");

var roboOff = document.getElementById("s-robo");
var roboCon = document.getElementById("c-robo");
var roboNam = document.getElementById("robo");

var thomasOff = document.getElementById("s-thomas");
var thomasCon = document.getElementById("c-thomas");
var thomasNam = document.getElementById("thomas");

var n2nOff = document.getElementById("s-n2n");
var n2nCon = document.getElementById("c-n2n");
var n2nNam = document.getElementById("n2n");

var beoOff = document.getElementById("s-beo");
var beoCon = document.getElementById("c-beo");
var beoNam = document.getElementById("beo");

$(document).ready(function() {

  for (i = 0; i < 8; i++) {

    switch (i) {

      case (0): //freecodecamp
        $.getJSON("https://api.twitch.tv/kraken/streams/freecodecamp?callback=?", function(json) {

          var fjobj = JSON.stringify(json[Object.keys(json)[0]]);
          var status = fjobj.slice(1, -1);

          switch (status) {
            case ("Unprocessable Entity"):
              fccOff.innerText = "Not available";
              fccOff.style.color = "red";
              fccOff.style.backgroundColor = "black";
              fccCon.innerText = "---";
              fccCon.style.color = "red";
              fccCon.style.backgroundColor = "black";
              fccNam.innerText = "freecodecamp";
              fccNam.style.color = "red";
              fccNam.style.backgroundColor = "black";
              break;

            case ("ul"):
              fccOff.innerText = "Offline";
              fccOff.style.color = "white";
              fccOff.style.backgroundColor = "black";
              fccCon.innerText = "---";
              fccCon.style.color = "white";
              fccCon.style.backgroundColor = "black";
              fccNam.innerText = "freecodecamp";
              fccNam.style.color = "white";
              fccNam.style.backgroundColor = "black";
              break;

            default:
              var info = JSON.stringify(json.stream.channel.status);
              info = info.slice(1,-1);
              
              fccOff.innerText = "Online";
              fccOff.style.color = "white";
              fccOff.style.backgroundColor = "green";
              fccCon.innerText = info;
              fccCon.style.color = "white";
              fccCon.style.backgroundColor = "green";
              //fccNam.innerText = "freecodecamp";
              fccNam.style.color = "white";
              fccNam.style.backgroundColor = "green";
              break;
          }

        });
        break;

      case (1): //storbeck
        $.getJSON("https://api.twitch.tv/kraken/streams/storbeck?callback=?", function(json) {

          var fjobj = JSON.stringify(json[Object.keys(json)[0]]);
          var status = fjobj.slice(1, -1);

          switch (status) {
            case ("Unprocessable Entity"):
              storbeckOff.innerText = "Not available";
              storbeckOff.style.color = "red";
              storbeckOff.style.backgroundColor = "black";
              storbeckCon.innerText = "---";
              storbeckCon.style.color = "red";
              storbeckCon.style.backgroundColor = "black";
              storbeckNam.innerText = "storbeck";
              storbeckNam.style.color = "red";
              storbeckNam.style.backgroundColor = "black";
              break;

            case ("ul"):
              storbeckOff.innerText = "Offline";
              storbeckOff.style.color = "white";
              storbeckOff.style.backgroundColor = "black";
              storbeckCon.innerText = "---";
              storbeckCon.style.color = "white";
              storbeckCon.style.backgroundColor = "black";
              storbeckNam.innerText = "storbeck";
              storbeckNam.style.color = "white";
              storbeckNam.style.backgroundColor = "black";
              break;

            default:
              var info = JSON.stringify(json.stream.channel.status);
              info = info.slice(1,-1);
              
              storbeckOff.innerText = "Online";
              storbeckOff.style.color = "white";
              storbeckOff.style.backgroundColor = "green";
              storbeckCon.innerText = info;
              storbeckCon.style.color = "white";
              storbeckCon.style.backgroundColor = "green";
              //storbeckNam.innerText = "storbeck";
              storbeckNam.style.color = "white";
              storbeckNam.style.backgroundColor = "green";
              break;
          }

        });
        break;

      case (2): //terakilobyte
        $.getJSON("https://api.twitch.tv/kraken/streams/terakilobyte?callback=?", function(json) {

          var fjobj = JSON.stringify(json[Object.keys(json)[0]]);
          var status = fjobj.slice(1, -1);

          switch (status) {
            case ("Unprocessable Entity"):
              teraOff.innerText = "Not available";
              teraOff.style.color = "red";
              teraOff.style.backgroundColor = "black";
              teraCon.innerText = "---";
              teraCon.style.color = "red";
              teraCon.style.backgroundColor = "black";
              teraNam.innerText = "terakilobyte";
              teraNam.style.color = "red";
              teraNam.style.backgroundColor = "black";
              break;

            case ("ul"):
              teraOff.innerText = "Offline";
              teraOff.style.color = "white";
              teraOff.style.backgroundColor = "black";
              teraCon.innerText = "---";
              teraCon.style.color = "white";
              teraCon.style.backgroundColor = "black";
              teraNam.innerText = "terakilobyte";
              teraNam.style.color = "white";
              teraNam.style.backgroundColor = "black";
              break;

            default:
              var info = JSON.stringify(json.stream.channel.status);
              info = info.slice(1,-1);
              
              teraOff.innerText = "Online";
              teraOff.style.color = "white";
              teraOff.style.backgroundColor = "green";
              teraCon.innerText = info;
              teraCon.style.color = "white";
              teraCon.style.backgroundColor = "green";
              //teraNam.innerText = "terakilobyte";
              teraNam.style.color = "white";
              teraNam.style.backgroundColor = "green";
              break;
          }

        });
        break;

      case (3): //habathcx
        $.getJSON("https://api.twitch.tv/kraken/streams/habathcx?callback=?", function(json) {

          var fjobj = JSON.stringify(json[Object.keys(json)[0]]);
          var status = fjobj.slice(1, -1);

          switch (status) {
            case ("Unprocessable Entity"):
              habaOff.innerText = "Not available";
              habaOff.style.color = "red";
              habaOff.style.backgroundColor = "black";
              habaCon.innerText = "---";
              habaCon.style.color = "red";
              habaCon.style.backgroundColor = "black";
              habaNam.innerText = "habathcx";
              habaNam.style.color = "red";
              habaNam.style.backgroundColor = "black";
              break;

            case ("ul"):
              habaOff.innerText = "Offline";
              habaOff.style.color = "white";
              habaOff.style.backgroundColor = "black";
              habaCon.innerText = "---";
              habaCon.style.color = "white";
              habaCon.style.backgroundColor = "black";
              habaNam.innerText = "habathcx";
              habaNam.style.color = "white";
              habaNam.style.backgroundColor = "black";
              break;

            default:
              var info = JSON.stringify(json.stream.channel.status);
              info = info.slice(1,-1);
              
              habaOff.innerText = "Online";
              habaOff.style.color = "white";
              habaOff.style.backgroundColor = "green";
              habaCon.innerText = info;
              habaCon.style.color = "white";
              habaCon.style.backgroundColor = "green";
              //habaNam.innerText = "habathcx";
              habaNam.style.color = "white";
              habaNam.style.backgroundColor = "green";
              break;
          }

        });
        break;

      case (4): //RobotCaleb
        $.getJSON("https://api.twitch.tv/kraken/streams/RobotCaleb?callback=?", function(json) {

          var fjobj = JSON.stringify(json[Object.keys(json)[0]]);
          var status = fjobj.slice(1, -1);

          switch (status) {
            case ("Unprocessable Entity"):
              roboOff.innerText = "Not available";
              roboOff.style.color = "red";
              roboOff.style.backgroundColor = "black";
              roboCon.innerText = "---";
              roboCon.style.color = "red";
              roboCon.style.backgroundColor = "black";
              roboNam.innerText = "RobotCaleb";
              roboNam.style.color = "red";
              roboNam.style.backgroundColor = "black";
              break;

            case ("ul"):
              roboOff.innerText = "Offline";
              roboOff.style.color = "white";
              roboOff.style.backgroundColor = "black";
              roboCon.innerText = "---";
              roboCon.style.color = "white";
              roboCon.style.backgroundColor = "black";
              roboNam.innerText = "RobotCaleb";
              roboNam.style.color = "white";
              roboNam.style.backgroundColor = "black";
              break;

            default:
              var info = JSON.stringify(json.stream.channel.status);
              info = info.slice(1,-1);
              
              roboOff.innerText = "Online";
              roboOff.style.color = "white";
              roboOff.style.backgroundColor = "green";
              roboCon.innerText = info;
              roboCon.style.color = "white";
              roboCon.style.backgroundColor = "green";
              //roboNam.innerText = "RobotCaleb";
              roboNam.style.color = "white";
              roboNam.style.backgroundColor = "green";
              break;
          }

        });
        break;

      case (5): //thomasballinger
        $.getJSON("https://api.twitch.tv/kraken/streams/thomasballinger?callback=?", function(json) {

          var fjobj = JSON.stringify(json[Object.keys(json)[0]]);
          var status = fjobj.slice(1, -1);

          switch (status) {
            case ("Unprocessable Entity"):
              thomasOff.innerText = "Not available";
              thomasOff.style.color = "red";
              thomasOff.style.backgroundColor = "black";
              thomasCon.innerText = "---";
              thomasCon.style.color = "red";
              thomasCon.style.backgroundColor = "black";
              thomasNam.innerText = "thomasballinger";
              thomasNam.style.color = "red";
              thomasNam.style.backgroundColor = "black";
              break;

            case ("ul"):
              thomasOff.innerText = "Offline";
              thomasOff.style.color = "white";
              thomasOff.style.backgroundColor = "black";
              thomasCon.innerText = "---";
              thomasCon.style.color = "white";
              thomasCon.style.backgroundColor = "black";
              thomasNam.innerText = "thomasballinger";
              thomasNam.style.color = "white";
              thomasNam.style.backgroundColor = "black";
              break;

            default:
              var info = JSON.stringify(json.stream.channel.status);
              info = info.slice(1,-1);
              
              thomasOff.innerText = "Online";
              thomasOff.style.color = "white";
              thomasOff.style.backgroundColor = "green";
              thomasCon.innerText = info;
              thomasCon.style.color = "white";
              thomasCon.style.backgroundColor = "green";
              //thomasNam.innerText = "thomasballinger";
              thomasNam.style.color = "white";
              thomasNam.style.backgroundColor = "green";
              break;
          }

        });
        break;

      case (6): //noobs2ninjas
        $.getJSON("https://api.twitch.tv/kraken/streams/noobs2ninjas?callback=?", function(json) {

          var fjobj = JSON.stringify(json[Object.keys(json)[0]]);
          var status = fjobj.slice(1, -1);

          switch (status) {
            case ("Unprocessable Entity"):
              n2nOff.innerText = "Not available";
              n2nOff.style.color = "red";
              n2nOff.style.backgroundColor = "black";
              n2nCon.innerText = "---";
              n2nCon.style.color = "red";
              n2nCon.style.backgroundColor = "black";
              n2nNam.innerText = "noobs2ninjas";
              n2nNam.style.color = "red";
              n2nNam.style.backgroundColor = "black";
              break;

            case ("ul"):
              n2nOff.innerText = "Offline";
              n2nOff.style.color = "white";
              n2nOff.style.backgroundColor = "black";
              n2nCon.innerText = "---";
              n2nCon.style.color = "white";
              n2nCon.style.backgroundColor = "black";
              n2nNam.innerText = "noobs2ninjas";
              n2nNam.style.color = "white";
              n2nNam.style.backgroundColor = "black";
              break;

            default:
              var info = JSON.stringify(json.stream.channel.status);
              info = info.slice(1,-1);
              
              n2nOff.innerText = "Online";
              n2nOff.style.color = "white";
              n2nOff.style.backgroundColor = "green";
              n2nCon.innerText = info;
              n2nCon.style.color = "white";
              n2nCon.style.backgroundColor = "green";
              //n2nNam.innerText = "noobs2ninjas";
              n2nNam.style.color = "white";
              n2nNam.style.backgroundColor = "green";
              break;
          }

        });
        break;

      case (7): //beohoff
        $.getJSON("https://api.twitch.tv/kraken/streams/beohoff?callback=?", function(json) {

          var fjobj = JSON.stringify(json[Object.keys(json)[0]]);
          var status = fjobj.slice(1, -1);

          switch (status) {
            case ("Unprocessable Entity"):
              beoOff.innerText = "Not available";
              beoOff.style.color = "red";
              beoOff.style.backgroundColor = "black";
              beoCon.innerText = "---";
              beoCon.style.color = "red";
              beoCon.style.backgroundColor = "black";
              beoNam.innerText = "beohoff";
              beoNam.style.color = "red";
              beoNam.style.backgroundColor = "black";
              break;

            case ("ul"):
              beoOff.innerText = "Offline";
              beoOff.style.color = "white";
              beoOff.style.backgroundColor = "black";
              beoCon.innerText = "---";
              beoCon.style.color = "white";
              beoCon.style.backgroundColor = "black";
              beoNam.innerText = "beohoff";
              beoNam.style.color = "white";
              beoNam.style.backgroundColor = "black";
              break;

            default:
              var info = JSON.stringify(json.stream.channel.status);
              info = info.slice(1,-1);
              
              beoOff.innerText = "Online";
              beoOff.style.color = "white";
              beoOff.style.backgroundColor = "green";
              beoCon.innerText = info;
              beoCon.style.color = "white";
              beoCon.style.backgroundColor = "green";
              //beoNam.innerText = "beohoff";
              beoNam.style.color = "white";
              beoNam.style.backgroundColor = "green";
              break;
          }

        });
        break;

      
    }
  }
});