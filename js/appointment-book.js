/**
 * Created by David on 11/21/13.
 * Harvard Extension Schools
 */

//declaring variables
	var cost=0;
	var time=0;
    var label;
    var service;

/***
 * Inner clusters of radio buttons.
***/
	var extensions_fills_sub    =   '<input type="radio" class="service-type" name="service-type" id="acrylic">'+
                                    '<label for="acrylic">Acrylic</label><br>'+
                                    '<input type="radio" class="service-type" name="service-type" id="gel">'+
                                    '<label for="gel">Gel</label><br>';

    var manicure_sub            =   '<input type="radio" class="service-type" name="service-type" id="regular_polish">'+
                                    '<label for="regular_polish">Regular Polish</label><br>'+
                                    '<input type="radio" class="service-type" name="service-type" id="gel_polish">'+
                                    '<label for="gel_polish">Gel Polish</label><br>';

/***
* Click listener for the initial radio button UI. The termination of the UI will result in the cost
* and time values to be set, calculated and the calculate function to be called..
***/

$('input[name=service]').click(function() {

	//Get the label element that comes immediately after this radio button.
	     label       =   $(this).next();
	
	//from the label element get the inner HTML 
	    service     =    label.html();
	
	/*
	 If else block to check the buttons
	 */

	//Can be acrylic (cost = 50, time = 60) or gel (cost = 60, time = 60).
	if (service == 'Nail Extensions'){

		//showing additional options for Nail Extensions clear out other radio options
		$('#fills-options').html('');
		$('#manicure-options').html('');
		$('#extensions-options').html(extensions_fills_sub);

        //next layer checking whether acrylic or gel was selected

        $('input[name=service-type]').click(function(){

            //get the label element that comes after this inner radio button
            label       =   $(this).next();

            //from the label element get the inner HTML
            service     =   label.html();

            //set cost to 50 for acrylic nails and time to 60
            if (service == 'Acrylic') {
                cost    =   50;
                time    =   60;
                console.log('Acrylic Cost:' + cost);
            }

            //set cost to 60 for gel and time to 60
            else if(service == 'Gel'){
                cost    =   60;
                time    =   60;
                console.log('gel Cost:' + cost);
            }

        });

	}

    //Can be acrylic (cost = 35, time = 50) or gel (cost = 60, time = 50).
	else if(service == 'Fills'){

        //get the label element that comes after this inner radio button
        label       =   $(this).next();

        //from the label element get the inner HTML
        service     =   label.html();

		//showing additional options for Nail Extensions clear out other radio options
		$('#extensions-options').html('');
		$('#manicure-options').html('');
		$('#fills-options').html(extensions_fills_sub);


        $('input[name=service-type]').click(function(){

            //get the label element that comes after this inner radio button
            label       =   $(this).next();

            //from the label element get the inner HTML
            service     =   label.html();

            //set cost to 50 for acrylic nails and time to 60
            if (service == 'Acrylic') {
                cost    =   35;
                time    =   50;
                console.log('Acrylic Cost:' + cost);
            }

            //set cost to 60 for gel and time to 60
            else if(service == 'Gel'){
                cost    =   45;
                time    =   50;
                console.log('gel Cost:' + cost);
            }

        });

			
		console.log(label);
	}

    //Can be regular polish (cost = 35, time = 30) or gel polish (cost = 35, time = 45).
	else if(service == 'Manicure'){

        //get the label element that comes after this inner radio button
        label       =   $(this).next();

        //from the label element get the inner HTML
        service     =   label.html();

        //showing additional options for Manicures. Clearing out other radio options
		$('#extensions-options').html('');
		$('#fills-options').html('');
		$('#manicure-options').html(manicure_sub)

        $('input[name=service-type]').click(function(){

            //get the label element that comes after this inner radio button
            label       =   $(this).next();

            //from the label element get the inner HTML
            service     =   label.html();

            //set cost to 50 for acrylic nails and time to 60
            if (service == 'Regular Polish') {
                cost    =   25;
                time    =   30;
                console.log('Regular Polish:' + cost);
            }

            //set cost to 60 for gel and time to 60
            else if(service == 'Gel Polish'){
                cost    =   35;
                time    =   45;
                console.log('Gel Polish:' + cost);
            }

        });
				
	}

	//Can be regular (cost = 45, time = 45) or spa (cost = 60, time = 60).
	else if(service == 'Pedicure'){
		time = 45;
		console.log(time);
		
	}
}); 
//EO main options

/***
 * Function that will be used to calculate the cost and amount of time needed for a service.
 **/
function calculate(){

    $('#results').html(manicure_sub)


}
