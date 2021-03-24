$("#details").hide();
$("#w1").hide();
$("#w2").hide();
$("#w3").hide();
var id=0;
//for appending data
function output()
{
    var name = document.getElementById("nme").value;
    var phn = document.getElementById("phn").value;
    var email = document.getElementById("mail").value;
    var out = "<div class='row' id='id"+id+"'>"+"<div class='col-sm-3'>"+name+"</div>"+"<div class='col-sm-3'>"+
    phn+"</div>"+"<div class='col-sm-3'>"+email+"</div>"+"<div class='col-sm-3'>"+
    "<button class='btn btn-primary' onclick='del(id)' id='id"+id+"'>"+"Delete</button>"+"</div>"+"</div>";
    document.getElementById("output").innerHTML+=out;
    id+=1;
    document.getElementById("nme").value="";
    document.getElementById("phn").value="";
    document.getElementById("mail").value="";
}
function del(val)
{
    //for deletion of data
    document.getElementById("output").removeChild(document.getElementById(val));
}
//for validating the data
function formValidate(){
    var name = document.getElementById("nme").value;
    var phn = document.getElementById("phn").value;
    var email = document.getElementById("mail").value;
    if(name==""||phn==""||email=="")
    {
        alert("Enter your all details in the given fields");
        return false;
    }
    else
    {
        var f1=0;
        var f2=0;
        var f3=0;
        if(name.length<3)
        {
            $("#w1").show();
            f1=1;
        }
        else
        {
            $("#w1").hide();
            f1=0;
        }
        if(phn.length!=10)
        {
            $("#w2").show();
            f2=1;
        }
        else
        {
            $("#w2").hide();
            f2=0;
        }
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
        {
            $("#w3").show();
            f3=1;
        }
        else
        {
            $("#w3").hide();
            f3=0;
        }
        if(f1==0&&f2==0&&f3==0)
        {
        output();
        $("#details").show();
        }
    }
}