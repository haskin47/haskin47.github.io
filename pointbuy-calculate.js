
//var gamesystem = "Pathfinder";
var whatweplaying;
var gameList = {
    "D&D": ["9", "10", "11", "12", "13", "14", "15"],
    "Pathfinder": ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
};


var str;
var dex;
var con;
var int;
var wis;
var cha;



window.onload = function() {
 
    var gamesystem = document.getElementById("system"); 
    whatweplaying = "Nothing";

    console.log(gamesystem);

    
    var strength = document.getElementById("str-score");;
    var dexterity= document.getElementById("dex-score");;
    var constitution= document.getElementById("con-score");;
    var intelligence= document.getElementById("int-score");;
    var wisdom= document.getElementById("wis-score");;
    var charisma= document.getElementById("cha-score");;

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
        var stupid2 = 1;
        var stupid = 9;
        for(var n in gameList[this.value]){
            strength.options[stupid2] = new Option(stupid,stupid);
            stupid++; stupid2++;
        }
    };

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

    
    document.getElementById("total-points").innerHTML = sum;
    sum = 0;

    //console.log(str);
}

function RaceBonus(){
    // add functionality later

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
