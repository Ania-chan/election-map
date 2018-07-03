var createPolitician = function(name, partyColour)
{
  var politician = {};
  politician.name= name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColour = partyColour;

  return politician;

};

var anna = createPolitician("Anna Jurago", [132, 17, 11]);
var shigeru = createPolitician("Shigeru Nakayama", [245, 141, 136]);

console.log("Ania's color is: " + anna.partyColour);
console.log("Shigeru's color is: " + shigeru.partyColour);

anna.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

shigeru.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

anna.electionResults [9] = 1;
shigeru.electionResults [9] = 28;
anna.electionResults [4] = 17;
shigeru.electionResults [4] = 38;
anna.electionResults [43] = 11;
shigeru.electionResults [43] = 27;

console.log(anna.electionResults);
console.log(shigeru.electionResults);


var setStateResults = function(state)
{
  theStates[state].winner = null;

 if (anna.electionResults[state] > shigeru.electionResults[state])
 {
  theStates[state].winner=anna;
 }
  else if (anna.electionResults[state] < shigeru.electionResults[state])
 {
  theStates[state].winner=shigeru;
 }

 var stateWinner = theStates[state].winner;

  if (stateWinner !== null)
  {
    theStates[state].rgbColor = stateWinner.partyColour;
  }
   else
   {
    theStates[state].rgbColor = [11, 32, 57];}

    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var stateAbbreviation = header.children[0].children[1];
    var name1 = body.children[0].children[0];
    var results1 = body.children[0].children[1];
    var name2 = body.children[1].children[0];
    var results2 = body.children[1].children[1];
    var winnerName = body.children[2].children[1];


    stateName.innerText = theStates[state].nameFull;
    stateAbbreviation.innerText = "(" + theStates[state].nameAbbrev + ")";

    name1.innerText = anna.name;
    name2.innerText = shigeru.name;

    results1.innerText = anna.electionResults[state];
    results2.innerText = shigeru.electionResults[state];

    if (theStates[state].winner === null) {
      winnerName.innerText = "DRAW";
    } else {
      winnerName.innerText = theStates[state].winner.name;
    }

}

anna.tallyUpElectionResults = function() {
  this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

shigeru.tallyUpElectionResults = function() {
    this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

anna.tallyUpElectionResults();
shigeru.tallyUpElectionResults();
console.log(anna.totalVotes);
console.log(shigeru.totalVotes);

var winner = "???";
  if (anna.totalVotes > shigeru.totalVotes)
  {
    winner = anna.name;
  }
   else if (shigeru.totalVotes > anna.totalVotes)
   {
     winner = shigeru.name;
   }
   else {
     winner = "DRAW.";
   }

 console.log("And the winner is " + winner + "!!!");
console.log("Ania's color is: " + anna.partyColour);
console.log("Shigeru's color is: " + shigeru.partyColour);

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = anna.name;
row.children[1].innerText = anna.totalVotes;
row.children[2].innerText = shigeru.name;
row.children[3].innerText = shigeru.totalVotes;
row.children[5].innerText = winner;
