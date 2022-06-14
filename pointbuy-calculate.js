
var gamesystem = "Pathfinder";

var str;
var dex;
var con;
var int;
var wis;
var cha;



window.onload = function() {
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
    else if(score == 8 || score == 7) m = "-1";
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
//  PATHFINDER 1E
    if(gamesystem === "Pathfinder"){
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
    else if(gamesystem === "D&D"){
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

    else return "X";

}
