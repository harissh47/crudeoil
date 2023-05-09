function validate()
{
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="harissh"&&password=="a")

    {   alert("login succesfully");
        location.href("https://colab.research.google.com/drive/1h6_58HlFjSROzLqQfrx00KQgz916_6tL");
        return true;
    }
    else
    {
        document.getElementById("username").disabled=true;
        document.getElementById("password").disabled=true; 
        return false;
    }
    
}


{
    document.getElementById("email").value="";
    document.getElementById("pwd1").value="";
}