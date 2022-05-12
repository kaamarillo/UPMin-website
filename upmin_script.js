function homeUpmin(evt, UpminHome) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(UpminHome).style.display = "block";
  evt.currentTarget.className += " active";
}

function homeDefault(evt, History) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(History).style.display = "block";
  evt.currentTarget.className += " active";
}

function AcademicPrograms(evt, AcademicP){
	var i, tabcontent, tablinks;
	var acc = document.getElementsByClassName("accordion");

	tabcontent = document.getElementsByClassName("content");
	for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(AcademicP).style.display = "block";
	evt.currentTarget.className += " active";

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
		} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
		} 
		});
	}
}

function SUForm(evt, SignUp){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("content");
	for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(SignUp).style.display = "block";
	evt.currentTarget.className += " active";
	
	$( function() {
    $( "#dateofbirth" ).datepicker();
	} );
	
	$( function() {
    var availableTags = [
      "Agusan del Norte",
	  "Agusan del Sur",
	  "Basilan",
	  "Bukidnon",
	  "Camiguin",
	  "Compostela Valley",
	  "Cotabato",
	  "Davao del Norte",
	  "Davao del Sur",
	  "Davao Occidental",
	  "Davao Oriental",
	  "Dinagat Islands",
	  "Lanao del Norte",
	  "Lanao del Sur",
	  "Maguindanao",
	  "Misamis Occidental",
	  "Misamis Oriental",
	  "Sarangani",
	  "South Cotabato",
	  "Sultan Kudarat",
	  "Sulu",
	  "Surigao del Norte",
	  "Surigao del Sur",
	  "Tawi-Tawi",
	  "Zamboanga del Norte",
	  "Zamboanga del Sur",
	  "Zamboanga Sibugay"
    ];
    $( "#province" ).autocomplete({
      source: availableTags
    });
  } );
  
  $(function(){
	 var spinner = $(year_level).spinner();
  });
}
	
function SubmitForm(){
	var fname = document.getElementById("fname").value;
	var mname = document.getElementById("mname").value;
	var lname = document.getElementById("lname").value;
    var sex = $("input[name='sex']:checked").val();
	var dob = $("#dateofbirth").datepicker({dateFormat: "MM dd yyyy"}).val();
	var prov = document.getElementById("province").value;
	var yr_level = document.getElementById("year_level").value;
	
	var data = ("Name: "+fname+" "+mname+" "+lname+" "+"\n"+"Sex: "+sex+"\n"+"Date of Birth: "+dob+"\n"+"Province: "+prov+"\n"+"Year Level: "+yr_level);
	
	var file = new Blob([data], {type:"text/plain"});
	var newFile = document.createElement("a");
	newFile.href = URL.createObjectURL(file);
	newFile.download = "SignUpForm.txt";
	newFile.style.display = "none";
	newFile.click();

}


function AcademicUnits(evt, AcademicUn){
	 var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(AcademicUn).style.display = "block";
  evt.currentTarget.className += " active";
  
	$(document).ready(function(){
    $("#name").on('change', function(){
        $(".data").hide();
        $("#" + $(this).val()).fadeIn(700);
    }).change();
});
}
