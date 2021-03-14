function renderAge(){
	var mydate = new Date();
	var year = mydate.getYear();
		if(year<1000)
		{
			year +=1900;
		}
	year = year - 1999;
	var myage = document.getElementById("age");
	myage.textContent = " "+ year;
	setTimeout("renderAge()", 1000);
}
renderAge();