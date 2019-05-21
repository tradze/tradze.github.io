var x, buves, priestaibuves;
var dukartai=0, laimejai=0;
var pav, buvespav="";
function vykdyk()
{
    if(pav==buvespav && dukartai==1)
    {
        document.getElementById(x).style.visibility="hidden";
        document.getElementById(buves).style.visibility="hidden";
        laimejai++;
        duKartai=0;
        if(laimejai==3){
            alert ("Laimejai");
        }
    }
    else if (dukartai==2)
    {
        document.getElementById(buves).src="image/turn.png";
        document.getElementById(priestaibuves).src="image/turn.png";
        dukartai=1;
        buvespav=pav;
    }
    else if(dukartai<2)
    {
        dukartai++;
        buvespav=pav;
    }
    document.getElementById(x).src=pav;
    priestaibuves=buves;
    buves=x;
}

function versti1()
{
    x = "p1";
    pav = "image/fire.png";
    vykdyk(x, pav);
}
function versti2()
{
    x = "p2";
    pav = "image/yt.png";
    vykdyk(x, pav);
}

function versti3()
{
    x = "p3";
    pav = "image/fire.png";
    vykdyk(x, pav);
}
function versti4()
{
    x = "p4";
    pav = "image/twitter.png";
    vykdyk(x, pav);
}
function versti5()
{
    x = "p5";
    pav = "image/twitter.png";
    vykdyk(x, pav);
}
function versti6()
{
    x = "p6";
    pav = "image/yt.png";
    vykdyk(x, pav);
}
