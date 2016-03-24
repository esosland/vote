$(window).load(function(){
        $('#myModal').modal('show');
    });
$(function(){
	


	$("button#submit").click(function(event){
		
		var dob = $("#dob").val();
		var age = moment().diff(moment(dob, 'YYYYMMDD'), 'years')
		$("#myModal").modal("toggle");
		if(age >= 18){
			$("#initial").toggle();
			$("#confirmed").fadeToggle();
			$("button#confirm").fadeToggle();
		}
		if(age < 18){
			$("#initial").toggle();
			$("#minor").fadeToggle();
			$("button#confirm").fadeToggle();
		}
		event.preventDefault();
	});
});