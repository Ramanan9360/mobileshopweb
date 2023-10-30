function valid()
{
    //Name
    v1=document.getElementById("name");
    e1=document.getElementById("er1");
    exp1=/^[A-Z]{1}[a-z]{3,20}$/;
    if(v1.value=="")
    {
        e1.innerHTML="Please Enter Your Name";
        v1.focus();
        return false;
    }
    else if(exp1.test(v1.value)==false)
    {
        e1.innerText="Invalid name";
        v1.focus();
        return false;
    }
    else
    {
        e1.innerHTML="";
    }
	//email
	v2=document.getElementById("mail");
	e2=document.getElementById("er2");
	if(v2.value=='')
	{
		e2.innerHTML="Please Enter Your Mail";
        v2.focus();
        return false;
	}
	else{
		e2.innerHTML="";
	}
	//Phone
    v3=document.getElementById("number");
    e3=document.getElementById("er3");
    exp2=/^[6-9]{1}[0-9]{9}$/;
    if(v3.value=="")
    {
        e3.innerText="Please enter your phone number";
        v3.focus();
        return false;
    }
    else if(exp2.test(v3.value)==false)
    {
        e3.innerText="Invalid phone number";
        v3.focus();
        return false;
    }
    else
    {
        e3.innerText="";
    }
	//location
	v4=document.getElementById("location");
	e4=document.getElementById("er4");
	if(v4.value=='')
	{
		e4.innerHTML="Please Enter Your Address";
        v4.focus();
        return false;
	}
	else{
		e4.innerHTML="";
	}
}