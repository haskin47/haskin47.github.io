
//var gamesystem = "Pathfinder";
var whatweplaying;
var gameList = {
    "D&D": ["9", "10", "11", "12", "13", "14", "15"],
    "Pathfinder": ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
};

var dndRaceList = [
    "Dragonborn", "Hill Dwarf", "Mountain Dwarf", "High Elf", "Wood Elf",
    "Dark Elf", "Forest Gnome", "Rock Gnome", 
    "Half-Elf - +1 to any two ability scores", "Half-Orc",
    "Lightfoot Halfling", "Stout Halfling", "Human", 
    "Variant Human - +1 to any two ability scores", "Tiefling"
];

var pathfinderRaceList = [
    "Dwarf", 
    "Elf", 
    "Gnome", 
    "Human - +2 to any ability score", 
    "Half-Orc - +2 to any ability score", 
    "Halfling", 
    "Half-Elf - +2 to any ability score"
];

var str;
var dex;
var con;
var int;
var wis;
var cha;

var strRace = ""; var dexRace = ""; var conRace = "";
var intRace = ""; var wisRace = ""; var chaRace = "";

var currentRace = "None";
var currentRaceStats = [];

window.onload = function() {
 
    var gamesystem = document.getElementById("system"); 
    whatweplaying = "Nothing";

    console.log(gamesystem);

    
    var strength = document.getElementById("str-score");
    var dexterity= document.getElementById("dex-score");
    var constitution= document.getElementById("con-score");
    var intelligence= document.getElementById("int-score");
    var wisdom= document.getElementById("wis-score");
    var charisma= document.getElementById("cha-score");

    var race = document.getElementById("race");

    for(var x in gameList)
    {
        gamesystem.options[gamesystem.options.length] = new Option(x, x);

    }

    //  "If its stupid, but works, it ain't stupid"
    gamesystem.onchange = function() {
        console.log("System Changed: " + gamesystem.value);
        whatweplaying = gamesystem.value;

        //  empty the scores
        strength.length = 1;
        dexterity.length = 1;
        constitution.length = 1;
        intelligence.length = 1;
        wisdom.length = 1;
        charisma.length = 1;

        race.length = 1;
        
        var stupid2 = 1;
        var stupid = 9;
        for(var n in gameList[this.value]){
            strength.options[stupid2] = new Option(stupid,stupid, false, false);
            dexterity.options[stupid2] = new Option(stupid,stupid, false, false);
            constitution.options[stupid2] = new Option(stupid,stupid, false, false);
            intelligence.options[stupid2] = new Option(stupid,stupid, false, false);
            wisdom.options[stupid2] = new Option(stupid,stupid, false, false);
            charisma.options[stupid2] = new Option(stupid,stupid, false, false);
            

            
            if(stupid == 10 && whatweplaying == "Pathfinder"){
                strength.options[stupid2].selected = true;
                dexterity.options[stupid2].selected = true;
                constitution.options[stupid2].selected = true;
                intelligence.options[stupid2].selected = true;
                wisdom.options[stupid2].selected = true;
                charisma.options[stupid2].selected = true;
            }
            stupid++; stupid2++;
        }

        if(whatweplaying == "D&D"){
            for(var n in dndRaceList){
                race.options[race.options.length] = new Option(dndRaceList[n]);
            }
        }
        
        if(whatweplaying == "Pathfinder"){
            for(var n in pathfinderRaceList){
                race.options[race.options.length] = new Option(pathfinderRaceList[n]);
                
            }
        }
    };

    race.onchange = function(){

        strRace = ""; dexRace = ""; conRace = "";
        intRace = ""; wisRace = ""; chaRace = "";
        
        for(var i = 0; i < race.options.length; i++){
            if(race.options[i].selected == true){
                currentRace = race.options[i].value;
            }
        }
        
        console.log(currentRace);

    }

    //Update();
    setInterval(Update, 1000/10);
    
}



function Update(){

    
    select = document.getElementById("str-score");
    str = select.options[select.selectedIndex].value;
    select = document.getElementById("dex-score");
    dex = select.options[select.selectedIndex].value;
    select = document.getElementById("con-score");
    con = select.options[select.selectedIndex].value;
    select = document.getElementById("int-score");
    int = select.options[select.selectedIndex].value;
    select = document.getElementById("wis-score");
    wis = select.options[select.selectedIndex].value;
    select = document.getElementById("cha-score");
    cha = select.options[select.selectedIndex].value;


    //testing
    //console.log(str);

    document.getElementById("str-mod").innerHTML = Modifier(str);
    document.getElementById("dex-mod").innerHTML = Modifier(dex);
    document.getElementById("con-mod").innerHTML = Modifier(con);
    document.getElementById("int-mod").innerHTML = Modifier(int);
    document.getElementById("wis-mod").innerHTML = Modifier(wis);
    document.getElementById("cha-mod").innerHTML = Modifier(cha);

    sum = 0;
    document.getElementById("str-points").innerHTML = Points(str); sum += Points(str);
    document.getElementById("dex-points").innerHTML = Points(dex); sum += Points(dex);
    document.getElementById("con-points").innerHTML = Points(con); sum += Points(con);
    document.getElementById("int-points").innerHTML = Points(int); sum += Points(int);
    document.getElementById("wis-points").innerHTML = Points(wis); sum += Points(wis);
    document.getElementById("cha-points").innerHTML = Points(cha); sum += Points(cha);

    
    RaceBonus();
    

    document.getElementById("total-points").innerHTML = sum;
    sum = 0;

    //console.log(str);
}
function Modifier(score){
    m = "+0";

    if(score == 4 || score == 5) m = "-3";
    else if(score == 6 || score == 7) m = "-2";
    else if(score == 8 || score == 9) m = "-1";
    else if(score == 10 || score == 11) m = "+0";
    else if(score == 12 || score == 13) m = "+1";
    else if(score == 14 || score == 15) m = "+2";
    else if(score == 16 || score == 17) m = "+3";
    else if(score == 18 || score == 19) m = "+4";
    else if(score == 20 || score == 21) m = "+5";
    else if(score == 22 || score == 23) m = "+6";
    else m = "+0";
    
    return m;
}
function Points(score){
    //console.log(whatweplaying);
//  PATHFINDER 1E
    if(whatweplaying == "Pathfinder"){
        if(score == 8) return -2;
        else if(score == 9) return -1;
        else if(score == 10) return 0;
        else if(score == 11) return 1;
        else if(score == 12) return 2;
        else if(score == 13) return 3;
        else if(score == 14) return 5;
        else if(score == 15) return 7;
        else if(score == 16) return 10;
        else if(score == 17) return 13;
        else if(score == 18) return 17;
        else return 0;
    }

//  D&D 5E
    else if(whatweplaying == "D&D"){
        if(score == 8) return 0;
        else if(score == 9) return 1;
        else if(score == 10) return 2;
        else if(score == 11) return 3;
        else if(score == 12) return 4;
        else if(score == 13) return 5;
        else if(score == 14) return 7;
        else if(score == 15) return 9;
        else return 0;
    }

    else return 0;

}

function RaceBonus(){
    // add functionality later
    

    if(whatweplaying == "Pathfinder"){
        switch(currentRace){
            case "None":
                console.log("Looping default");
                break;
            case "Human":
                break;
            case "Half-Orc":
                break;
            case "Half-Elf":
                break;
            case "Dwarf":
                conRace = "+2";
                wisRace = "+2";
                chaRace = "-2";
                break;
            case "Elf":
                dexRace = "+2";
                intRace = "+2";
                conRace = "-2";
                break;
            case "Gnome":
                conRace = "+2";
                chaRace = "+2";
                strRace = "-2";
                break;
            case "Halfling":
                dexRace = "+2";
                chaRace = "+2";
                strRace = "-2";
                break;
            
        }
    }

    else if(whatweplaying == "D&D"){
        switch(currentRace){
            case "None":
                console.log("Looping default");
                break;
            case "Dragonborn":
                strRace = "+2";
                chaRace = "+1";
                break;
            case "Hill Dwarf":
                conRace = "+2";
                wisRace = "+1";
                break;
            case "Mountain Dwarf":
                strRace = "+2";
                conRace = "+2";
                break;
            case "High Elf":
                dexRace = "+2";
                intRace = "+1";
                break;
            case "Wood Elf":
                dexRace = "+2";
                wisRace = "+1";
                break;
            case "Dark Elf":
                dexRace = "+2";
                chaRace = "+1";
                break;
            case "Forest Gnome":
                intRace = "+2";
                dexRace = "+1";
                break;
            case "Rock Gnome":
                intRace = "+2";
                conRace = "+1";
                break;
            case "Half-Elf - +1 to any two ability scores":
                chaRace = "+2";
                break;
            case "Half-Orc":
                strRace = "+2";
                conRace = "+1";
                break;
            case "Lightfoot Halfling":
                dexRace = "+2";
                chaRace = "+1";
                break;
            case "Stout Halfling":
                dexRace = "+2";
                conRace = "+1";
                break;
            case "Human":
                strRace = "+1";
                dexRace = "+1";
                conRace = "+1";
                intRace = "+1";
                wisRace = "+1";
                chaRace = "+1";
                break;
            case "Variant Human - +1 to any two ability scores":
                break;
            case "Tiefling":
                chaRace = "+2";
                intRace = "+1";
                break;
            
        }
    }

    document.getElementById("str-race").innerHTML = strRace;
    document.getElementById("dex-race").innerHTML = dexRace;
    document.getElementById("con-race").innerHTML = conRace;
    document.getElementById("int-race").innerHTML = intRace;
    document.getElementById("wis-race").innerHTML = wisRace;
    document.getElementById("cha-race").innerHTML = chaRace;
}